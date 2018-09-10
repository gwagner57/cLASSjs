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
var TextItem = new cLASS({
  Name: "TextItem",
  properties: {
    "id": {range:"Integer", label:"ID"},
    "language": {range:"IsoLanguageCode"},
    "Text": {range:"String"},
  }
});
