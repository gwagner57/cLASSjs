/**
 * @fileOverview  Contains various controller functions for the use case updateBook
 * @author Mircea Diaconescu
 */
pl.c.updateBook = {
  initialize: function () {
    pl.c.storageManager.retrieveAll( Book,
        pl.v.updateBook.setupUserInterface);
  }
};