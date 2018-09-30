vt.v.vocExercises.manage = {
  setupUserInterface : function () {
    document.getElementById("Exercise-R").style.display = "none";
    document.getElementById("Exercise-List").style.display = "none";
    document.getElementById("Exercise-M").style.display = "block";
    //vt.v.learnUnits.manage.refreshUI();
  },
  exit: function () {
  },
  refreshUI: function () {
    document.getElementById("Unit-M").style.display = "block";
    document.getElementById("Unit-Render").style.display = "none";
  }
};
