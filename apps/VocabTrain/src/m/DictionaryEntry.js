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
  primaryKey: "source",
  properties: {
    "source": {range:"NonEmptyString", isID:true, label:"Source text"},
    "wordCategory": {range:"WordCategoryEL", label:"Word category"},
    "irregularPlural": {range:"NonEmptyString", label:"Plural form", optional: true},
    "meanings": {range:"MeaningVariant", maxCard: Infinity, label:"Meaning variants"}
  }
});
