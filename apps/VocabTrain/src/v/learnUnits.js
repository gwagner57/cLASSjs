vt.v.learnUnits.renderUnit = { // Choose the Learning Unit
  setupUserInterface: function () {
    var formUnEl = document.querySelector("section#Unit-Render > form"),
        unitSelectEl = formUnEl.elements["selectUnit"],
        exSelectEl = formUnEl.elements["selectExercise"];
    unitSelectEl.addEventListener("change",
          vt.v.learnUnits.renderUnit.handleUnitSelectChangeEvent);
    exSelectEl.addEventListener("change", vt.v.learnUnits.renderUnit.handleExerciseSelectChangeEvent);
    dom.fillSelectWithOptionsFromEntityMap( unitSelectEl, vt.LearningUnit.instances,
        {displayProp:"title"});
    document.getElementById("Main").style.display = "none";
    document.getElementById("Unit-Render").style.display = "block";
    document.getElementById("Questions").style.display = "none";
    document.getElementById("Exercise").style.display = "none";
  },

  handleUnitSelectChangeEvent: function () {  //unit changed
    var formUnEl = document.querySelector("section#Unit-Render > form"),
        unitSelectEl = formUnEl.elements["selectUnit"],
        exSelectEl = formUnEl.elements["selectExercise"],
        exerciseEl = document.getElementById("exercise1"),
        problemsEl = document.getElementById("problem1"),
        keyUn = formUnEl.selectUnit.value, keyEx, unit = null,
        exercise = null, divEl = null, ku;
      if (keyUn && keyUn !== ku) {
      problemsEl.innerHTML = "";
      dom.fillSelectWithOptionsFromEntityMap(exSelectEl, vt.LearningUnit.instances, "title");
      unit = vt.LearningUnit.instances[keyUn];
      formUnEl.id.value = unit.id;
      formUnEl.title.value = unit.title;
      formUnEl.description.value = unit.description;
    } else {
      formUnEl.reset();
      unitSelectEl.selectedIndex = 0;
      problemsEl.innerHTML = "";
      document.querySelector("section#Unit-Render > form button[type='submit']").style.display = "none";
      }
  },

  handleExerciseSelectChangeEvent: function () {
    var formUnEl = document.querySelector("section#Unit-Render > form"),
        unitSelectEl = formUnEl.elements["selectUnit"],
        exSelectEl = formUnEl.elements["selectExercise"],
        exerciseEl = document.getElementById("exercise1"),
        problemsEl = document.getElementById("problem1"),
        keyUn = formUnEl.selectUnit.value,
        keyEx = formUnEl.selectExercise.value, ke,
        unit = null, exercise = null, divEl = null; // exercise
    if (keyEx && keyEx !== ke) {
      ke = keyEx;
      exercise = vt.data.learnUnits[keyUn-1].exercises[0]; // select needed exercise with 0 --> keyEx
      problemsEl.innerHTML = "";
      problemsEl.appendChild( dom.createElement( "p", {content: "<b>This exercise consists " + exercise.problems.length + " problems."}));// why doesnt work
      for (var i = 0; i < exercise.problems.length; ++i){
        var problem = exercise.problems[i];
        var probEl = dom.createElement("div", {id: problem.id, classValues: "problem"});
        probEl.appendChild( dom.createElement( "p", {content: "<b>Problem #"+ (i+1) +"</b>: " + "'" + problem.source + "'" }));
             //if (problem) {
              //    problem.meanings.forEach( function (mv, seqNo) {
              //       probEl.appendChild( dom.createElement( "p", {content: "<b>Explanation# </b>: " + mv}));
                //    });
                //  }
        probEl.appendChild( document.createTextNode("Translation: "));
        probEl.appendChild( dom.createLabeledInputField(""));
        problemsEl.appendChild(probEl);
        problemsEl.appendChild( document.createTextNode("_______________________________________________________________"))
      }
      exerciseEl.appendChild(problemsEl);
      document.querySelector("section#Unit-Render > form button[type='submit']").style.display = "inline";
      } else {
      problemsEl.innerHTML = "";
      document.querySelector("section#Unit-Render > form button[type='submit']").style.display = "none";
    }
  },

  handleSubmitButtonClickEvent: function () {// create constraint violation in case the answer wrong. archive data if everything is good. counting completed exercises.
    var formUnEl = document.querySelector("section#Unit-Render > form"),
        unitSelectEl = formUnEl.elements["selectUnit"],
        exSelectEl = formUnEl.elements["selectExercise"],
        exerciseEl = document.getElementById("exercise1"),
        problemsEl = document.getElementById("problem1"),
        keyUn = formUnEl.selectUnit.value,// slots = {},
        keyEx = formUnEl.selectExercise.value, ke,
        unit = null, exercise = null, divEl = null;
    formUnEl.appendChild(dom.createElement("p", "fllflflflfl"));
  },

  backToMain: function () {
    document.getElementById("Main").style.display = "block";
    document.getElementById("Unit-Render").style.display = "none";
    document.getElementById("Exercise").style.display = "none";
    document.getElementById("Questions").style.display = "none";
  }
};

vt.v.learnUnits.list = { // the prorotype function
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