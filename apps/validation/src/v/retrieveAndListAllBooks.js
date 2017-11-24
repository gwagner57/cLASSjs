/**
 * @fileOverview  Contains various view functions for the use case listBooks
 * @author Gerd Wagner
 */
 pl.v.retrieveAndListAllBooks = {
  setupUserInterface: function () {
    var tableBodyEl = document.querySelector("table#books>tbody");
    var i=0, book=null, row={}, key="", keys = Object.keys( Book.instances);
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      book = Book.instances[key];
      row = tableBodyEl.insertRow(-1);
      row.insertCell(-1).textContent = book.id;
      row.insertCell(-1).textContent = book.title;
      row.insertCell(-1).textContent = book.convertPropValToString( "year");
      if (book.edition) row.insertCell(-1).textContent = book.convertPropValToString( "edition");
    }
  }
};