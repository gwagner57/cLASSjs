/**
 * Object type Book 
 * @class
 */
var Book = new cLASS({
  Name: "Book",
  properties: {
    "id": {range:"NonEmptyString", label:"ISBN"},
    "title": {range:"NonEmptyString"},
    "year": {range:"Integer"},
    "edition": {range:"PositiveInteger"}
  }
});
