/**
 * @fileOverview  Various controller functions for managing books
 * @author Gerd Wagner
 */
pl.c.books.manage = {
  initialize: function () {
    // first load the required data, then set up the UI
    pl.c.storageManager.retrieveAll( Book, pl.v.books.manage.setupUserInterface);
  }
};