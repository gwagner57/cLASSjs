/**
 * @fileOverview  This file contains the definition of the class ObjectView.
 * @author Gerd Wagner
 * @copyright Copyright 2015 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
/**
 * Class for creating UI/view models based on "model objects". A UI/view model
 * consists of fields (typically based on model properties) and user action
 * types, defined as named JS methods (with a self-explaining name) that can
 * be used as event handlers for UI events.
 *
 * A view model may have a field order definition and field group definitions
 * in the constructor parameter "fields", which is processed into a "fields" map
 * of field definition records and a field order definition list "fieldOrder".
 * The constructor parameter "fields" may contain additional fields not based
 * on model object properties. When a view model is created without a "fields"
 * argument, the view fields are generated from the labeled properties of the
 * underlying model object.
 *
 * Each model object o (such as "sim") may have a pre-defined view (like
 * "simView"), which is stored as the map entry oes.ui[o.objName+"View"].
 *
 * A view (or 'view model') is a logical representation of the interaction
 * elements of a UI, which typically correspond to properties and methods
 * of a model object. A view consists of (input/output) fields and of user
 * action types, such as "run", "saveSimulationState", etc.
 *
 * A view field has an I/O mode of either "I/O" (input/output) or "O".
 * When a view is rendered, view fields are rendered as UI elements in the
 * following way:
 *
 * 1) ordinary fields as form fields (HTML input/output elements),
 * 2) Boolean fields as HTML checkbox-typed input elements,
 * 3) enumeration and reference fields as choice widgets (radio button groups or
 *    checkbox groups, HTML select elements or other selection list widgets)
 *
 * or as any HTML element that allows for text content, or as special UI widgets
 * (such as calendar date selection widgets or color pickers). User action
 * types are exposed in the form of HTML buttons or other actionable (e.g.
 * clickable) HTML elements.
 *
 * The DOM structure of a UI, and the values of its view-field-based elements,
 * are rendered by the view.render method at simulation startup time, while its
 * field values are subsequently synchronized with the help of a 2-way databinding
 * mechanism:
 * 1) Bottom-up: value changes of model object properties are directly propagated
 *    to corresponding UI fields; also value changes of view fields are propagated
 *    to corresponding UI fields.
 * 2) Top-down: value changes of UI fields are propagated to corresponding model
 *    object properties or view fields.
 *
 * A user action type is a named JS function where the name indicates the
 * intended meaning of the user action (such as "saveSimulationState"). It
 * binds a UI event type, such as clicking on a button, to a view method as
 * its "event handler".

 * TODO: When a view field is bound to a model object property, the value of
 * the corresponding form field is updated whenever the corresponding property
 * value of the model object is updated.
 *
 * View methods may be bound as handlers to an event type in a view.
 *
 * A view can be rendered in different ways:
 * 1) By creating all required DOM elements (form elements with controls), and
 *    appending them to the child elements of the body element, if the document
 *    does not contain suitable form elements.
 * 2) By accessing existing form elements and controls, just setting/updating their
 *    contents (and dynamic parts)
 *
 * Notice that slots.fields is an array of property names or view field declarations
 * while this.fields is a map of view field declarations.
 *
 * @constructor
 * @this {oBJECTvIEW}
 * @param {{modelObject: Object, fields: Array, methods: Map?}}
 *        slots  The view definition slots.
 *
 * Example invocation:
 
  var dataBinding = new oBJECTvIEW({
      modelObject: sim.scenario,
	  // create a horizontal field group
      fields: [["simulationEndTime", "stepDuration", "visualize", "createLog"]],
      userActions: {
        "run": function () {...}
	  }
  })	  
 
 */
/* globals oBJECTvIEW */
var oBJECTvIEW = function (slots) {
  var properties={}; 
  
  if (!(slots.modelObject && (slots.modelObject instanceof Object))) {
    throw "Creating an object view requires a model object!";
  }
  this.modelObject = slots.modelObject;
  this.heading = slots.heading;
  properties = this.modelObject.properties;
  // Process the "slots.fields" array (or the properties map) into a "fields" map
  // of view field declarations and a field order definition array "fieldOrder"
  this.fields = {};
  this.fieldOrder = [];
  if (slots.suppressNoValueFields === undefined) this.suppressNoValueFields = true;
  else this.suppressNoValueFields = slots.suppressNoValueFields;
  if (slots.fields) {
    slots.fields.forEach( function (el) {
      var j=0, fld,
          fldGrp=[],
          fldOrdEl=[];
      // turn single field into singleton field group
      if (!Array.isArray( el)) fldGrp = [el];
      else fldGrp = el;        // field group
      for (j=0; j < fldGrp.length; j++) {
        fld = fldGrp[j];
        if (typeof(fld) === "string") {  // property field
          if (!properties[fld]) {
            throw new ViewConstraintViolation(
                "Property view field "+ fld +"does not correspond to a model property!");
          }
          if (this.suppressNoValueFields && this.modelObject[fld] === undefined) continue;
          // else
          this.fields[fld] = {
            label: properties[fld].label,
            hint: properties[fld].hint,
            range: properties[fld].range,
            inputOutputMode:"I/O"
          };
          fldOrdEl.push( fld);
        } else if (typeof(fld) === "object") {  // defined field
          this.fields[fld.name] = {
            label: fld.label,
            range: fld.range,
            inputOutputMode: fld.inputOutputMode
          };
          fldOrdEl.push( fld.name);
          if (fldGrp.derivationFunction) {
            this.fields[fld.name].derivationFunction = fld.derivationFunction;
          }
          if (fld.optional) this.fields[fld.name].optional = true;
        } else {  // neither property field nor defined field
          throw new ViewConstraintViolation(
              "Neither property field nor defined field: "+ fld);
        }
      }
      if (fldGrp.length === 1) this.fieldOrder.push( fldOrdEl[0]);
      else this.fieldOrder.push( fldOrdEl);
    }, this);
  } else {  // no view fields provided in construction slots
    // create view fields from labeled model properties
    Object.keys( properties).forEach( function (prop) {
      if (properties[prop].label &&
          (!this.suppressNoValueFields ||
           this.modelObject[prop] !== undefined ||
           properties[prop].dependsOn  !== undefined)) {
        this.fieldOrder.push( prop);
        this.fields[prop] = properties[prop];
        this.fields[prop]["inputOutputMode"] = "I/O";
      }
    }, this);
  }
  this.maxNmrOfEnumLitForChoiceButtonRendering =
      slots.maxNmrOfEnumLitForChoiceButtonRendering || 7;
  this.methods = slots.methods || {};
  this.userActions = slots.userActions || {};
  //this.fieldGroupSeparator = slots.fieldGroupSeparator || ", ";
  /**
   * Generic setter for view fields
   * this = view object
   * @method
   * @author Gerd Wagner
   * TODO: what about derived view fields?
   */
  this.methods.set = function (f,v) {
    var el=null, elems=null, i=0,
        mo = this.modelObject,
        properties = mo.properties,
        fldGrpSep = this.fieldGroupSeparator,
        range = properties[f].range,
        uiEl = this.dataBinding[this.viewMode][f];
    if (v === undefined) {
      if (properties[f] && properties[f].maxCard) v = [];
      else v = "";
      this[f] = v;
      return;
    }
    // assign view field
    if (Array.isArray(v)) this[f] = v.clone();
    else this[f] = v;
    // bottom-up data-binding: assign UI/form field
    if (uiEl.tagName === "INPUT" || uiEl.tagName === "OUTPUT") {
      if (!Array.isArray(v)) {
        uiEl.value = cLASS.getValAsString( mo, f, v);
      } else {
        v.forEach( function (el,i) {
          var ds = cLASS.getValAsString( mo, f, el);
          if (i===0) uiEl.value = ds;
          else uiEl.value += fldGrpSep + ds;
        });
      }
    } else if (uiEl.tagName === "FIELDSET" &&
        uiEl.classList.contains("radio-button-group")) {
      elems = uiEl.querySelectorAll("input[type='radio']");
      for (i=0; i < elems.length; i++) {
        el = elems[i];
        if (el.value === String(v)) el.checked = true;
      }
    } else if (uiEl.tagName === "FIELDSET" &&
        uiEl.classList.contains("checkbox-group")) {
      elems = uiEl.querySelectorAll("input[type='checkbox']");
      for (i=0; i < elems.length; i++) {
        el = elems[i];
        if (v.indexOf( parseInt( el.value)) > -1) el.checked = true;
        else el.checked = false;
      }
    } else if (uiEl.tagName === "SELECT" && uiEl.multiple !== "multiple") {
      uiEl.selectedIndex = v;
    } else {
      uiEl.setAttribute("data-value", v);
    }
  };
};
/**
 * Render the HTML form DOM of a model object's view model
 * this = view model object
 * @author Gerd Wagner
 * @method
 * @return {object} dataBinding
 */
oBJECTvIEW.prototype.render = function (parentEl) {
  var mo = this.modelObject,
      fields = this.fields,  // fields map
      fieldOrder = this.fieldOrder,  // field order array
      // a map for storing the bindings of UI elems to view fields
      dataBinding = {},
      userActions = this.userActions,
      validateOnInput = true,
      fldGrpSep = this.fieldGroupSeparator,
      maxELforButton = 7,
      uiContainerEl=null, footerEl=null, i=0;
  /* ==================================================================== */
  /**
   * Create a labeled text field. When validation is not performed on input
   * it is performed on blur in the case of "Create" for catching mandatory
   * value constraint violations, and on change in the case of "Update".
   * @method
   */
  function createLabeledTextField( fld) {
    var fldEl = null, lblEl = document.createElement("label"),
        decl = fields[fld];   // field declaration
    if (decl.inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "text";
      if (validateOnInput) {
        fldEl.addEventListener("input", function () {
          fldEl.setCustomValidity( cLASS.check( fld, decl, fldEl.value).message);
        });
      } else {
        fldEl.addEventListener("blur", function () {
          fldEl.setCustomValidity( cLASS.check( fld, decl, fldEl.value).message);
        });
      }
      fldEl.addEventListener("change", function () {
        var v = fldEl.value;
        if (!validateOnInput) {
          fldEl.setCustomValidity( cLASS.check( fld, decl, v).message);
        }
        // UI element to model property data binding (top-down)
        if (fldEl.validity.valid) mo[fld] = v;
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    // render text input element
    fldEl.name = fld;
    fldEl.value = mo[fld] || "";
    fldEl.size = 7;
    if (fields[fld].hint) lblEl.title = fields[fld].hint;
    lblEl.textContent = fields[fld].label;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a labeled Yes/No field.
   * @method
   */
  function createLabeledYesNoField( fld) {
    var fldEl = null, lblEl = document.createElement("label"),
        decl = fields[fld];   // field declaration
    if (decl.inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "checkbox";
      fldEl.addEventListener("change", function () {
        mo[fld] = fldEl.checked;  // UI element to model property data binding
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    fldEl.name = fld;
    fldEl.checked = mo[fld];
    lblEl.textContent = fields[fld].label;
    if (fields[fld].hint) lblEl.title = fields[fld].hint;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a choice control group in a container element.
   * A choice control is either an HTML radio button or an HTML checkbox.
   * @method
   */
  function createChoiceButtonGroup( fld) {
    var j=0, btnType="", containerEl=null, el=null, choiceItems=[],
        range = fields[fld].range;
    el = document.createElement("legend");
    el.textContent = fields[fld].label;
    containerEl = document.createElement("fieldset");
    containerEl.appendChild( el);
    containerEl.setAttribute("data-bind", fld);
    // store data binding of UI element
    dataBinding[fld] = containerEl;
    // if maxCard is defined, use checkboxes
    if (fields[fld].maxCard) {
      btnType = "checkbox";
      containerEl.className = "checkbox-group";
    } else {
      btnType = "radio";
      containerEl.className = "radio-button-group";
    }
    if (range instanceof eNUMERATION) {
      choiceItems = range.labels;
    } else if (Array.isArray(range)) {  // range is an ad-hoc enumeration
      choiceItems = range;
    } else {  // range is an entity type
      choiceItems = Object.keys( range.instances);
    }
    for (j=0; j < choiceItems.length; j++) {
      // button values = 1..n
      el = dom.createLabeledChoiceControl( btnType, fld, j+1, choiceItems[j]);
      containerEl.appendChild( el);
      el.firstElementChild.addEventListener("click", function (e) {
        // UI element to model property data binding (top-down)
        var btnEl = e.target, i=0,
            val = parseInt( btnEl.value);
        if (btnType === "radio") {
          if (val !== mo[fld]) {
            mo[fld] = val;
          } else if (fields[fld].optional) {
            // turn off radio button
            btnEl.checked = false;
            mo[fld] = undefined;
          }
        } else {  // checkbox
          i = mo[fld].indexOf( val);
          if (i > -1) {  // delete from value list
            mo[fld].splice(i, 1);
          } else {  // add to value list
            mo[fld].push( val);
          }
        }
      });
    }
    return containerEl;
  }
  /**
   * Create a selection list
   * @method
   */
  function createSelectionList( fld) {
    var choiceItems = [],
        selEl = document.createElement("select"),
        lblEl = document.createElement("label"),
        range  = fields[fld].range;
    lblEl.textContent = fields[fld].label;
    lblEl.appendChild( selEl);
    selEl.setAttribute("data-bind", fld);
    // store data binding assignment of UI element to view field
    dataBinding[fld] = selEl;
    // if maxCard is defined, make a multi-selection list
    if (fields[fld].maxCard) selEl.multiple = "multiple";
    if (range instanceof eNUMERATION) {
      choiceItems = range.labels;
    } else if (Array.isArray(range)) {  // range is an ad-hoc enumeration
      choiceItems = range;
    } else {  // range is an entity type
      choiceItems = Object.keys( range.instances);
    }
    dom.fillSelectWithOptionsFromArrayList( selEl, choiceItems);
    selEl.addEventListener("change", function () {
      // UI element to model property data binding (top-down)
      if (selEl.value !== "") {
        if (oBJECTvIEW.isIntegerType( range)) {
          mo[fld] = parseInt( selEl.value);
          // increment by 1 for enumerations
          if (range instanceof eNUMERATION) mo[fld]++;
        } else if (fields[fld].range === "Date") {
          mo[fld] = new Date( selEl.value);
        } else {
          mo[fld] = selEl.value;
        }
      }
    });
    return lblEl;
  }
  /**
   * Create UI elements for view fields
   * depends on: fieldOrder
   * @method
   */
  function createUiElemsForVmFields() {
    //============= Inner Function ==============================
    function createUiElemForVmField (containerEl, fld) {
      var range = fields[fld].range,
          isEnum = range instanceof eNUMERATION,
          isArr = Array.isArray( range);
      if (isEnum || isArr) {  // (ad-hoc) enumeration
        if (isEnum && range.MAX <= maxELforButton ||
            isArr && range.length <= maxELforButton) {
          containerEl = createChoiceButtonGroup( fld);
          if (!containerEl.className) containerEl.className = "choice";
        } else {
          if (!containerEl.className) containerEl.className = "select";
          containerEl.appendChild( createSelectionList( fld));
        }
      } else if (range === "Boolean") {
        if (!containerEl.className) containerEl.className = "yes-no-field";
        containerEl.appendChild( createLabeledYesNoField( fld));
      } else {  // string/numeric property field
        if (!containerEl.className) containerEl.className = "I-O-field";
        containerEl.appendChild( createLabeledTextField( fld));
      }
      if (fields[fld].dependsOn) {
        if (mo[fields[fld].dependsOn]) containerEl.style.display = "block";
        else containerEl.style.display = "none";
        dataBinding[fields[fld].dependsOn].addEventListener("change", function () {
          // toggle CSS style.display of containerEl
          containerEl.style.display = (containerEl.style.display === "none") ? "block" : "none";
        });
      }
    }
    //=========================================================
    fieldOrder.forEach( function (fldOrdEl) {
      var containerEl = document.createElement("div");
      if (!Array.isArray( fldOrdEl)) {  // single field
        createUiElemForVmField( containerEl, fldOrdEl);
      } else {  // field group
        containerEl.className = "field-group";
        fldOrdEl.forEach( function (fld) {
          createUiElemForVmField( containerEl, fld);
        });
      }
      uiContainerEl.appendChild( containerEl);
    });
  }
  /**
   * Create UI elements (like buttons) for all user actions of the view
   * depends on: fieldOrder
   * @method
   */
  function createUiElemsForUserActions( parentEl) {
    var containerEl = dom.createElement("div", {
      classValues:"action-group"
    });
    Object.keys( userActions).forEach( function (usrAct) {
      containerEl.appendChild( dom.createButton({
        name: usrAct,
        label: userActions[usrAct].label || util.capitalizeFirstChar( usrAct),
        handler: userActions[usrAct]
      }));
      parentEl.appendChild( containerEl);
    });
  }
  /* ==================================================================== */
  /* MAIN CODE of render                                                  */
  /* ==================================================================== */

  uiContainerEl = dom.createElement(
      !parentEl ? "form":"div", {id: mo.objectName});
  if (this.heading) {
    uiContainerEl.appendChild( dom.createElement("h2", {content:this.heading}));
  }
  // store the object view's DOM element
  this.domElem = uiContainerEl;
  if (!parentEl) parentEl = document.querySelector("#uiContainerEl");
  if (!parentEl) {
    parentEl = document.body;
    footerEl = document.querySelector("html>body>footer");
    if (footerEl) {
      document.body.insertBefore( uiContainerEl, footerEl);
    } else {
      document.body.appendChild( uiContainerEl);
    }
  } else parentEl.appendChild( uiContainerEl);
  if (uiContainerEl.tagName === "FORM") {  // reset custom validity
    for (i=0; i < uiContainerEl.elements.length; i++) {
      uiContainerEl.elements[i].setCustomValidity("");
    }
    uiContainerEl.reset();
  }
  // create DOM elements for all UI/view fields
  createUiElemsForVmFields();
  // create DOM elements (like buttons) for all user actions of the UI/view model
  createUiElemsForUserActions( uiContainerEl);
  return dataBinding;  // a map of field names to corresponding DOM elements 
};
/**
 * Set up a tabular UI for defining the objects/population of a given cLASS
 * @author Gerd Wagner
 * @method
 * @return {object} classPopulationUI
 */
oBJECTvIEW.createClassPopulationWidget = function (Class, editableProperties) {
  var popTableEl = dom.createElement("table", {
    id: Class.Name + "-PopTable",
    classValues: "PopTable"
  });
  var headerRowEl=null, cell=null,
      tBody = document.createElement("tBody");
  var rowObjects=[], columnProperties=[];  // for mapping table cells to object slots
  if (editableProperties) columnProperties = editableProperties;
  else {
    Object.keys( Class.properties).forEach( function (p) {
      if (p !== "id" && p !== "name") columnProperties.push( p);
    });
  }
  popTableEl.appendChild( tBody);
  // store properties displayed in table  TODO: currently not used...
  popTableEl.setAttribute("data-properties", columnProperties.join(" "));
  // create table heading
  popTableEl.appendChild( document.createElement("thead"));
  headerRowEl = popTableEl.tHead.insertRow();
  cell = headerRowEl.insertCell();
  cell.textContent = Class.Name;
  cell.colSpan = Object.keys( Class.properties).length + 1;
  // create fixed "ID/Name" column heading
  headerRowEl = popTableEl.tHead.insertRow();
  headerRowEl.insertCell().textContent = "ID/Name";
  // create column headings for other columns
  Object.keys( Class.properties).forEach( function (p) {
    var c=null;
    if (columnProperties.includes( p)) {
      c = headerRowEl.insertCell();
      c.textContent = Class.properties[p].label || p;
    };
  });
  // create rows for all objects
  Object.keys( Class.instances).forEach( function (objIdStr,i) {
    var obj = Class.instances[objIdStr],
        rowEl = tBody.insertRow();
    // create object row
    rowObjects[i] = obj;
    // create property value cells for own properties TODO: support inherited properties
    rowEl.insertCell().textContent = obj.name ? obj.id +" / "+ obj.name : obj.id;
    Object.keys( Class.properties).forEach( function (p) {
      var c=null;
      if (columnProperties.includes( p)) {
        c = rowEl.insertCell();
        //c.textContent = cLASS.convertPropValToStr( Class, p, obj[p]);
        c.textContent = obj.getValAsString( p);
        // save value for being able to restore it
        c.setAttribute("data-oldVal", c.textContent);
        c.setAttribute("contenteditable","true");
        c.title = "Click to change!";
        c.addEventListener("blur", function (e) {
          var tdEl = e.target,
              val = tdEl.textContent,
              colNo = tdEl.cellIndex - 1, // skip first column (name/ID)
              rowNo = tdEl.parentElement.rowIndex - 2,  // rowIndex includes 2 tHead rows
              prop = columnProperties[colNo],
              constrVio = cLASS.check( prop, Class.properties[prop], val);
          if (constrVio.message) {
            alert( constrVio.message);
            tdEl.textContent = tdEl.getAttribute("data-oldVal");
          } else {
            val = constrVio.checkedValue;
            // update corresponding object slot
            rowObjects[rowNo][prop] = val;
            tdEl.setAttribute("data-oldVal", tdEl.textContent);
          }
        });
      };
    });
  });
  // create an AddRow button
  //oBJECTvIEW.createUiElemsForUserActions( popTableEl, this.userActions);
  return popTableEl;
};
/**
 * Create UI elements (like buttons) for all user actions of the view
 * depends on: fieldOrder
 * @method
 */
oBJECTvIEW.createUiElemsForUserActions = function (userActions) {
  var containerEl = dom.createElement("div", {
    classValues:"action-group"
  });
  Object.keys( userActions).forEach( function (usrAct) {
    containerEl.appendChild( dom.createButton({
      name: usrAct,
      label: userActions[usrAct].label || util.capitalizeFirstChar( usrAct),
      handler: userActions[usrAct]
    }));
  });
  return containerEl;
};
/**
 * Render an HTML form based on a view model (an abstract UI definition)
 * @author Gerd Wagner
 * @method
 */
oBJECTvIEW.createUiFromViewModel = function (viewModel) {
  var outFields = viewModel.outputFields,  // map of field definitions
      inFields = viewModel.inputFields,  // map of field definitions
      fields = {},
      // list of field names or field name lists
      fieldOrder = viewModel.fieldOrder ||
          Object.keys( outFields).concat( Object.keys( inFields)),
      fieldValues = viewModel.fieldValues,
      userActions = viewModel.userActions,
      // a map for storing the bindings of DOM form elems to UI fields
      dataBinding = {},
      validateOnInput = viewModel.validateOnInput || true,
      fldGrpSep = viewModel.fieldGroupSeparator,
      uiContainerEl=null;
  /* ==================================================================== */
  /**
   * Create a labeled text field. When validation is not performed on input
   * it is performed on blur in the case of "Create" for catching mandatory
   * value constraint violations, and on change in the case of "Update".
   * @method
   */
  function createLabeledTextField( fld) {
    var fldEl = null, lblEl = document.createElement("label"),
        fDecl = fields[fld];   // field declaration
    if (fDecl.inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "text";
      if (validateOnInput) {
        fldEl.addEventListener("input", function () {
          fldEl.setCustomValidity( cLASS.check( fld, fDecl, fldEl.value).message);
        });
      } else {
        fldEl.addEventListener("blur", function () {
          fldEl.setCustomValidity( cLASS.check( fld, fDecl, fldEl.value).message);
        });
      }
      fldEl.addEventListener("change", function () {
        var v = fldEl.value;
        if (!validateOnInput) {
          fldEl.setCustomValidity( cLASS.check( fld, fDecl, v).message);
        }
        // UI element to model property data binding (top-down)
        if (fldEl.validity.valid) fieldValues[fld] = v;
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    // render text input element
    fldEl.name = fld;
    if (typeof fDecl.fieldValue === "function") {
      fldEl.value = fDecl.fieldValue();
    } else fldEl.value = fDecl.fieldValue || "";
    fldEl.size = 7;
    if (fDecl.hint) lblEl.title = fDecl.hint;
    lblEl.textContent = fDecl.label;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a labeled Yes/No field.
   * @method
   */
  function createLabeledYesNoField( fld) {
    var fldEl = null, lblEl = document.createElement("label"),
        decl = fields[fld];   // field declaration
    if (decl.inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "checkbox";
      fldEl.addEventListener("change", function () {
        fieldValues[fld] = fldEl.checked;  // UI element to model property data binding
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    fldEl.name = fld;
    fldEl.checked = fieldValues[fld];
    lblEl.textContent = fields[fld].label;
    if (fields[fld].hint) lblEl.title = fields[fld].hint;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a choice control group in a container element.
   * A choice control is either an HTML radio button or an HTML checkbox.
   * @method
   */
  function createChoiceButtonGroup( fld) {
    var j=0, btnType="", containerEl=null, el=null, choiceItems=[],
        range = fields[fld].range;
    el = document.createElement("legend");
    el.textContent = fields[fld].label;
    containerEl = document.createElement("fieldset");
    containerEl.appendChild( el);
    containerEl.setAttribute("data-bind", fld);
    // store data binding of UI element
    dataBinding[fld] = containerEl;
    // if maxCard is defined, use checkboxes
    if (fields[fld].maxCard) {
      btnType = "checkbox";
      containerEl.className = "checkbox-group";
    } else {
      btnType = "radio";
      containerEl.className = "radio-button-group";
    }
    if (range instanceof eNUMERATION) {
      choiceItems = range.labels;
    } else if (Array.isArray(range)) {  // range is an ad-hoc enumeration
      choiceItems = range;
    } else {  // range is an entity type
      choiceItems = Object.keys( range.instances);
    }
    for (j=0; j < choiceItems.length; j++) {
      // button values = 1..n
      el = dom.createLabeledChoiceControl( btnType, fld, j+1, choiceItems[j]);
      containerEl.appendChild( el);
      el.firstElementChild.addEventListener("click", function (e) {
        // UI element to model property data binding (top-down)
        var btnEl = e.target, i=0,
            val = parseInt( btnEl.value);
        if (btnType === "radio") {
          if (val !== fieldValues[fld]) {
            fieldValues[fld] = val;
          } else if (fields[fld].optional) {
            // turn off radio button
            btnEl.checked = false;
            fieldValues[fld] = undefined;
          }
        } else {  // checkbox
          i = fieldValues[fld].indexOf( val);
          if (i > -1) {  // delete from value list
            fieldValues[fld].splice(i, 1);
          } else {  // add to value list
            fieldValues[fld].push( val);
          }
        }
      });
    }
    return containerEl;
  }
  /**
   * Create a selection list
   * @method
   */
  function createSelectionList( fld) {
    var choiceItems = [],
        selEl = document.createElement("select"),
        lblEl = document.createElement("label"),
        range  = fields[fld].range;
    lblEl.textContent = fields[fld].label;
    lblEl.appendChild( selEl);
    selEl.setAttribute("data-bind", fld);
    // store data binding assignment of UI element to view field
    dataBinding[fld] = selEl;
    // if maxCard is defined, make a multi-selection list
    if (fields[fld].maxCard) selEl.multiple = "multiple";
    if (range instanceof eNUMERATION) {
      choiceItems = range.labels;
    } else if (Array.isArray(range)) {  // range is an ad-hoc enumeration
      choiceItems = range;
    } else {  // range is an entity type
      choiceItems = Object.keys( range.instances);
    }
    dom.fillSelectWithOptionsFromArrayList( selEl, choiceItems);
    selEl.addEventListener("change", function () {
      // UI element to model property data binding (top-down)
      if (selEl.value !== "") {
        if (oBJECTvIEW.isIntegerType( range)) {
          fieldValues[fld] = parseInt( selEl.value);
          // increment by 1 for enumerations
          if (range instanceof eNUMERATION) fieldValues[fld]++;
        } else if (fields[fld].range === "Date") {
          fieldValues[fld] = new Date( selEl.value);
        } else {
          fieldValues[fld] = selEl.value;
        }
      }
    });
    return lblEl;
  }
  /**
   * Create UI elements for view fields
   * depends on: fieldOrder
   * @method
   */
  function createUiElemsForVmFields() {
    //============= Inner Function ==============================
    function createUiElemForVmField (containerEl, fld) {
      var range = fields[fld].range,
          isEnum = range instanceof eNUMERATION,
          isArr = Array.isArray( range);
      if (isEnum || isArr) {  // (ad-hoc) enumeration
        if (isEnum && range.MAX <= oBJECTvIEW.maxCardButtonGroup ||
            isArr && range.length <= oBJECTvIEW.maxCardButtonGroup) {
          containerEl.appendChild( createChoiceButtonGroup( fld));
          if (!containerEl.className) containerEl.className = "choice";
        } else {
          if (!containerEl.className) containerEl.className = "select";
          containerEl.appendChild( createSelectionList( fld));
        }
      } else if (range === "Boolean") {
        if (!containerEl.className) containerEl.className = "yes-no-field";
        containerEl.appendChild( createLabeledYesNoField( fld));
      } else {  // string/numeric property field
        if (!containerEl.className) containerEl.className = "I-O-field";
        containerEl.appendChild( createLabeledTextField( fld));
      }
      if (fields[fld].dependsOn) {
        if (fieldValues[fields[fld].dependsOn]) containerEl.style.display = "block";
        else containerEl.style.display = "none";
        dataBinding[fields[fld].dependsOn].addEventListener("change", function () {
          // toggle CSS style.display of containerEl
          containerEl.style.display = (containerEl.style.display === "none") ? "block" : "none";
        });
      }
    }
    //=========================================================
    fieldOrder.forEach( function (fldOrdEl) {
      var containerEl = document.createElement("div");
      if (!Array.isArray( fldOrdEl)) {  // single field
        createUiElemForVmField( containerEl, fldOrdEl);
      } else {  // field group
        containerEl.className = "field-group";
        fldOrdEl.forEach( function (fld) {
          createUiElemForVmField( containerEl, fld);
        });
      }
      uiContainerEl.appendChild( containerEl);
    });
  }
  /**
   * Create UI elements (like buttons) for all user actions of the view
   * depends on: fieldOrder
   * @method
   */
  function createUiElemsForUserActions( parentEl) {
    var containerEl = dom.createElement("div", {
      classValues:"action-group"
    });
    Object.keys( userActions).forEach( function (usrAct) {
      containerEl.appendChild( dom.createButton({
        name: usrAct,
        label: userActions[usrAct].label || util.capitalizeFirstChar( usrAct),
        handler: userActions[usrAct]
      }));
      parentEl.appendChild( containerEl);
    });
  }
  /* ====================================================================
     M A I N
     ==================================================================== */
  if (!fieldValues) fieldValues = viewModel.fieldValues = {};
  Object.keys( outFields).forEach( function (fld) {
    outFields[fld].inputOutputMode = "O";
  });
  fields = util.mergeObjects( outFields, inFields);
  uiContainerEl = dom.createElement("form");
  if (viewModel.formID) uiContainerEl.id = viewModel.formID;
  if (viewModel.title) {
    uiContainerEl.appendChild( dom.createElement("h1", {content:viewModel.title}));
  }
  // store the view model's DOM element
  viewModel.domElem = uiContainerEl;
  /*
  if (uiContainerEl.tagName === "FORM") {  // reset custom validity
    for (i=0; i < uiContainerEl.elements.length; i++) {
      uiContainerEl.elements[i].setCustomValidity("");
    }
    uiContainerEl.reset();
  }
  */
  // create DOM elements for all UI/view fields
  createUiElemsForVmFields();
  // create DOM elements (like buttons) for all user actions of the UI/view model
  createUiElemsForUserActions( uiContainerEl);
  // store the view model's data binding (map field names to corresponding DOM elements)
  viewModel.dataBinding = dataBinding;
  return uiContainerEl;
};
oBJECTvIEW.maxCardButtonGroup = 7;

