/**
 * @fileOverview  App-level controller code
 * @author Gerd Wagner
 */
// main namespace and subnamespace definitions
var vt = {
    m: {},
    v: { dictEntries:{}},
    c: { dictEntries:{}}
};
vt.c.app = {
  name: "VocabularyTraining",
  validateOnInput: false,
  initialize: function() {
    var storageAdapter = {dbName: vt.c.app.name};  // the DB name is set to the app name
    if (!('indexedDB' in window)) {
      console.log("This browser doesn't support IndexedDB. Falling back to LocalStorage.");
      storageAdapter.name = "LocalStorage";
    } else {
      storageAdapter.name = "IndexedDB";
    }
    vt.c.storeMan = new sTORAGEmANAGER( storageAdapter);
    vt.c.storeMan.validateBeforeSave = true;
    vt.c.storeMan.createLog = true;
    vt.c.storeMan.createEmptyDb([vt.DictionaryEntry]).then(
        vt.c.dictEntries.manage.initialize);
  },
  createTestData: function () {
    vt.c.storeMan.add( vt.DictionaryEntry, [
      {source: "abandon", wordCategory: vt.WordCategoryEL.VERB, meanings: [
        new vt.MeaningVariant({
          explanation: "to leave and never return to someone who needs protection or help",
          exampleSentences: ["The child had been abandoned (by his parents) as an infant.", "He abandoned his family."],
          de:"verlassen", fr:"abandonner / laisser / renoncer à / délaisser / se désister de"
        }),
        new vt.MeaningVariant({
          explanation: "to leave and never return to (something)",
          exampleSentences: ["They abandoned the car on a back road.", "That house was abandoned years ago."],
          de:"aufgeben", fr:"abandonner / laisser / renoncer à / délaisser / se désister de"
        })
      ]},
      {source: "ability", wordCategory: vt.WordCategoryEL.NOUN, meanings: [
          new vt.MeaningVariant({
            explanation: "the power or skill to do something",
            exampleSentences: ["a young woman with many remarkable musical abilities"],
            de:"Fähigkeit", fr:"capacité / faculté / compétence"
          })
        ]},
    ]);
  }
};
