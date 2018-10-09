/**
 * @fileOverview  App-level controller code
 * @author Gerd Wagner
 */
// main namespace and subnamespace definitions
var vt = {
  m: { DictionaryEntry:{}},
  v: { dictEntries:{}, learnUnits:{}},
  c: { dictEntries:{}, learnUnits:{}},
  data: {dictEntries:{}, learnUnits:{}}
};
vt.c.app = {
  name: "VocabularyTraining",
  validateOnInput: false,
  initialize: function() {
    vt.c.app.loadAppData();
    vt.v.learnUnits.renderUnit.setupUserInterface();
  },
  loadAppData: function () {
    try {
      for (let rec of vt.data.dictEntries) {
        t1 = new vt.DictionaryEntry( rec);
      }
      for (let rec of vt.data.rendForms) {
        t1 = new vt.RenderingForm( rec);
      }
      for (let rec of vt.data.learnUnits) {
        t1 = new vt.LearningUnit( rec);
      }
    } catch (e) {
      if (e instanceof ConstraintViolation) {
        console.log( e.constructor.name +": "+ e.message);
      } else console.log( e);
    }
  }
};
