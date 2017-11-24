/**
 * @fileOverview  Contains various controller functions for the use case listBooks
 * @author Gerd Wagner
 */
pl.c.retrieveAndListAllBooks = {
  initialize: function () {
    pl.c.storageManager.retrieveAll( Book, pl.v.retrieveAndListAllBooks.setupUserInterface);
  }
};