vt.v.learnUnits.renderUnit = { // Choose the Learning Unit
  setupUserInterface: function () {
      var formEl = document.querySelector("section#Unit-Render > form"),
        unitSelectEl = formEl.elements["selectUnit"];
        unitSelectEl.addEventListener("change",
          vt.v.learnUnits.renderUnit.handleUnitSelectChangeEvent);
    dom.fillSelectWithOptionsFromEntityMap( unitSelectEl, vt.LearningUnit.instances, //vt.LearningUnit.instances[3].exercises[0].renderingForm,
        {displayProp:"title"});
    document.getElementById("Main").style.display = "none";
    document.getElementById("Unit-Render").style.display = "block";
    document.getElementById("Questions").style.display = "none";
    document.getElementById("Exercise").style.display = "none";
  },

  unitSelectClickEvent: function () { // Unit selected case
    document.getElementById("Main").style.display = "none";
    document.getElementById("Unit-Render").style.display = "none";
    document.getElementById("Questions").style.display = "none";
    document.getElementById("Exercise").style.display = "block";
    var formEl = document.querySelector("section#Exercise > form"),
        exerciseSelectEl = formEl.elements["selectExercise"],
        keyEx = formEl.selectExercise.value,
        exercise = null;
    dom.fillSelectWithOptionsFromEntityMap( exerciseSelectEl, vt.LearningUnit.instances[keyUn].exercises.instances,
        {displayProp: "renderingForm"});
    if (keyEx !== '') {
      exercise = vt.VocabularyExercise.instances[keyEx];
      formEl.renderingForm.value = exercise.renderingForm;
      formEl.NumOfProblems = exercise.getNmrOfProblems();
    } else {
      formEl.reset();
    }
  },

  exerciseSelectClickEvent: function () {// Exercise selected case
    var formEl = document.querySelector("section#Questions > form"),
        exerciseSelectEl = formEl.elements["selectQuestion"],
        question = null;
    formEl.name.value = " Enter text.";
    formEl.description.value = "Enter a correct translation of a word or phrase.";
    //dom.fillSelectWithOptionsFromEntityMap(exerciseSelectEl, ,
    // FILL  //  {displayProp: "renderingForm"});
    //dom.createLabeledInputField(); //IF RenderingModelEl = single make single choise item else multiple
    document.getElementById("Main").style.display = "none";
    document.getElementById("Unit-Render").style.display = "none";
    document.getElementById("Exercise").style.display = "none";
    document.getElementById("Questions").style.display = "block";
  },

  handleUnitSelectChangeEvent: function () {  //unit changed
    var formEl = document.querySelector("section#Unit-Render > form"),
        keyUn = formEl.selectUnit.value,
        unit = null;
    if (keyUn !== '') {
      unit = vt.LearningUnit.instances[keyUn];
      formEl.id.value = unit.id;
      formEl.title.value = unit.title;
      formEl.description.value = unit.description;
    } else {
      formEl.reset();
    }
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

  handleExerciseSelectChangeEvent: function () {
    var formEl = document.querySelector("section#Exercise-List > form"),
        key = formEl.selectExercise.value,
        unit = null;
    if (key !== '') {
      unit = vt.VocabularyExercise.instances[key];
      formEl.renderingForm.value = unit.renderingForm.value;
      formEl.problems.value = unit.problems.value;
    } else {
      formEl.reset();
    }
  }
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
    //vt.v.learnUnits.manage.refreshUI();
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