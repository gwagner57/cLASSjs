/**
 * @fileOverview  Contains various controller functions for the use case deleteBook
 * @author Mircea Diaconescu
 */
pl.c.deleteBook = {
  initialize: function () {
    pl.c.storageManager.retrieveAll( Book, pl.v.deleteBook.setupUserInterface);
  }
};