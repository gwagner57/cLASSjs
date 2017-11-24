/**
 * @fileOverview  Contains various view functions for the use case deleteBook
 * @author Mircea Diaconescu
 * @author Gerd Wagner
 */
pl.v.deleteBook = {
  setupUserInterface: function () {
    var formEl = document.forms['Book'],
        deleteButton = formEl.commit,
        selectBookEl = formEl.selectBook;
    // set up the book selection list
    dom.fillSelectWithOptionsFromEntityMap( selectBookEl,
        Book.instances, {displayProp:"title"});
    // on click button invoke destroy
    deleteButton.addEventListener("click", function () {
        var isbn = selectBookEl.value;
        if (isbn) {
          pl.c.storageManager.destroy( Book, isbn, function () {
            formEl.reset;
          });
          // remove deleted book from select options
          selectBookEl.remove( selectBookEl.selectedIndex);
        }
    });
  }
};