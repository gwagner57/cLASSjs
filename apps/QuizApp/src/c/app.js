/**
 * @fileOverview  App-level controller code
 * @author Gerd Wagner
 */
// main namespace and subnamespace definitions
var pl = {
    m: {},
    v: { quizzes:{}, questions:{}},
    c: { quizzes:{}, questions:{}}
};
pl.c.app = {
  name: "MakeAQuiz",
  validateOnInput: false,
  initialize: function() {
    var storageAdapter = {dbName: pl.c.app.MakeAQuiz};  // the DB name is set to the app name
    if (!('indexedDB' in window)) {
      console.log("This browser doesn't support IndexedDB. Falling back to LocalStorage.");
      storageAdapter.name = "LocalStorage";
    } else {
      storageAdapter.name = "IndexedDB";
    }
    pl.c.storageManager = new sTORAGEmANAGER( storageAdapter);
    pl.c.storageManager.createEmptyDb().then( pl.c.quizzes.manage.initialize);
  },
  createTestData: function () {
    pl.c.storageManager.add(Question, [{id:1,questionTextItem:"How old are you?",hasManyCorrectAnswers:false}])
    pl.c.storageManager.add( Quiz, [
      {id: 2, titleTextItem: "Personal info", questions:[{id:1,questionTextItem:"How old are you?",hasManyCorrectAnswers:false}]}
      ]);
  },
  clearData: function () {

  }
};
