vt.v.learnUnits.renderUnit = { // Choose the Learning Unit
  var: exerciseNumber = 0,
  var: problemNumber = 0,
  var: unitNumber = 0,
  var: mistakes = 0,
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
    if ( document.getElementById("exerciseSelect").style.display === "none") {
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
        slots = {}, ke, unit = null,
        exercise = null, divEl = null;
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
    var flag;
    var num = exerciseNumber + 1, pnum = problemNumber +1;
    exercise = vt.data.learnUnits[unitNumber-1].exercises[exerciseNumber];
    if (problemNumber !== 0) {
        mistakes++;
        //if (!vt.MeaningVariant.instances.de[formUnEl.answer.value]) {
          //  flag = false;
        //} else {
          //  flag = true;
        //}   formUnEl.setCustomValidity( vt.RenderingForm.methods.checkCorrect(formUnEl.answer.value).message);
    }
    if (problemNumber !== exercise.problems.length /*&& flag === true/*&& formUnEl.checkValidity()*/){
      problemEl.innerHTML = "";
      if (problemNumber === 0) {
        exerciseEl.appendChild(dom.createElement("p", {content: "<b>Unit #" + unitNumber + ", exercise #" + num}));
        exerciseEl.appendChild(dom.createElement("p", {content:  "Contains "
            + exercise.problems.length + " problems. " + "<b>Task:</b> " + exercise.renderingForm}));
      }
      var problem = exercise.problems[problemNumber];
      problemEl.appendChild( dom.createElement( "p", {content: "<b>Problem #"+ pnum +"</b>: " + "'" + problem.source + "'" }));
      problemEl.appendChild( document.createTextNode("Translation."));
      problemEl.appendChild(dom.createElement("p", {content: "<b>If you sure the answer is correct, press 'next' button."}));
      formUnEl.appendChild(problemEl);
      formUnEl.appendChild(document.getElementById("takeProblem"));
      formUnEl.appendChild(document.getElementById("nextProblem"));
      problemNumber++;
    } else {
      resultsEl.style.display = "block";
      exerciseEl.style.display = "none";
      document.getElementById("nextExercise").style.display = "block";
      document.getElementById("nextProblem").style.display = "none";
      document.getElementById("takeProblem").style.display = "none";
      document.getElementById("problem1").style.display = "none";
      resultsEl.appendChild( dom.createElement( "p", {content: "<b>Congratulations! You have completed "
         + num + " exercise. " +"</b>: " + "There was " + mistakes + " mistakes in this exercise" }));
      formUnEl.appendChild(resultsEl);
      problemNumber = 0;
      exerciseNumber++;
      if (exerciseNumber >= unit.exercises.length){
        resultsEl.innerHTML = "";
        resultsEl.appendChild(document.createTextNode("Congratulations! You have completed" +
           " all the exercises of this unit. Click 'Finish' button to move to unit selection."));
        formUnEl.appendChild(resultsEl);
        document.getElementById("nextExercise").style.display = "none";
        document.getElementById("goSelectUnit").style.display = "block";
        exerciseNumber = 0;
      }
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