<!-- ****************************************
     *** General test framework code ********
     **************************************** -->

var test = {okay:true};
function showFailureMessage(txt) {
  document.body.appendChild( dom.createElement("p",
	 {classValues:"failure", content:"Failure: "+ txt}));
}
function showSuccessMessage() {
  document.body.appendChild( dom.createElement("p",
	 {classValues:"okay", content:"All tests successfully passed!"}));
}
function showInfo(txt) {
  document.body.appendChild( dom.createElement("p",
	 {classValues:"info", content:"Info: "+ txt}));
}
function test( message, condition) {
  if (!condition) {
    okay = false;
    showFailureMessage( message);
  }
}
