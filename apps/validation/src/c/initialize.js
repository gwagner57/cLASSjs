/**
 * @fileOverview  Defining the main namespace ("public library") and its MVC subnamespaces
 * @author Gerd Wagner
 */
// main namespace pl = "public library"
var pl = {m:{}, v:{}, c:{}};
// define a localStorage manager
pl.c.storageManager = new sTORAGEmANAGER();
/*******************************************
 *** Auxiliary methods for testing **********
 ********************************************/
/**
 *  Create and save test data
 */
pl.c.createTestData = function () {
    pl.c.storageManager.add( Book, {id: "006251587X",
        title: "Weaving the Web", year: 2000, edition: 2});
    pl.c.storageManager.add( Book, {id: "0465026567",
        title: "Gödel, Escher, Bach", year: 1999});
    pl.c.storageManager.add( Book, {id: "0465030793",
        title: "I Am A Strange Loop", year: 2008});
};
