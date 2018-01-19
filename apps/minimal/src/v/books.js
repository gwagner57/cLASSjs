/**
 * @fileOverview  Contains various view functions for managing books
 * @author Gerd Wagner
 */
pl.v.books.manage = {
  /**
   * Set up the book data management UI
   */
  setupUserInterface: function () {
    // take care of storing unsaved data on page unload
    window.addEventListener("beforeunload", function () {
      pl.c.storageManager.saveOnUnload();
    });
    pl.v.books.manage.refreshUI();
  },
  /**
   * show a specific CRUD UI and hide all others
   */
  refreshUI: function (uiIdToShow) {
    uiIdToShow = uiIdToShow || "M";
    ["M","C","R","U","D"].forEach( function (uiId) {
      document.getElementById("Book-"+ uiId).style.display = "none";
    })
    document.getElementById("Book-"+ uiIdToShow).style.display = "block";
  }
};
/**********************************************
 * Use case Retrieve/List All
**********************************************/
pl.v.books.retrieveAndListAll = {
  setupUserInterface: function () {
    pl.c.storageManager.retrieveAll( Book).then( function (records) {
        var tableBodyEl = document.querySelector(
            "section#Book-R > table > tbody");
        var i=0, row=null, book=null;
        tableBodyEl.innerHTML = "";  // drop old contents
        for (i=0; i < records.length; i++) {
          try {
            book = new Book( records[i]);
          } catch (e) {
            console.log( e.constructor.name + " while deserializing a "+
                Book.Name +" record: " + e.message);
            book = null;
          }
          if (book) {
            row = tableBodyEl.insertRow(-1);
            row.insertCell(-1).textContent = book.id;
            row.insertCell(-1).textContent = book.title;
            row.insertCell(-1).textContent = book.getValAsString("year");
            if (book.edition) row.insertCell(-1).textContent = book.getValAsString("edition");
          }
        }
        pl.v.books.manage.refreshUI("R");
      }
    );
  }
};
/**********************************************
 * Use case Create
**********************************************/
pl.v.books.create = {
  setupUserInterface: function () {
    var formEl = document.querySelector("section#Book-C > form"),
        saveButton = formEl.commit;
    // define event handler for submitButton click events
    saveButton.addEventListener("click", 
	    this.handleSaveButtonClickEvent);
    // define event handler for neutralizing the submit event
    formEl.addEventListener( 'submit', function (e) { 
      e.preventDefault();
      formEl.reset();
    });
    pl.v.books.manage.refreshUI("C");
    formEl.reset();
  },
  handleSaveButtonClickEvent: function () {
    var formEl = document.querySelector("section#Book-C > form"), slots = {};
    Object.keys( Book.properties).forEach( function (prop) {
      slots[prop] = formEl[prop].value;
    });
    pl.c.storageManager.add( Book, slots);
  }
};
/**********************************************
 * Use case Update
**********************************************/
pl.v.books.update = {
  setupUserInterface: function () {
    var formEl = document.querySelector("section#Book-U > form"),
        selectObjEl = formEl.selectObj,
        saveButton = formEl.commit;
    // set up the book selection list
    pl.c.storageManager.retrieveAll( Book).then( function (records) {
      dom.fillSelectWithOptionsFromEntityMap( selectObjEl,
          records, {displayProp:"title"});
      pl.v.books.manage.refreshUI("U");
      formEl.reset();
    });
    // when a book is selected, populate the form with its data
    selectObjEl.addEventListener("change", function () {
      var book=null, key = selectObjEl.value;
      if (key) {
        pl.c.storageManager.retrieve( Book, key).then( function (book) {
          Object.keys( Book.properties).forEach( function (prop) {
            formEl[prop].value = (book[prop] !== undefined) ? book[prop] : "";
          });
          saveButton.disabled = false;
        });
      } else {
        formEl.reset();
        saveButton.disabled = true;
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
    var slots={}, formEl = document.querySelector("section#Book-U > form");
    Object.keys( Book.properties).forEach( function (prop) {
      var propDecl = Book.properties[prop];
      if (prop === "id") return;
      slots[prop] = formEl[prop].value;
    });
    pl.c.storageManager.update( Book, formEl.id.value, slots);
  }
};
/**********************************************
 * Use case Delete
**********************************************/
pl.v.books.destroy = {
  setupUserInterface: function () {
    var formEl = document.querySelector("section#Book-D > form"),
        deleteButton = formEl.commit,
        selectObjEl = formEl.selectObj;
    // set up the book selection list
    pl.c.storageManager.retrieveAll( Book).then( function (records) {
      dom.fillSelectWithOptionsFromEntityMap( selectObjEl,
          records, {displayProp:"title"});
      pl.v.books.manage.refreshUI("D");
      formEl.reset();
    });
    // on delete button click invoke destroy
    deleteButton.addEventListener("click", function () {
      var isbn = selectObjEl.value,
          selectIndex = selectObjEl.selectedIndex;
      if (isbn) {
        pl.c.storageManager.destroy( Book, isbn).then( function () {
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