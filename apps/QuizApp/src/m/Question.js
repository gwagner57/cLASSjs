/**
 * @fileOverview  The model class Book with attribute definitions and storage management methods
 * @author Gerd Wagner
 * @copyright Copyright 2013-2014 Gerd Wagner, Chair of Internet Technology, Brandenburg University of Technology, Germany.
 * @license This code is licensed under The Code Project Open License (CPOL), implying that the code is provided "as-is",
 * can be modified to create derivative works, can be redistributed, and can be used in commercial applications.
 */
/**
 * Object type Book
 * @class
 */
let Question = new cLASS({
  Name: "Question",
  properties: {
    "id": {range:"Integer", label:"Question ID"},
    "type": {range: "QuestionTypeEL"},
    "questionTextItem": {range:"TextItem"},
    "hasManyCorrectAnswers": {range:"Boolean", isOptional: true},
    "answerOptions": {range: "AnswerOption", maxCard: Infinity, minCard: 2, isOptional: true}
  }
});
