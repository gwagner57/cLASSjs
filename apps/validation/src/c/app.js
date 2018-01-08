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
  initialize: function() {
    pl.c.storageManager = new sTORAGEmANAGER({name:"IndexedDB"});
    //pl.c.storageManager = new sTORAGEmANAGER();
    pl.c.storageManager.createDbConnection("PublicLibrary", [Book],
        pl.c.app.createTestData);
        //pl.c.books.manage.initialize);
  },
  createTestData: function () {
    pl.c.storageManager.add( Book, [
      {id: "006251587X", title: "Weaving the Web", year: 2000, edition: 2},
      {id: "0465026567", title: "Gödel, Escher, Bach", year: 1999},
      {id: "0465030793", title: "I Am a Strange Loop", year: 2008}
    ]);
  }
};
