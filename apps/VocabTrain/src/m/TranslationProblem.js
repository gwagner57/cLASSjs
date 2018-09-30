/**
 * Complex Datatype
 * @class
 */
vt.TranslationProblem = new cLASS({
  Name: "TranslationProblem",
  isComplexDatatype: true,
  properties: {
    "source": {range:"NonEmptyString", label:"Source text"},
    "meaningVariantNo": {range: "PositiveInteger", label: "Meaning variant number", optional: true}
  },
  methods: {
  }
});
