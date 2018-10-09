/**
 * Enumeration QuestionTypeEL
 * @enum
 */
vt.WordCategoryEL = new eNUMERATION("WordCategoryEL",["verb", "noun", "adjective"]);

/**
 * Object type Dictionary
 * @class
 */
vt.DictionaryEntry = new cLASS({
  Name: "DictionaryEntry",
  isComplexDatatype: true,
  properties: {
    "source": {range:"NonEmptyString",  label:"Source text"},
    "wordCategory": {range:"WordCategoryEL", label:"Word category"},
    "irregularPlural": {range:"NonEmptyString", label:"Plural form", optional: true},
    "meanings": {range:"MeaningVariant", maxCard: Infinity, label:"Meaning variants"}
  },
  methods: {
    "checkExist": {
      function (s) {
        vt.DictionaryEntry.instances = {};
        if (!vt.data.dictEntries[s]) {
          return "Wrong word";
        } else {
          return vt.DictionaryEntry.instances[s];
        }
      }
    },
  }
});

