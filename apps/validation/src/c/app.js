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
    // define a localStorage manager
    pl.c.storageManager = new sTORAGEmANAGER();

  },
  createTestData: function () {
    pl.c.storageManager.add( Book, {id: "006251587X",
      title: "Weaving the Web", year: 2000, edition: 2});
    pl.c.storageManager.add( Book, {id: "0465026567",
      title: "Gödel, Escher, Bach", year: 1999});
    pl.c.storageManager.add( Book, {id: "0465030793",
      title: "I Am A Strange Loop", year: 2008});
  }
};
