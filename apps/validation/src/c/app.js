/**
 * @fileOverview  App-level controller code
 * @author Gerd Wagner
 */
// main namespace and subnamespace definitions
var pl = {
    m: {},
    v: { books:{}},
    c: { books:{}}
};
pl.c.app = {
  name: "PublicLibrary",
  validateOnInput: false,
  initialize: function() {
    var storageAdapter = {dbName: pl.c.app.name};  // the DB name is set to the app name
    if (!('indexedDB' in window)) {
      console.log("This browser doesn't support IndexedDB. Falling back to LocalStorage.");
      storageAdapter.name = "LocalStorage";
    } else {
      storageAdapter.name = "IndexedDB";
    }
    pl.c.storeMan = new sTORAGEmANAGER( storageAdapter);
    pl.c.storeMan.createEmptyDb().then( pl.c.books.manage.initialize);
  },
  loadAppData: function () {
    pl.c.storeMan.add( Book, [
      {id: "006251587X", title: "Weaving the Web", year: 2000, edition: 2},
      {id: "0465026567", title: "Gödel, Escher, Bach", year: 1999},
      {id: "0465030793", title: "I Am a Strange Loop", year: 2008}
    ]);
  }
};
