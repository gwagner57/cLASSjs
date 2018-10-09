vt.v.learnUnits.renderUnit = { // Choose the Learning Unit
  var: exerciseNumber = 0,
  var: problemNumber = 0,
  var: prevProbNumber = 0,
  var: unitNumber = 0,
  var: mistakes = 0,
  var: totalMistakes = 0,
  var: realStep = 0,
  var: flag = null,
  var: nextNum = 0,
  setupUserInterface: function () {
    var formUnEl = document.querySelector("section#Unit-Render > form"),
        unitSelectEl = formUnEl.elements["selectUnit"],
        exSelectEl = formUnEl.elements["selectExercise"],
        exerciseEl = document.getElementById("exercise1"),
        problemEl = document.getElementById("problem1"),
        resultsEl = document.getElementById("results");
    unitSelectEl.addEventListener("change",
          vt.v.learnUnits.renderUnit.handleUnitSelectChangeEvent);
    exSelectEl.addEventListener("change", vt.v.learnUnits.renderUnit.handleExerciseSelectChangeEvent);
    dom.fillSelectWithOptionsFromEntityMap( unitSelectEl, vt.LearningUnit.instances,
        {displayProp:"title"});
    if (exerciseEl.innerHTML !== "") {
      exerciseEl.innerHTML = "";
    }
      document.getElementById("correctAns").style.display = "none";
      document.getElementById("wrongAns").style.display = "none";
    if ( document.getElementById("exerciseSelect").style.display === "none") {
      document.getElementById("correctAns").style.display = "none";
      document.getElementById("wrongAns").style.display = "none";
      document.getElementById("unitSelect").style.display = "block";
      document.getElementById("unitId").style.display = "block";
      document.getElementById("unitTitle").style.display = "block";
      document.getElementById("unitDesc").style.display = "block";
      document.getElementById("goSelectUnit").style.display = "none";
      document.getElementById("results").style.display = "none";
      document.getElementById("problem1").style.display = "none";
    }
    document.getElementById("Main").style.display = "none";
    document.getElementById("Unit-Render").style.display = "block";// change to main if need
    document.getElementById("Questions").style.display = "none";
    document.getElementById("Exercise").style.display = "none";
    document.querySelector("section#Unit-Render > form button[id='submit1']").style.display = "none";
    document.getElementById("exerciseSelect").style.display = "none";
    document.getElementById("takeProblem").style.display = "none";
    document.getElementById("nextProblem").style.display = "none";
  },

  handleUnitSelectChangeEvent: function () {  //unit changed
    var formUnEl = document.querySelector("section#Unit-Render > form"),
        unitSelectEl = formUnEl.elements["selectUnit"],
        exSelectEl = formUnEl.elements["selectExercise"],
        problemEl = document.getElementById("problem1"),
        exerciseEl = document.getElementById("exercise1"), unit = null, keyEx, ku;
    unitNumber = formUnEl.selectUnit.value;
    if (unitNumber && unitNumber !== ku) {
      dom.fillSelectWithOptionsFromEntityMap(exSelectEl, vt.LearningUnit.instances, "title");
      unit = vt.LearningUnit.instances[unitNumber];
      formUnEl.id.value = unit.id;
      formUnEl.title.value = unit.title;
      formUnEl.description.value = unit.description;
      document.querySelector("section#Unit-Render > form button[id='submit1']").style.display = "inline";
    } else {
      formUnEl.reset();
      unitSelectEl.selectedIndex = 0;
      document.querySelector("section#Unit-Render > form button[id='submit1']").style.display = "none";
    }
  },

  handleSubmit1ButtonClickEvent: function() {
    var formUnEl = document.querySelector("section#Unit-Render > form"),
        exerciseEl = document.getElementById("exercise1"),// for results  and next task view
        problemEl = document.getElementById("problem1"),
        resultsEl = document.getElementById("results"),
        unitSelectEl = formUnEl.elements["selectUnit"],
        exSelectEl = formUnEl.elements["selectExercise"],
        slots = {}, ke, unit = null, l,
        exercise = null, divEl = null;
    let target;
    realStep++;
    document.getElementById("correctAns").style.display = "none";
    document.getElementById("wrongAns").style.display = "none";
    document.getElementById("exerciseSelect").style.display = "none";
    document.getElementById("unitSelect").style.display = "none";
    document.getElementById("unitId").style.display = "none";
    document.getElementById("unitTitle").style.display = "none";
    document.getElementById("unitDesc").style.display = "none";
    document.getElementById("nextProblem").style.display = "block";
    document.getElementById("nextExercise").style.display = "none";
    document.getElementById("takeProblem").style.display = "block";
    document.getElementById("problem1").style.display = "block";
    document.querySelector("section#Unit-Render > form button[id='submit1']").style.display = "none";
    unit = vt.data.learnUnits[unitNumber-1];
    if (problemNumber === 0) {
      resultsEl.innerHTML = "";
      exerciseEl.style.display = "block";
      exerciseEl.innerHTML = "";
    }
    var num = exerciseNumber + 1, pnum = problemNumber +1;
    exercise = vt.data.learnUnits[unitNumber-1].exercises[exerciseNumber];
    if (problemNumber !== exercise.problems.length ){
      problemEl.innerHTML = "";
      if (problemNumber === 0) {
        exerciseEl.appendChild(dom.createElement("p", {content: "<b>Unit #" + unitNumber + ", exercise #" + num}));
        exerciseEl.appendChild(dom.createElement("p", {content:  "Contains "
            + exercise.problems.length + " problems. " + "<b>Task:</b> " + exercise.renderingForm}));
      }
      let problem = exercise.problems[problemNumber];
      let source = problem.source;
      let dictEntry;
      l = vt.data.dictEntries.length;
      for (var i = 0; i < l; i++) {
        dictEntry = vt.data.dictEntries[i];
        if (dictEntry.source === source) {
          break;
        }
      }
      if (dictEntry) {
          target = dictEntry.meanings[problem.meaningVariantNo-1].de;
      }
      if (realStep === 1 || target === formUnEl.answer.value) {
        if (target === formUnEl.answer.value) {
          problemNumber++;
          problem = exercise.problems[problemNumber];
          pnum++;
          document.getElementById("correctAns").style.display = "block";
          document.getElementById("wrongAns").style.display = "none";
        } else if (!formUnEl.answer.value) {
          document.getElementById("correctAns").style.display = "none";
        }
        if (problemNumber !== exercise.problems.length) {
          problemEl.innerHTML = "";
          problemEl.appendChild( dom.createElement( "p", {content: "<b>Problem #"+ pnum +"</b>: " + "'" + problem.source + "'" }));
          problemEl.appendChild(dom.createElement("p", {content: "Translation. If you sure the answer is correct, press 'next' button."}));
          formUnEl.appendChild(problemEl);
          formUnEl.appendChild(document.getElementById("takeProblem"));
          formUnEl.appendChild(document.getElementById("nextProblem"));
        } else {
          resultsEl.style.display = "block";
          exerciseEl.style.display = "none";
          document.getElementById("wrongAns").style.display = "none";
          document.getElementById("correctAns").style.display = "none";
          document.getElementById("nextExercise").style.display = "block";
          document.getElementById("nextProblem").style.display = "none";
          document.getElementById("takeProblem").style.display = "none";
          document.getElementById("problem1").style.display = "none";
          resultsEl.appendChild( dom.createElement( "p", {content: "<b>Congratulations! You have completed "
              + num + " exercise. " +"</b>: " + "There was " + mistakes + " mistakes in this exercise" }));
          formUnEl.appendChild(resultsEl);
          totalMistakes += mistakes;
          problemNumber = 0;
          exerciseNumber++;
          if (exerciseNumber >= unit.exercises.length){
            resultsEl.innerHTML = "";
            resultsEl.appendChild(document.createTextNode("Congratulations! You have completed" +
                " all the exercises of this unit. Click 'Finish' button to move to unit selection."));
            resultsEl.appendChild( dom.createElement( "p", {content: "<b>You have taken "
                + totalMistakes + " mistakes. " +"</b>" + "It is a good result."}));
            formUnEl.appendChild(resultsEl);
            document.getElementById("nextExercise").style.display = "none";
            document.getElementById("goSelectUnit").style.display = "block";
            exerciseNumber = 0;
            totalMistakes = 0;
          }
          mistakes = 0;
        }
        //nextNum = problemNumber + 1 ;
        flag = true;
        target = null;
        realStep++;
      } else {
        if (flag) {
          mistakes++;
        }
        document.getElementById("wrongAns").style.display = "block";
        document.getElementById("correctAns").style.display = "none";
        flag = false;
        problemEl.appendChild( dom.createElement( "p", {content: "<b>Problem #"+ pnum +"</b>: " + "'" + problem.source + "'" }));
        problemEl.appendChild(dom.createElement("p", {content: "Translation. If you sure the answer is correct, press 'next' button."}));
        formUnEl.appendChild(problemEl);
        formUnEl.appendChild(document.getElementById("takeProblem"));
        formUnEl.appendChild(document.getElementById("nextProblem"));
      }
    } else {
      resultsEl.style.display = "block";
      exerciseEl.style.display = "none";
      document.getElementById("wrongAns").style.display = "none";
      document.getElementById("correctAns").style.display = "none";
      document.getElementById("nextExercise").style.display = "block";
      document.getElementById("nextProblem").style.display = "none";
      document.getElementById("takeProblem").style.display = "none";
      document.getElementById("problem1").style.display = "none";
      resultsEl.appendChild( dom.createElement( "p", {content: "<b>Congratulations! You have completed "
         + num + " exercise. " +"</b>: " + "There was " + mistakes + " mistakes in this exercise" }));
      formUnEl.appendChild(resultsEl);
      totalMistakes += mistakes;
      problemNumber = 0;
      exerciseNumber++;
      if (exerciseNumber >= unit.exercises.length){
        resultsEl.innerHTML = "";
        resultsEl.appendChild(document.createTextNode("Congratulations! You have completed" +
           " all the exercises of this unit. Click 'Finish' button to move to unit selection."));
        resultsEl.appendChild( dom.createElement( "p", {content: "<b>You have taken "
            + totalMistakes + " mistakes. " +"</b>" + "It is a good result."}));
        formUnEl.appendChild(resultsEl);
        document.getElementById("nextExercise").style.display = "none";
        document.getElementById("goSelectUnit").style.display = "block";
        exerciseNumber = 0;
        totalMistakes = 0;
      }
      mistakes = 0;
    }
  },

  backToMain: function () {
    document.getElementById("Main").style.display = "block";
    document.getElementById("Unit-Render").style.display = "none";
    document.getElementById("Exercise").style.display = "none";
    document.getElementById("Questions").style.display = "none";
  }
};

vt.v.learnUnits.list = { // the prototype function
  setupUserInterface: function () {
    var formEl = document.querySelector("section#Exercise-List > form"),
        exerciseSelectEl = formEl.elements["selectExercise"],
        unit = null;
    exerciseSelectEl.addEventListener("change",
        vt.v.learnUnits.list.handleExerciseSelectChangeEvent);
    dom.fillSelectWithOptionsFromEntityMap( exerciseSelectEl, vt.VocabularyExercise.instances,
        {displayProp:"problems"});
    document.getElementById("Exercise-List").style.display = "none";
    document.getElementById("Exercise-M").style.display = "block";
  },
};

vt.v.learnUnits.main = { // main page
  setupUserInterface: function () {
    document.getElementById("Main").style.display = "block";
    document.getElementById("Unit-Render").style.display = "none";
    document.getElementById("Exercise").style.display = "none";
    document.getElementById("Questions").style.display = "none";
  }
};

vt.v.learnUnits.manage = {
  setupUserInterface : function () {
    document.getElementById("Unit-R").style.display = "none";
    document.getElementById("Unit-M").style.display = "block";
  },
  exit: function () {
  },
  refreshUI: function () {
    document.getElementById("Unit-M").style.display = "block";
    document.getElementById("Unit-Render").style.display = "none";
  }
};

vt.v.learnUnits.retrieve = {
  setupUserInterface: function () {
    var tableBodyEl = document.querySelector("section#Unit-R>table>tbody");
    var row = null, i = 0, unit = null, listEl = null, keys = Object.keys( vt.LearningUnit.instances);
    tableBodyEl.innerHTML = "";
    for (i = 0; i < keys.length; i+=1) {
      unit = vt.LearningUnit.instances[keys[i]];
      row = tableBodyEl.insertRow(-1);
      row.insertCell(-1).textContent = unit.id.value;
      row.insertCell(-1).textContent = unit.title.value;
      row.insertCell(-1).textContent = unit.description.value;
  }
  document.getElementById("Unit-M").style.display = "none";
  document.getElementById("Unit-R").style.display = "block";
  }
};