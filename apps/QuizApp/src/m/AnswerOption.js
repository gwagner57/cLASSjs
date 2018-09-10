/**
 * Object type AnswerOption
 * @class
 */
var AnswerOption = new cLASS({
  Name: "AnswerOption",
  isComplexDatatype: true,
  properties: {
    "answerTextItem": {range:"TextItem"},
    "isCorrect": {range:"Boolean"}
  }
});
