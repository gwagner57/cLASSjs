/**
 * Object type Dictionary
 * @class
 */
vt.MeaningVariant = new cLASS({
  Name: "MeaningVariant",
  isComplexDatatype: true,
  properties: {
    "explanation": {range:"NonEmptyString", label:"Explanation"},
    "exampleSentences": {range:"NonEmptyString", label:"Example sentences", maxCard: Infinity},
    "de": {range:"NonEmptyString", label:"German", optional: true},
    "es": {range:"NonEmptyString", label:"Spanish", optional: true},
    "fr": {range:"NonEmptyString", label:"French", optional: true},
    "pt": {range:"NonEmptyString", label:"Portugese", optional: true},
    "it": {range:"NonEmptyString", label:"Italian", optional: true}
  }
});
