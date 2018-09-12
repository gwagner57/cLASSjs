/**
 * Object type
 * @class
 */
vt.VocabularyExercise = new cLASS({
  Name: "VocabularyExercise",
  isComplexDatatype: true,
  properties: {
    "renderingForm": {range:"RenderingForm", label:"Rendering form"},
    "problems": {range: "TranslationProblem", maxCard: Infinity, label: "Exercises"}
  },
  methods: {
    /**
     * @method
     * @return {number}  The number of problems in learning unit
     */
    "getNmrOfProblems": function () {
      var n=0, rf=null;
      for (var i=0; i < this.exercises.length; i++) {
        rf = this.exercises[i].renderingForm;
        if (!rf.noEvaluation &&
            (!vt.env.isTouchScreenDevice || rf.worksForTouchScreens) &&
            (!vt.env.isIE9 || rf.worksForIE9)
        ) {
          n = n + this.exercises[i].numberOfProblems;
        }
      }
      return n;
    }
  }
});
