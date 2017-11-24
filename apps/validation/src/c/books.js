/**
 * @fileOverview  Contains various controller functions for managing books
 * @author Gerd Wagner
 */
pl.c.books.manage = {
  initialize: function () {
    pl.c.storageManager.retrieveAll( Book, pl.v.books.manage.setupUserInterface);
  }
};