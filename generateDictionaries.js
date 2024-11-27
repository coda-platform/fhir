const fs = require("fs");
const _ = require("lodash");
const mapToDatabaseColumn = require("./spec/helpers/unionTypes");

// https://www.hl7.org/fhir/datatypes.html
const DATETIME_REGEXP =
  /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z?|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$/;

const DATE_REGEXP =
  /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/;

const TIME_REGEXP = /^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/;

const deduceTypeFromAttributeValue = (value) => {
  if (typeof value === "boolean") {
    return "boolean";
  } else if (typeof value === "string") {
    if (value.match(DATE_REGEXP)) {
      return "date";
    } else if (value.match(TIME_REGEXP)) {
      return "time";
    } else if (value.match(DATETIME_REGEXP)) {
      return "dateTime";
    } else {
      return "string";
    }
  } else if (typeof value === "number") {
    if (value.toString() === parseInt(value).toString()) {
      return "integer";
    } else if (value.toString() === parseFloat(value).toString()) {
      return "decimal";
    } else {
      throw new Error("Could not deduce number format: ", value);
    }
  } else {
    throw new Error("Could not deduce type from attribute: ", value);
  }
};

const recursivelyFindPaths = (
  attributeDict,
  attributeNames,
  pathPrefix,
  flatten
) => {
  const paths = [];
  for (const attributeName of attributeNames) {
    const attribute = attributeDict[attributeName];
    const prefixedAttributeName = pathPrefix
      ? [pathPrefix, attributeName].join(".")
      : attributeName;
    if (Array.isArray(attribute)) {
      if (flatten) {
        paths.push(recursivelyFindPaths(attribute[0], Object.keys(attribute[0]), prefixedAttributeName, flatten));
      }
      else {
        paths.push({
          name: prefixedAttributeName,
          type: "array",
          subpaths: recursivelyFindPaths(attribute[0], Object.keys(attribute[0])),
        });

      }
    } else if (typeof attribute === "object") {
      paths.push(
        recursivelyFindPaths(
          attribute,
          Object.keys(attribute),
          pathPrefix ? [pathPrefix, attributeName].join(".") : attributeName,
          flatten
        )
      );
    } else {
      if (attributeName === "code" || attributeName === "reference") {
        paths.push({
          name: prefixedAttributeName,
          type: "string"
        });
      }
      else if (pathPrefix && prefixedAttributeName === "valueQuantity.value") {
        paths.push({
          name: prefixedAttributeName,
          type: "integer"
        })
      }
      else {
        paths.push({
          name: prefixedAttributeName,
          type: deduceTypeFromAttributeValue(attribute),
        });
      }
    }
  }
  return _.flatten(paths);
};

const getAttributeDictionary = (basePath, templateFileList, flatten) => {
  var attributeDictionaryArray = {}
  for (const templateFile of templateFileList) {
    const templateFilePath = basePath + templateFile;

    const templateFileContent = fs.readFileSync(basePath + templateFile, "utf-8");
    const templateFileContentWithoutComments = templateFileContent.replace(
      /\n\s*\/\/(.*)/g,
      ""
    );

    const resourceAttributeDictionary = JSON.parse(
      templateFileContentWithoutComments
    );

    const resourceName = templateFile.split("-")[0].split(".")[0];
    let resourceAttributeNames = Object.keys(resourceAttributeDictionary);

    if (!flatten) {
      resourceAttributeNames = resourceAttributeNames.filter((x) => x != "id");
    }

    const resourcePaths = recursivelyFindPaths(
      resourceAttributeDictionary,
      resourceAttributeNames,
      "",
      flatten
    );

    attributeDictionaryArray[resourceName] = _.unionBy(resourcePaths, attributeDictionaryArray[resourceName], 'name');

    if (resourceName === 'Patient') {
      attributeDictionaryArray[resourceName].push({
        "name": "age",
        "type": "integer"
      })
      attributeDictionaryArray[resourceName].push({
        "name": "isDeceased",
        "type": "boolean"
      })
    }
  }
  mapToDatabaseColumn(attributeDictionaryArray);
  return attributeDictionaryArray
}

var basePath = "./lib/templates/CHUM_profiles/R5/";
var templateFileList = fs.readdirSync(basePath);

var attributeDictionary = {};
attributeDictionary = getAttributeDictionary(basePath, templateFileList, false);
const flatAttributeDictionary = getAttributeDictionary(basePath, templateFileList, true);


const resourceTypes = Object.keys(attributeDictionary);

const filtersByDataType = {
  string: ["equal", "not equal", "is null", "is not null"],
  array: [
    "is empty",
    "is not empty",
    "contains any element where",
    "contains no element where",
    "contains only elements where",
  ],
};

fs.writeFileSync(
  "index.ts",
  `// This file is automatically generated; do not edit manually.
export const FiltersByDataType = ${JSON.stringify(filtersByDataType, null, 2)}
export const ResourceTypes = ${JSON.stringify(resourceTypes, null, 2)}
export const AttributesByResourceType = ${JSON.stringify(
    attributeDictionary,
    null,
    2
  )};
export const FlatAttributesByResourceType = ${JSON.stringify(
    flatAttributeDictionary,
    null,
    2
  )};
`);
