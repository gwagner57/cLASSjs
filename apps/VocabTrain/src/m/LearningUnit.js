/**
 * Object type
 * @class
 */
vt.LearningUnit = new cLASS({
  Name: "LearningUnit",
  properties: {
    "id": {range:"AutoIdNumber", label:"ID number"},
    "title": {range:"NonEmptyString", min: 2, max: 200, label:"Title"},
    "description": {range:"NonEmptyString", min: 10, max: 1000,
      label:"Description"},
    //"subjectArea": {range:"NonEmptyString", min: 2, max: 200, label:"Subject area"},
    "exercises": {range: "VocabularyExercise", maxCard: 7, label: "Exercises"}
  }
});
vt.LearningUnit.idCounter = 0;