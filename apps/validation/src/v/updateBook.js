/**
 * @fileOverview  View methods for the use case "update book"
 * @author Mircea Diaconescu
 * @author Gerd Wagner
 */
pl.v.updateBook = {
  /**
   * initialize the updateBook form
   */
  setupUserInterface: function () {
    var formEl = document.forms['Book'],
        submitButton = formEl.commit,
        selectBookEl = formEl.selectBook;
    // set up the book selection list
    dom.fillSelectWithOptionsFromEntityMap( selectBookEl,
        Book.instances, {displayProp:"title"});
    // when a book is selected, populate the form with its data
    selectBookEl.addEventListener("change", function () {
      var book=null, bookKey = selectBookEl.value;
      if (bookKey) {
        formEl.reset();
        book = Book.instances[bookKey];
        ["id","title","year","edition"].forEach( function (prop) {
          formEl[prop].value = (book[prop] !== undefined) ? book[prop] : "";
          // delete custom validation error message which may have been set before
          formEl[prop].setCustomValidity("");
        });
      } else {
        formEl.reset();
      }
    });
    // add event listeners for validation on input
    ["title","year","edition"].forEach( function (prop) {
      var propDecl = Book.properties[prop];
      formEl[prop].addEventListener("input", function () {
        var errMsg = cLASS.check( prop, propDecl, formEl[prop].value).message;
        //var errMsg = Book.check( prop, formEl[prop].value).message;
        formEl[prop].setCustomValidity( errMsg);
      });
    });
    submitButton.addEventListener("click",
        pl.v.updateBook.handleSubmitButtonClickEvent);
    // neutralize the submit event
    formEl.addEventListener( 'submit', function (e) { 
        e.preventDefault();
        formEl.reset();
    });
  },
  /**
   * check data and invoke update
   */
  handleSubmitButtonClickEvent: function () {
    var slots={}, formEl = document.forms['Book'];
    // create error messages in case of constraint violations
    ["title","year","edition"].forEach( function (prop) {
        var propDecl = Book.properties[prop],
            errMsg="";
        slots[prop] = formEl[prop].value;
        errMsg = cLASS.check( prop, propDecl, slots[prop]).message;
        formEl[prop].setCustomValidity( errMsg);
    });
    if (formEl.checkValidity()) {
      pl.c.storageManager.update( Book, formEl.id.value, slots);
    }
  }
};