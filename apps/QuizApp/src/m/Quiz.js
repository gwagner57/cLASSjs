/**
 * Object type Quiz
 * @class
 */
var Quiz = new cLASS({
  Name: "Quiz",
  properties: {
    "id": {range:"Integer", label:"Quiz ID"},
    "titleTextItem": {range:"TextItem"},
    "questions": {range:"Question", maxCard: Infinity, isOrdered: true}
  }
});
