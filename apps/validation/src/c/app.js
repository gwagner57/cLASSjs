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
    if (!('indexedDB' in window)) {
      console.log("This browser doesn't support IndexedDB. Falling back to LocalStorage.");
      pl.c.storageManager = new sTORAGEmANAGER();
    } else {
      pl.c.storageManager = new sTORAGEmANAGER({name:"IndexedDB"});
    }
    pl.c.storageManager.createEmptyDb().then( pl.c.books.manage.initialize);
  },
  createTestData: function () {
    pl.c.storageManager.add( Book, [
      {id: "006251587X", title: "Weaving the Web", year: 2000, edition: 2},
      {id: "0465026567", title: "Gödel, Escher, Bach", year: 1999},
      {id: "0465030793", title: "I Am a Strange Loop", year: 2008}
    ]);
  }
};
