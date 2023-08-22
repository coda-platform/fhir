// This file is automatically generated; do not edit manually.
export const FiltersByDataType = {
  "string": [
    "equal",
    "not equal",
    "is null",
    "is not null"
  ],
  "array": [
    "is empty",
    "is not empty",
    "contains any element where",
    "contains no element where",
    "contains only elements where"
  ]
}
export const ResourceTypes = [
  "Condition",
  "Encounter",
  "ImagingStudy",
  "Location",
  "MedicationAdministration",
  "Observation",
  "Patient",
  "Procedure",
  "ServiceRequest"
]
export const AttributesByResourceType = {
  "Condition": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "encounter.reference",
      "type": "string"
    },
    {
      "name": "onsetDateTime",
      "type": "dateTime"
    },
    {
      "name": "code.coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "code.text",
      "type": "string"
    }
  ],
  "Encounter": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "class.system",
      "type": "string"
    },
    {
      "name": "class.code",
      "type": "string"
    },
    {
      "name": "class.display",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "location",
      "type": "array",
      "subpaths": [
        {
          "name": "location.reference",
          "type": "string"
        },
        {
          "name": "location.display",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        },
        {
          "name": "period.start",
          "type": "dateTime"
        },
        {
          "name": "period.end",
          "type": "dateTime"
        }
      ]
    },
    {
      "name": "period.start",
      "type": "dateTime"
    },
    {
      "name": "period.end",
      "type": "dateTime"
    }
  ],
  "ImagingStudy": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "modality",
      "type": "array",
      "subpaths": [
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "system",
          "type": "string"
        }
      ]
    },
    {
      "name": "identifier",
      "type": "array",
      "subpaths": [
        {
          "name": "use",
          "type": "string"
        },
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "value",
          "type": "string"
        }
      ]
    },
    {
      "name": "started",
      "type": "dateTime"
    },
    {
      "name": "numberOfSeries",
      "type": "integer"
    },
    {
      "name": "numberOfInstances",
      "type": "integer"
    },
    {
      "name": "description",
      "type": "string"
    },
    {
      "name": "procedureCode",
      "type": "array",
      "subpaths": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "coding",
          "type": "array",
          "subpaths": [
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        }
      ]
    },
    {
      "name": "series",
      "type": "array",
      "subpaths": [
        {
          "name": "uid",
          "type": "string"
        },
        {
          "name": "number",
          "type": "integer"
        },
        {
          "name": "modality.system",
          "type": "string"
        },
        {
          "name": "modality.code",
          "type": "string"
        },
        {
          "name": "modality.display",
          "type": "string"
        },
        {
          "name": "bodySite.system",
          "type": "string"
        },
        {
          "name": "bodySite.code",
          "type": "string"
        },
        {
          "name": "bodySite.display",
          "type": "string"
        },
        {
          "name": "numberOfInstances",
          "type": "integer"
        },
        {
          "name": "instance",
          "type": "array",
          "subpaths": [
            {
              "name": "number",
              "type": "integer"
            },
            {
              "name": "uid",
              "type": "dateTime"
            },
            {
              "name": "sopClass.system",
              "type": "dateTime"
            },
            {
              "name": "sopClass.code",
              "type": "string"
            },
            {
              "name": "title",
              "type": "string"
            }
          ]
        }
      ]
    }
  ],
  "Location": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "identifier",
      "type": "array",
      "subpaths": [
        {
          "name": "value",
          "type": "string"
        }
      ]
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "physicalType.coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "type",
      "type": "array",
      "subpaths": [
        {
          "name": "coding",
          "type": "array",
          "subpaths": [
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        }
      ]
    },
    {
      "name": "partOf.reference",
      "type": "string"
    }
  ],
  "MedicationAdministration": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "context.reference",
      "type": "string"
    },
    {
      "name": "request.reference",
      "type": "string"
    },
    {
      "name": "medicationReference.reference",
      "type": "string"
    },
    {
      "name": "contained",
      "type": "array",
      "subpaths": [
        {
          "name": "resourceType",
          "type": "string"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "code.coding",
          "type": "array",
          "subpaths": [
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        }
      ]
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "effectivePeriod.start",
      "type": "dateTime"
    },
    {
      "name": "effectivePeriod.end",
      "type": "dateTime"
    },
    {
      "name": "effectiveDateTime",
      "type": "dateTime"
    },
    {
      "name": "dosage.text",
      "type": "string"
    },
    {
      "name": "dosage.route.coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "dosage.dose.system",
      "type": "string"
    },
    {
      "name": "dosage.dose.unit",
      "type": "string"
    },
    {
      "name": "dosage.dose.code",
      "type": "string"
    },
    {
      "name": "dosage.dose.value",
      "type": "integer"
    },
    {
      "name": "dosage.rateQuantity.system",
      "type": "string"
    },
    {
      "name": "dosage.rateQuantity.unit",
      "type": "string"
    },
    {
      "name": "dosage.rateQuantity.code",
      "type": "string"
    },
    {
      "name": "dosage.rateQuantity.value",
      "type": "integer"
    }
  ],
  "Observation": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "category",
      "type": "array",
      "subpaths": [
        {
          "name": "coding",
          "type": "array",
          "subpaths": [
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        }
      ]
    },
    {
      "name": "effectiveDateTime",
      "type": "dateTime"
    },
    {
      "name": "issued",
      "type": "dateTime"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "encounter.reference",
      "type": "string"
    },
    {
      "name": "code.coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "code.text",
      "type": "string"
    },
    {
      "name": "valueQuantity.value",
      "type": "string"
    },
    {
      "name": "valueQuantity.unit",
      "type": "string"
    },
    {
      "name": "interpretation",
      "type": "array",
      "subpaths": [
        {
          "name": "coding",
          "type": "array",
          "subpaths": [
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        },
        {
          "name": "text",
          "type": "string"
        }
      ]
    },
    {
      "name": "referenceRange",
      "type": "array",
      "subpaths": [
        {
          "name": "text",
          "type": "string"
        }
      ]
    },
    {
      "name": "note",
      "type": "array",
      "subpaths": [
        {
          "name": "text",
          "type": "string"
        }
      ]
    }
  ],
  "Patient": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "gender",
      "type": "string"
    },
    {
      "name": "birthDate",
      "type": "dateTime"
    },
    {
      "name": "deceasedDateTime",
      "type": "dateTime"
    },
    {
      "name": "age",
      "type": "integer"
    },
    {
      "name": "isDeceased",
      "type": "boolean"
    }
  ],
  "Procedure": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "encounter.reference",
      "type": "string"
    },
    {
      "name": "basedOn",
      "type": "array",
      "subpaths": [
        {
          "name": "reference",
          "type": "string"
        }
      ]
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "code.coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "code.text",
      "type": "string"
    },
    {
      "name": "performedDateTime",
      "type": "dateTime"
    },
    {
      "name": "performedPeriod.start",
      "type": "dateTime"
    },
    {
      "name": "performedPeriod.end",
      "type": "dateTime"
    }
  ],
  "ServiceRequest": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "subject.reference",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "intent",
      "type": "string"
    },
    {
      "name": "authoredOn",
      "type": "dateTime"
    },
    {
      "name": "occurrenceDateTime",
      "type": "dateTime"
    },
    {
      "name": "priority",
      "type": "string"
    }
  ]
};

