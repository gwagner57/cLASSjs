/**
 * @fileOverview  Contains various view functions for managing books
 * @author Gerd Wagner
 */
vt.v.dictEntries.manage = {
  /**
   * Set up the book data management UI
   */
  setupUserInterface: function () {
    vt.v.dictEntries.manage.refreshUI();
  },
  /**
   * show a specific UI and hide all others
   */
  refreshUI: function () {
  //  document.getElementById("Render").style.display = "none";
    //document.getElementById("Manage").style.display = "block";
  }
};
/**********************************************
 * Use case Retrieve/List All
**********************************************/
vt.v.dictEntries.retrieveAndListAll = {
  setupUserInterface: function () {
    vt.c.storeMan.retrieveAll( vt.DictionaryEntry).then( function (records) {
      var tableBodyEl = document.querySelector(
          "section#DictionaryEntry-R > table > tbody");
      var i=0, row=null, book=null;
      tableBodyEl.innerHTML = "";  // drop old contents
      for (i=0; i < records.length; i++) {
        try {
          book = new vt.DictionaryEntry( records[i]);
        } catch (e) {
          console.log( e.constructor.name + " while deserializing a "+
              vt.DictionaryEntry.Name +" record: " + e.message);
          book = null;
        }
        if (book) {
          row = tableBodyEl.insertRow(-1);
          Object.keys( vt.DictionaryEntry.properties).forEach( function (prop) {
            row.insertCell(-1).textContent = book.getValueAsString( prop);
          });
        }
      }
      vt.v.dictEntries.manage.refreshUI("R");
      }
    );
  }
};
/**********************************************
 * Use case Create
**********************************************/
vt.v.dictEntries.create = {
  setupUserInterface: function () {
    var formEl = document.querySelector("section#DictionaryEntry-C > form"),
        saveButton = formEl.commit;
    // add event listeners for validation on input
    Object.keys( vt.DictionaryEntry.properties).forEach( function (prop) {
      var propDecl = vt.DictionaryEntry.properties[prop];
      formEl[prop].addEventListener("input", function () {
        var errMsg = cLASS.check( prop, propDecl, formEl[prop].value).message;
        formEl[prop].setCustomValidity( errMsg);
      });
    });
    // define event handler for submitButton click events    
    saveButton.addEventListener("click", 
	    this.handleSaveButtonClickEvent);
    // define event handler for neutralizing the submit event
    formEl.addEventListener( 'submit', function (e) {
      e.preventDefault();
      formEl.reset();
    });
    vt.v.dictEntries.manage.refreshUI("C");
    formEl.reset();
  },
  handleSaveButtonClickEvent: function () {
    var formEl = document.querySelector("section#DictionaryEntry-C > form"), slots = {};
    // create error messages in case of constraint violations
    Object.keys( vt.DictionaryEntry.properties).forEach( function (prop) {
      var propDecl = vt.DictionaryEntry.properties[prop],
          val = formEl[prop].value,
          errMsg="";
      if (val || !propDecl.optional) {
        slots[prop] = val;
        errMsg = cLASS.check( prop, propDecl, val).message;
        formEl[prop].setCustomValidity( errMsg);
      }
    });
    // save the input data only if all of the form fields are valid
    if (formEl.checkValidity()) {
      vt.c.storeMan.add( vt.DictionaryEntry, slots);
    }
  }
};
/**********************************************
 * Use case Update
**********************************************/
vt.v.dictEntries.update = {
  setupUserInterface: function () {
    var formEl = document.querySelector("section#DictionaryEntry-U > form"),
        selectObjEl = formEl.selectObj,
        saveButton = formEl.commit;
    // set up the book selection list
    vt.c.storeMan.retrieveAll( vt.DictionaryEntry).then( function (records) {
      dom.fillSelectWithOptionsFromEntityMap( selectObjEl,
          records, {displayProp:"title"});
      vt.v.dictEntries.manage.refreshUI("U");
      formEl.reset();
    });
    // when a book is selected, populate the form with its data
    selectObjEl.addEventListener("change", function () {
      var book=null, key = selectObjEl.value;
      if (key) {
        vt.c.storeMan.retrieve( vt.DictionaryEntry, key).then( function (book) {
          Object.keys( vt.DictionaryEntry.properties).forEach( function (prop) {
            formEl[prop].value = (book[prop] !== undefined) ? book[prop] : "";
            // delete custom validation error message which may have been set before
            if (prop !== "id") formEl[prop].setCustomValidity("");
          });
          saveButton.disabled = false;
        });
      } else {
        formEl.reset();
        saveButton.disabled = true;
      }
    });
    // add event listeners for validation on input
    Object.keys( vt.DictionaryEntry.properties).forEach( function (prop) {
      var propDecl = vt.DictionaryEntry.properties[prop];
      if (prop !== "id") {
        formEl[prop].addEventListener("input", function () {
          var errMsg = cLASS.check( prop, propDecl, formEl[prop].value).message;
          formEl[prop].setCustomValidity( errMsg);
        });
      }
    });
    // define event handler for save button click events
    saveButton.addEventListener("click", this.handleSaveButtonClickEvent);
    // neutralize the submit event and reset the form
    formEl.addEventListener( 'submit', function (e) {
      e.preventDefault();
      formEl.reset();
    });
  },
  /**
   * handle form submission events
   */
  handleSaveButtonClickEvent: function () {
    var slots={}, formEl = document.querySelector("section#DictionaryEntry-U > form");
    // create error messages in case of constraint violations
    Object.keys( vt.DictionaryEntry.properties).forEach( function (prop) {
      var propDecl = vt.DictionaryEntry.properties[prop], errMsg="";
      if (prop === "id") return;
      slots[prop] = formEl[prop].value;
      errMsg = cLASS.check( prop, propDecl, slots[prop]).message;
      formEl[prop].setCustomValidity( errMsg);
    });
    if (formEl.checkValidity()) {
      vt.c.storeMan.update( vt.DictionaryEntry, formEl.id.value, slots);
      //selectObjEl.options[selectObjEl.selectedIndex].text = slots.title;
    }
  }
};
/**********************************************
 * Use case Delete
**********************************************/
vt.v.dictEntries.destroy = {
  setupUserInterface: function () {
    var formEl = document.querySelector("section#DictionaryEntry-D > form"),
        deleteButton = formEl.commit,
        selectObjEl = formEl.selectObj;
    // set up the book selection list
    vt.c.storeMan.retrieveAll( vt.DictionaryEntry).then( function (records) {
      dom.fillSelectWithOptionsFromEntityMap( selectObjEl,
          records, {displayProp:"title"});
      vt.v.dictEntries.manage.refreshUI("D");
      formEl.reset();
    });
    // on delete button click invoke destroy
    deleteButton.addEventListener("click", function () {
      var isbn = selectObjEl.value,
          selectIndex = selectObjEl.selectedIndex;
      if (isbn) {
        vt.c.storeMan.destroy( vt.DictionaryEntry, isbn).then( function () {
          // remove deleted book from select options
          selectObjEl.remove( selectIndex);
          formEl.reset();
        });
      }
    });
    // neutralize the submit event
    formEl.addEventListener( 'submit', function (e) {
      e.preventDefault();
      formEl.reset();
    });
  }
};