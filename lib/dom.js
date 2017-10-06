 /**
 * @fileOverview  A library of DOM element creation methods and 
 * other DOM manipulation methods.
 * 
 * @author Gerd Wagner
 */
 if (!window.localStorage || !("classList" in document.createElement("a"))) {
   alert("The browser you are using is out-dated! Update your browser or install a recent version of Firefox.");
   throw "Cannot run on this browser";
 }

var dom = {
  /**
   * Create an element
   *
   * @param {string} elemType
   * @param {object} slots
   * @return {object}
   */
  createElement: function (elemType, slots) {
    var el = document.createElement( elemType);
    if (slots) {
      if (slots.id) el.id = slots.id;
      if (slots.classValues) el.className = slots.classValues;
      if (slots.content) el.innerHTML = slots.content;
    }
    return el;
  },
   /**
    * Create a time element from a Date object
    *
    * @param {object} d
    * @return {object}
    */
   createTime: function (d) {
     var tEl = document.createElement("time");
     tEl.textContent = d.toLocaleDateString();
     tEl.setAttribute("datetime", d.toISOString());
     return tEl;
   },
   /**
    * Create an img element
    * 
    * @param {string} id
    * @param {string} classValues
    * @param {object} content
    * @return {object}
    */
    createImg: function (slots) {
      var el = document.createElement("img");
      el.src = slots.src;
      if (slots.id) el.id = slots.id;
      if (slots.classValues) el.className = slots.classValues;
      return el;
    },
  /**
   * Create a single-line string input element
   * 
   * @param {string} id
   * @param {string} classValues
   * @param {string} name
   * @return {object}
   */
   createStringInput: function (slots) {
     var el = document.createElement("input");
     if (slots.id) el.id = slots.id;
     if (slots.classValues) el.className = slots.classValues;
     if (slots.name) el.name = slots.name;
     return el;
   },
  /**
   * Create a numeric input element
   * 
   * @param {string} id
   * @param {string} classValues
   * @param {string} name
   * @return {object}
   */
   createNumInput: function (slots) {
     var el = dom.createStringInput( slots);
     el.type = "number";
     return el;
   },
  /**
   * Create an option element
   * 
   * @param {object} content
   * @return {object}
   */
  createOption: function (slots) {
    var el = document.createElement("option");
    if (slots.text) el.textContent = slots.text;
    if (slots.value) el.value = slots.value;
    return el;
  },
  /**
   * Create a button element
   * 
   * @param {string} id
   * @param {string} classValues
   * @param {object} content
   * @return {object}
   */
  createButton: function (slots) {
    var el = document.createElement("button");
    el.type = "button";
    if (slots.id) el.id = slots.id;
    if (slots.name) el.name = slots.name;
    if (slots.classValues) el.className = slots.classValues;
    if (slots.handler) el.addEventListener( 'click', slots.handler);
    if (slots.content) el.innerHTML = slots.content;
    else el.textContent = slots.label || slots.name;
    return el;
  },
  /**
   * Create a menu item (button) element
   * 
   * @param {string} id
   * @param {string} classValues
   * @param {object} content
   * @return {object}
   */
  createMenuItem: function (slots) {
    var liEl = document.createElement("li"),
        buttonEl = document.createElement("button");
    buttonEl.type = "button";
    if (slots.id) liEl.id = slots.id;
    if (slots.classValues) liEl.className = slots.classValues;
    if (slots.content) buttonEl.innerHTML = slots.content;
    liEl.appendChild( buttonEl);
    return liEl;
  },
  /**
   * Create a labeled output field
   * 
   * @param {{labelText: string, name: string?, value: string?}}
   *        slots  The view definition slots.
   * @return {object}
   */
   createLabeledOutputField: function (slots) {
     var outpEl = document.createElement("output"),
         lblEl = document.createElement("label");
     if (slots.name) outpEl.name = slots.name;
     if (slots.value !== undefined) outpEl.value = slots.value;
     lblEl.textContent = slots.labelText;
     lblEl.appendChild( outpEl);
     return lblEl;
   },
   /**
    * Create a labeled input field
    *
    * @param {{labelText: string, name: string?, type: string?,
   *          value: string?, disabled: string?}}
    *        slots  The view definition slots.
    * @return {object}
    */
   createLabeledInputField: function (slots) {
     var inpEl = document.createElement("input"),
         lblEl = document.createElement("label");
     if (slots.name) inpEl.name = slots.name;
     if (slots.type) inpEl.type = slots.type;
     if (slots.value !== undefined) inpEl.value = slots.value;
     if (slots.disabled) inpEl.disabled = "disabled";
     lblEl.textContent = slots.labelText;
     lblEl.appendChild( inpEl);
     return lblEl;
   },
   /**
    * Create a radio button or checkbox element
    * 
    * @param {{labelText: string, name: string?, type: string?, 
    *          value: string?, disabled: string?}}   
    *        slots  The view definition slots.
    * @return {object}
    */
    createLabeledChoiceControl: function (t,n,v,lbl) {
      var ccEl = document.createElement("input"),
          lblEl = document.createElement("label");
      ccEl.type = t;
      ccEl.name = n;
      ccEl.value = v;
      lblEl.appendChild( ccEl);
      lblEl.appendChild( document.createTextNode( lbl));
      return lblEl;
    },
   /**
    * Create a labeled select element
    * 
    * @param {{labelText: string, name: string?, index: integer?}}   
    *     slots  The view definition slots.
    * @return {object}
    */
    createLabeledSelectField: function (slots) {
      var selEl = document.createElement("select"),
          lblEl = document.createElement("label"),
          containerEl = document.createElement("div");
      if (slots.name) selEl.name = slots.name;
      if (slots.index !== undefined) selEl.index = slots.index;
      lblEl.textContent = slots.labelText;
      if (slots.classValues) containerEl.className = slots.classValues;
      lblEl.appendChild( selEl);
      containerEl.appendChild( lblEl);
      return containerEl;
    },
    /**
     * Create option elements from a map of option values (as keys) 
     * to option strings and insert them into a selection list element
     *
     * @param {object} selEl  A select(ion list) element
     * @param {object} optTxts  An array of option text items
     */
    fillSelectWithOptions: function (selEl, optTxts) {
      selEl.innerHTML = "";
      selEl.add( dom.createOption({text:" --- ", value:""}), null);
      optTxts.forEach( function (txt,i) {
        selEl.add( dom.createOption({text: txt, value: i}), null);      
      });
    },
    /**
     * Create option elements from a map of objects
     * and insert them into a selection list element
     *
     * @param {object} selEl  A select(ion list) element
     * @param {object} m  A map of objects
     * @param {string} keyProp  The standard identifier property
     * @param {string} displayProp [optional]  A property supplying the text 
     *                 to be displayed for each object
     */
    fillSelectWithOptionsFromObjectMap: function (selEl, m, keyProp, displayAttribs) {
      var optionEl=null, keys=[], obj=null, i=0;
      selEl.innerHTML = "";
      selEl.appendChild( dom.createOption({text:" --- ", value:""}));
      keys = Object.keys( m);
      for (i=0; i < keys.length; i++) {
        obj = m[keys[i]];
        //obj.index = i+1;  // store selection list index
        optionEl = document.createElement("option");
        optionEl.value = obj[keyProp];
        optionEl.text = obj[keyProp];
        if (displayAttribs) {
          displayAttribs.forEach( function (attr) {
            optionEl.text = optionEl.text +" / "+ obj[attr];            
          });
        }
        selEl.add( optionEl, null);
      }
    },
   /**
    * Create back button
    *
    * @param {{label: string}}
    *     slots  The view definition slots.
    * @return {object}  container element object with button child element
    */
   createBackButton: function (slots) {
     var backButtonEl = document.createElement("button"),
         containerEl = document.createElement("div");
     backButtonEl.type = "button";
     backButtonEl.name = "backButton";
     if (slots && slots.label) backButtonEl.textContent = slots.label;
     else backButtonEl.textContent = "Back to menu";
     if (slots) {
       if (slots.classValues) containerEl.className = slots.classValues;
       if (slots.handler) backButtonEl.addEventListener( 'click', slots.handler);
     }
     containerEl.appendChild( backButtonEl);
     return containerEl;
   },
    /**
     * Create submit button and back/cancel button
     * 
     * @param {{label: string, classValues: string?}}   
     *     slots  The view definition slots.
     * @return {object}  container element object with button child elements
     */
     createCommitAndBackButtons: function (slots) {
       var submitButtonEl = document.createElement("button"),
           backButtonEl = document.createElement("button"),
           containerEl = document.createElement("div");
       if (slots && slots.label) submitButtonEl.textContent = slots.label;
       else submitButtonEl.textContent = "Submit";
       submitButtonEl.type = "submit";
       submitButtonEl.name = "submitButton";
       backButtonEl.textContent = "Back to menu";
       backButtonEl.type = "button";
       backButtonEl.name = "backButton";
       if (slots && slots.classValues) containerEl.className = slots.classValues;
       containerEl.appendChild( submitButtonEl);
       containerEl.appendChild( backButtonEl);
       return containerEl;
     },
    /**
     * Create table element with thead and tbody
     * 
     * @param {string} classValues
     * @return {object}  tbody element object
     */
    createTable: function (slots) {
       var tableEl = document.createElement("table"),
           el=null;
       if (slots && slots.classValues) tableEl.className = slots.classValues;
       el = document.createElement("thead");
       tableEl.appendChild( el);
       el = document.createElement("tbody");
       tableEl.appendChild( el);
       return tableEl;
     }
};
 /**
  * Insert a new node/element after another one
  *
  * @return {object}  tbody element object
  */
dom.insertAfter = function (newNode, referenceNode) {
   referenceNode.parentNode.insertBefore( newNode, referenceNode.nextSibling);
};
 /**
  * Create an expandable UI panel
  *
  * @param {object} slots
  * @return {object} uiPanelEl  element object
  */
 dom.createExpandablePanel = function (slots) {
   var uiPanelEl = dom.createElement("div", slots);
   var mainContentEl = dom.createElement("div", {classValues:"mainContent"});
   var expandButtonEl = dom.createElement("button", {content:"+"});
   uiPanelEl.classList.add("expandablePanel");
   uiPanelEl.appendChild( dom.createElement("h2", {
     content:"<span>"+ slots.heading +"</span>"
   }));
   uiPanelEl.appendChild( mainContentEl);
   uiPanelEl.firstChild.insertBefore( expandButtonEl, uiPanelEl.firstChild.firstChild);
   expandButtonEl.addEventListener("click", function (e) {
     // toggle display of main content
     if (mainContentEl.style.display !== "none") {
       mainContentEl.style.display = "none";
       e.target.textContent = "+";
     }
     else {
       mainContentEl.style.display = "block";
       e.target.textContent = "−";
     }
     e.preventDefault();
   });
   uiPanelEl.style.overflowX = "auto";  // horizontal scrolling
   mainContentEl.style.display = "none";
   return uiPanelEl;
 };
