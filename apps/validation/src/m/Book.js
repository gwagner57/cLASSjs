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
var Book = new cLASS({
  Name: "Book",
  properties: {
    "id": {range:"NonEmptyString", label:"ISBN", pattern:/\b\d{9}(\d|X)\b/,
      patternMessage:"The ISBN must be a 10-digit string or a 9-digit string followed by 'X'!"},
    "title": {range:"NonEmptyString", min: 2, max: 50},
    "year": {range:"Integer", min: 1459, max: util.nextYear()},
    "edition": {range:"PositiveInteger", optional: true}
  }
});
