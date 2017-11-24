/**
 * @fileOverview  Contains various controller functions for the use case createBook
 * @author Gerd Wagner
 */
pl.c.createBook = {
  initialize: function () {
    pl.c.storageManager.retrieveAll( Book,
        pl.v.createBook.setupUserInterface);
  }
};