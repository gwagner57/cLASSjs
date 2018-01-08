/* jshint browser: true */
'use strict';

if (!window.localStorage || !("classList" in document.createElement("a"))) {
  alert("The browser you are using is out-dated! Update your browser or install a recent version of Firefox.");
  throw "Cannot run on this browser";
}

/**
 * Implements the trim function for browsers 
 * that don't support it natively
 */
if (!String.prototype.trim) {  
  String.prototype.trim = function () {  
    return this.replace(/^\s+|\s+$/g,'');  
  };  
}
/**
 * Implement some ECMASCRIPT6 methods for browsers 
 * that don't support them natively
 */
if (!Number.isInteger) {
  Number.isInteger = function isInteger (nVal) {
    return typeof nVal === "number" && isFinite(nVal) && 
        nVal > -9007199254740992 && nVal < 9007199254740992 && 
        Math.floor(nVal) === nVal;
  };
}
if (!String.prototype.includes ) {
  String.prototype.includes = function () {
    return String.prototype.indexOf.apply( this, arguments ) !== -1;
  };
}
if (!Array.prototype.includes ) {
  Array.prototype.includes = function () {
    return Array.prototype.indexOf.apply( this, arguments ) !== -1;
  };
}
/**
 * Compute the max/min of an array
 * Notice that apply requires a context object, which is not really used
 * in the case of a static function such as Math.max
 */
Array.max = function (array) {
  return Math.max.apply( Math, array);
}; 
Array.min = function (array) {
  return Math.min.apply( Math, array);
};
/**
 * Clone an array
 */
Array.prototype.clone = function () {
  return this.slice(0);
};
/**
 * Merge an array with another one
 */
Array.prototype.merge = function (anotherArray) {
  return Array.prototype.push.apply( this, anotherArray);
};
/**
 * Test if an array is equal to another
 */
Array.prototype.isEqualTo = function (a2) {
  return (this.length === a2.length) && this.every( function( el, i) {
    return el === a2[i]; });
};
/**
 * Return an array of the values of an object
 */
Object.values = function (obj) {
  return Object.keys(obj).map( function (key) {
      return obj[key];
    });
};

/**
 * @fileOverview  Defines error classes (also called "exception" classes)
 * @author Gerd Wagner
 */

function ConstraintViolation( msg, culprit) {
  this.message = msg;
  if (culprit) this.culprit = culprit;
}
function NoConstraintViolation( v) {
  if (v !== undefined) this.checkedValue = v;
  this.message = "";
}
NoConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
NoConstraintViolation.prototype.constructor = NoConstraintViolation;

/*
 * Property Constraint Violations
 */
function MandatoryValueConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
MandatoryValueConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
MandatoryValueConstraintViolation.prototype.constructor = MandatoryValueConstraintViolation;

function RangeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
RangeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
RangeConstraintViolation.prototype.constructor = RangeConstraintViolation;

function StringLengthConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
StringLengthConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
StringLengthConstraintViolation.prototype.constructor = StringLengthConstraintViolation;

function IntervalConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
IntervalConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
IntervalConstraintViolation.prototype.constructor = IntervalConstraintViolation;

function PatternConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
PatternConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
PatternConstraintViolation.prototype.constructor = PatternConstraintViolation;

function UniquenessConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
UniquenessConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
UniquenessConstraintViolation.prototype.constructor = UniquenessConstraintViolation;

function CardinalityConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
CardinalityConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
CardinalityConstraintViolation.prototype.constructor = CardinalityConstraintViolation;

function ReferentialIntegrityConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ReferentialIntegrityConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ReferentialIntegrityConstraintViolation.prototype.constructor = ReferentialIntegrityConstraintViolation;

function FrozenValueConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
FrozenValueConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
FrozenValueConstraintViolation.prototype.constructor = FrozenValueConstraintViolation;

function OtherConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
OtherConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
OtherConstraintViolation.prototype.constructor = OtherConstraintViolation;

/*
 * Entity Type Constraint Violations
 */
function EntityTypeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
EntityTypeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
EntityTypeConstraintViolation.prototype.constructor = EntityTypeConstraintViolation;

function ModelClassConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ModelClassConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ModelClassConstraintViolation.prototype.constructor = ModelClassConstraintViolation;

function ViewConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ViewConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ViewConstraintViolation.prototype.constructor = ViewConstraintViolation;

function ObjectTypeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ObjectTypeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ObjectTypeConstraintViolation.prototype.constructor = ObjectTypeConstraintViolation;

function AgentTypeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
AgentTypeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
AgentTypeConstraintViolation.prototype.constructor = AgentTypeConstraintViolation;

function KindConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
KindConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
KindConstraintViolation.prototype.constructor = KindConstraintViolation;

function RoleConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
RoleConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
RoleConstraintViolation.prototype.constructor = RoleConstraintViolation;

/*******************************************************************************
 * @fileOverview A collection of utilities: methods, objects, etc used all over the code.
 * @author Mircea Diaconescu
 * @copyright Copyright © 2014 Gerd Wagner, Mircea Diaconescu et al, 
 *            Chair of Internet Technology, Brandenburg University of Technology, Germany.
 * @date July 08, 2014, 11:04:23
 * @license The MIT License (MIT)
 ******************************************************************************/
var util = {};  //typeof util === undefined ? {} : util;
util.nextYear = function () {
  var date = new Date();
  return (date.getFullYear() + 1);
};
/**
 * Serialize a Date object as an ISO date string
 * @return  YYYY-MM-DD
 */
util.createIsoDateString = function (d) {
  return d.toISOString().substring(0,10);
};
/**
 * Capitalize the first character of a string
 * @param {string} str
 * @return {string}
 */
util.capitalizeFirstChar = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Copy all own (property and method) slots of a number of untyped objects 
 * to a new untyped object.
 * @author Gerd Wagner
 * @return {object}  The merge result.
 */
util.mergeObjects = function () {
  var i = 0, k = 0, n = arguments.length, m = 0, 
      foundArrayArg = false,
      foundObjectArg = false, 
      arg = null, mergedResult,
      keys=[], key="";
  for (i = 0; i < n; i++) {
    arg = arguments[i];
    if (arg === undefined) {
      continue;
    }
    if (Array.isArray( arg)) {
      if (!foundObjectArg) {
        mergedResult = mergedResult ? mergedResult : [];
        foundArrayArg = true;
        mergedResult = mergedResult.concat( arg);
      } else {
        throw "util.mergeObjects: incompatible objects were found! Trying to merge "+
              "an Array with an Object! Expected Array arguments only!";
      }
    } else if (typeof arg === 'object') {
      if (!foundArrayArg) {
        mergedResult = mergedResult ? mergedResult : {};
        foundObjectArg = true;
        keys = Object.keys( arg);
        m = keys.length;
        for (k = 0; k < m; k++) {
          key = keys[k]; 
          mergedResult[key] = arg[key];
        }      
      } else {
        throw "util.mergeObjects: incompatible objects were found! Trying to merge "+
              "an Object with an Array! Expected Object arguments only!";
      }
    } else {
      throw "util.mergeObjects: only arguments of type Array or Object are allowed, but '" +
             typeof arguments[i] + "' type was found for argument number " + i;
    }
  }
  return mergedResult;
};

//***** NOT USED IN cLASSjs ************************
/**
 * Verifies if a value represents an integer or integer string
 * @param {string} x
 * @return {boolean}
 */
util.isIntegerString = function (x) {
  return typeof(x) === "string" && x.search(/^-?[0-9]+$/) == 0;
};
/**
 * Extract the data record part of an object. The extracted property values
 * are either primitive data values, Date objects, or arrays of primitive
 * data values.
 * @param {object} obj
 */
util.createRecordFromObject = function (obj) {
  var record={}, p="", val;
  for (p in obj) {
    val = obj[p];
    if (obj.hasOwnProperty(p) && (typeof(val) === "string" ||
            typeof(val) === "number" || typeof(val) === "boolean" ||
            val instanceof Date ||
            Array.isArray( val) &&  // array list of data values
            !val.some( function (el) {
              return typeof(el) === "object";
            })
        )) {
      if (val instanceof Date) record[p] = val.toISOString();
      else if (Array.isArray( val)) record[p] = val.slice(0);
      else record[p] = val;
    }
  }
  return record;
};
/**
 * Create a deep clone of a JS object
 * @param o  the object to be cloned
 * @return {object}
 */
util.cloneObject = function (o) {
  var clonedObj = Array.isArray(o) ? [] : {};
  Object.keys(o).forEach( function (key) {
    clonedObj[key] = (typeof o[key] === "object") ? util.cloneObject(o[key]) : o[key];
  });
  return clonedObj;
};

/**
 * Predefined class for creating enumerations as special JS objects.
 * @copyright Copyright 2014 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 * @constructor
 * @this {eNUMERATION}
 * @param {string} name  The name of the new enumeration data type.
 * @param {array} enumArg  The labels array or code list map of the enumeration
 *
 * An eNUMERATION has the following properties:
 * labels         an array list of label strings such that enumLabel = labels[enumIndex-1]
 * enumLitNames
 *
 */
/* globals eNUMERATION */
function eNUMERATION( name, enumArg) {
  var i = 0, lbl = "", LBL = "";
  if (typeof name !== "string") {
    throw new Error(
      "The first constructor argument of an enumeration must be a string!");
  }
  this.name = name;
  if (Array.isArray(enumArg)) {
    // a simple enum defined by a list of labels
    if (!enumArg.every(function (n) {
        return (typeof n === "string");
      })) {
      throw new Error("A list of enumeration labels as the second " +
        "constructor argument must be an array of strings!");
    }
    this.labels = enumArg;
    this.enumLitNames = this.labels;
    this.codeList = null;
  } else if (typeof enumArg === "object" && Object.keys(enumArg).length > 0) {
    // a code list defined by a map
    if (!Object.keys(enumArg).every(function (code) {
        return (typeof enumArg[code] === "string");
      })) {
      throw new Error("All values of a code list map must be strings!");
    }
    this.codeList = enumArg;
    // use codes as the names of enumeration literals
    this.enumLitNames = Object.keys( this.codeList);
    this.labels = this.enumLitNames.map(function (c) {
      return enumArg[c] + " (" + c + ")";
    });
  } else {
    throw new Error(
      "Invalid Enumeration constructor argument: " + enumArg);
  }
  this.MAX = this.enumLitNames.length;
  // generate the enumeration literals by capitalizing/normalizing the names
  for (i = 1; i <= this.enumLitNames.length; i++) {
    // replace " " and "-" with "_"
    lbl = this.enumLitNames[i - 1].replace(/( |-)/g, "_");
    // convert to array of words, capitalize them, and re-convert
    LBL = lbl.split("_").map(function (lblPart) {
      return lblPart.toUpperCase();
    }).join("_");
    // assign enumeration index
    this[LBL] = i;
  }
  // protect the enumeration from change attempts
  Object.freeze( this);
  // add new enumeration to the population of all enumerations
  eNUMERATION.instances[this.name] = this;
}
/*
 * Check if a value represents an enumeration literal or a valid index
 */
eNUMERATION.prototype.isValidEnumLitOrIndex = function (v) {
  return (Number.isInteger(v) && v > 0 && v < this.MAX);
};
/*
 * Serialize a list of enumeration literals/indexes as a list of
 * enumeration literal names
 */
eNUMERATION.prototype.enumIndexesToNames = function (a) {
  if (!Array.isArray(a)) {
    throw new Error(
      "The argument must be an Array!");
  }
  var listStr = a.map(function (enumInt) {
    return this.enumLitNames[enumInt - 1];
  }, this).join(", ");
  return listStr;
};
/*
 * Define a map of all enumerations as a class-level property
 */
eNUMERATION.instances = {};

 /*******************************************************************************
 * cLASS allows defining constructor-based JavaScript classes and
 * class hierarchies based on a declarative description of the form:
 *
 *   var MyObject = new cLASS({
 *     Name: "MyObject",
 *     supertypeName: "MySuperClass",
 *     properties: {
 *       "myAdditionalAttribute": {range:"Integer", label:"...", max: 7, ...}
 *     },
 *     methods: {
 *     }
 *   });
 *   var myObj = new MyObject({id: 1, myAdditionalAttribute: 7});
 *   // test if instance of MyObject
 *   if (myObj.constructor.Name ==="MyObject") ...
 *   // or, alternatively,
 *   if (myObj instanceof MyObject) ...
 *
 * Notice that it is assumed that a class has (or inherits) an "id" attribute
 *
 *
 * @copyright Copyright 2015-2017 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
/* globals cLASS */
function cLASS (classSlots) {
  var propDs = classSlots.properties || {},  // property declarations
      methods = classSlots.methods || {},
      supertypeName = classSlots.supertypeName,
      superclass=null, constr=null,
      propsWithInitialValFunc = [];
  // check Class definition constraints
  if (supertypeName && !cLASS[supertypeName]) {
    throw "Specified supertype "+ supertypeName +" has not been defined!";
  }
  if (!Object.keys( propDs).every( function (p) {
        return (propDs[p].range !== undefined);
      }) ) {
    throw "No range defined for some property of class "+ classSlots.Name +" !";
  }
  // define new class as constructor function
  constr = function (instanceSlots) {
    if (supertypeName) {
      // invoke supertype constructor
      cLASS[supertypeName].call( this, instanceSlots);
    }
    // assign own properties
    Object.keys( propDs).forEach( function (p) {
      var range = propDs[p].range,
          val, rangeClasses=[], i=0, objRef=null, validationResult=null;
      if (typeof instanceSlots === "object" && instanceSlots[p]) {
        // property p has an initialization slot
        val = instanceSlots[p];
        validationResult = cLASS.check( p, propDs[p], val);
        if (!(validationResult instanceof NoConstraintViolation)) throw validationResult;
        // is range a class (or class disjunction)?
        if (typeof range === "string" && typeof val !== "object" &&
            (cLASS[range] || range.includes("|"))) {
          if (range.includes("|")) {
            rangeClasses = range.split("|");
            for (i=0; i < rangeClasses.length; i++) {
              objRef = cLASS[rangeClasses[i]].instances[String(val)];
              // convert IdRef to object reference
              if (objRef) { this[p] = objRef; break;}
            }
          } else {  // range is a class
            // convert IdRef to object reference
            this[p] = cLASS[range].instances[String(val)] || val;
          }
        } else this[p] = val;
        delete instanceSlots[p];
      } else if (propDs[p].initialValue !== undefined) {
        // no initialization slot, assign initial value
        if (typeof propDs[p].initialValue === "function") {
          propsWithInitialValFunc.push(p);
        } else this[p] = propDs[p].initialValue;
      } else if (!propDs[p].optional) {
        // assign default value to mandatory properties without an initialization slot
        if (cLASS.isIntegerType(range) || cLASS.isDecimalType(range)) {
          this[p] = 0;
        } else if (range === "String") {
          this[p] = "";
        } else if (range === "Boolean") {
          this[p] = false;
        } else if (typeof range === "string" && cLASS[range] ||
            typeof range === "object" && ["Array", "ArrayList"].includes(range["dataType"])) {
          this[p] = [];
        } else if (typeof range === "object" && range["dataType"] === "Map") {
          this[p] = {};
        }
      }
      // initialize historical properties
      if (propDs[p].historySize) {
        this.history = this.history || {};  // a map
        this.history[p] = propDs[p].decimalPlaces ?
            new cLASS.RingBuffer( propDs[p].range, propDs[p].historySize,
                {decimalPlaces: propDs[p].decimalPlaces}) :
            new cLASS.RingBuffer( propDs[p].range, propDs[p].historySize);
      }
    }, this);
    // call the functions for initial value expressions
    propsWithInitialValFunc.forEach( function (p) {
      this[p] = propDs[p].initialValue.call(this);
    }, this);
    // assign remaining fields not defined as properties by the object's class
    if (typeof( instanceSlots) === "object") {
      Object.keys( instanceSlots).forEach( function (f) {
        this[f] = instanceSlots[f];
      }, this);
    }
    // is the class not abstract and does the object have an ID slot?
    if (!classSlots.isAbstract && "id" in this) {
      // add new object to the population/extension of the class
      cLASS[classSlots.Name].instances[String(this.id)] = this;
    }
  };
  // assign class-level (meta-)properties
  constr.constructor = cLASS;
  constr.Name = classSlots.Name;
  if (classSlots.isAbstract) constr.isAbstract = true;
  if (classSlots.shortLabel) constr.shortLabel = classSlots.shortLabel;
  if (supertypeName) {
    constr.supertypeName = supertypeName;
    superclass = cLASS[supertypeName];
    // apply classical inheritance pattern
    constr.prototype = Object.create( superclass.prototype);
    constr.prototype.constructor = constr;
    // merge superclass property declarations with own property declarations
    constr.properties = Object.create( superclass.properties);
   //  assign own property declarations, possibly overriding super-props																		 
    Object.keys( propDs).forEach( function (p) {
      constr.properties[p] = propDs[p];
    });
  } else {  // if class is root class
    constr.properties = propDs;
    // overwrite and improve the standard toString method
    constr.prototype.toString = function () {
      var str1="", str2="", i=0;
      if (this.name) str1 = this.name;
      else {
        str1 = this.constructor.shortLabel || this.constructor.Name;
        if (this.id) str1 += ":"+ this.id;
      }
      str2 = "{ ";
      Object.keys( this).forEach( function (key) {
        var propDecl = cLASS[this.constructor.Name].properties[key],
            propLabel = propDecl ? (propDecl.shortLabel || propDecl.label) : key,
            valStr = "";
        // is the slot of a declared reference property?
        if (propDecl && typeof propDecl.range === "string" && cLASS[propDecl.range]) {
          // is the property multi-valued?
          if (propDecl.maxCard && propDecl.maxCard > 1) {
            if (Array.isArray( this[key])) {
              valStr = this[key].map( function (o) {return o.id;}).toString();
            } else valStr = JSON.stringify( Object.keys( this[key]));
          } else {  // if the property is single-valued
            valStr = String( this[key].id);
          }
        } else if (typeof this[key] === "function") {
          // the slot is an instance-level method slot
          valStr = "a function";
        } else {  // the slot is an attribute slot or an undeclared reference property slot
          valStr = JSON.stringify( this[key]);
        }
        if (this[key] !== undefined && propLabel) {
          str2 += (i>0 ? ", " : "") + propLabel +": "+ valStr;
          i = i+1;
        }
      }, this);
      str2 += "}";
      if (str2 === "{ }") str2 = "";
      return str1 + str2;
    };
    // define a concise serialization method for logging
    constr.prototype.toLogString = function () {
      var str1="", str2="", i=0;
      var decimalPlaces = 2,
          roundFactor = Math.pow( 10, decimalPlaces);
      if (this.name) str1 = this.name;
      else {
        str1 = this.constructor.shortLabel || this.constructor.Name;
        if (this.id) str1 += ":"+ this.id;
      }
      str2 = "{ ";
      Object.keys( this).forEach( function (key) {
        var propDecl = cLASS[this.constructor.Name].properties[key],
            val = this[key], propLabel="", valStr="";
        if (!propDecl || !propDecl.shortLabel) return;
        propLabel = propDecl.shortLabel;
        // if the property is a reference property?
        if (cLASS[propDecl.range]) {
          // if the reference property is multi-valued?
          if (propDecl.maxCard && propDecl.maxCard > 1) {
            if (Array.isArray( val)) {
              valStr = val.map( function (o) {return o.id;}).toString();
            } else valStr = JSON.stringify( Object.keys( val));
          } else {  // if the reference property is single-valued
            valStr = val.id;
          }
        } else {  // if the property is not a reference property
          if (typeof val === "number" && !Number.isInteger(val)) {
            valStr = JSON.stringify( Math.round( val * roundFactor) / roundFactor);
          } else valStr = JSON.stringify( val);
        }
        if (val !== undefined) {
          str2 += (i>0 ? ", " : "") + propLabel +": "+ valStr;
          i = i+1;
        }
      }, this);
      str2 += "}";
      if (str2 === "{ }") str2 = "";
      return str1 + str2;
    };
  }
  // assign instance-level methods
  Object.keys( methods).forEach( function (m) {
    constr.prototype[m] = methods[m];
  });
  // store class/constructor as value associated with its name in a map
  cLASS[classSlots.Name] = constr;
  // initialize the class-level instances property
   if (!classSlots.isAbstract) {
     cLASS[classSlots.Name].instances = {};
   }
  // return the class/constructor as the object constructed with new
  return constr;
}
 /**
  * Determine if a type is an integer type.
  * @method
  * @author Gerd Wagner
  * @param {string|eNUMERATION} T  The type to be checked.
  * @return {boolean}
  */
cLASS.isIntegerType = function (T) {
  return typeof(T)==="string" && T.includes('Integer') ||
      T instanceof eNUMERATION;
};
 /**
  * Determine if a type is a decimal type.
  * @method
  * @author Gerd Wagner
  * @param {string} T  The type to be checked.
  * @return {boolean}
  */
 cLASS.isDecimalType = function (T) {
   return typeof(T)==="string" &&
       (T.includes("Decimal") || T.includes("UnitInterval"));
 };
 /**
  * Constants
  */
 cLASS.patterns = {
   // defined in WHATWG HTML5 specification
   EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
   // proposed by Diego Perini (https://gist.github.com/729294)
   URL: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
   INT_PHONE_NO: /^\+(?:[0-9] ?){6,14}[0-9]$/
 };
 /**
  * Generic method for checking the integrity constraints defined in property declarations.
  * The values to be checked are first parsed/deserialized if provided as strings.
  * Copied from the cOMPLEXtYPE class of oNTOjs
  *
  * min/max: numeric (or string length) minimum/maximum
  * optional: true if property is single-valued and optional (false by default)
  * range: String|NonEmptyString|Integer|...
  * pattern: a regular expression to be matched
  * minCard/maxCard: minimum/maximum cardinality of a multi-valued property
  *     By default, maxCard is 1, implying that the property is single-valued, in which
  *     case minCard is meaningless/ignored. maxCard may be Infinity.
  *
  * @method
  * @author Gerd Wagner
  * @param {string} fld  The property for which a value is to be checked.
  * @param {object} decl  The property's declaration.
  * @param {string|number|boolean|object} val  The value to be checked.
  * @return {ConstraintViolation}  The constraint violation object.
  */
 cLASS.check = function (fld, decl, val, optParams) {
   var constrVio=null, valuesToCheck=[],
       msg = decl.patternMessage || "",
       minCard = decl.minCard || 0,  // by default, a multi-valued property is optional
       maxCard = decl.maxCard || 1,  // by default, a property is single-valued
       min = decl.min || 0, max = decl.max,
       range = decl.range,
       pattern = decl.pattern;
   // check Mandatory Value Constraint
   if (val === undefined || val === "") {
     if (decl.optional) return new NoConstraintViolation();
     else {
       return new MandatoryValueConstraintViolation(
           "A value for "+ fld +" is required!");
     }
   }
   if (maxCard === 1) {  // single-valued property
     valuesToCheck = [val];
   } else {  // multi-valued property
     // can be array-valued or map-valued
     if (Array.isArray( val) ) {
       valuesToCheck = val;
     } else if (typeof( val) === "string") {
       valuesToCheck = val.split(",").map(function (el) {
         return el.trim();
       });
     } else {
       return new RangeConstraintViolation("Values for "+ fld +
           " must be arrays!");
     }
   }
   // convert integer strings to integers
   if (cLASS.isIntegerType( range)) {
     valuesToCheck.forEach( function (v,i) {
       if (typeof v === "string") valuesToCheck[i] = parseInt( v);
     });
   }
   // convert decimal strings to decimal numbers
   if (cLASS.isDecimalType( range)) {
     valuesToCheck.forEach( function (v,i) {
       if (typeof v === "string") valuesToCheck[i] = parseFloat( v);
     });
   }
   /*********************************************************************
    ***  Convert value strings to values and check range constraints ****
    ********************************************************************/
   switch (range) {
     case "String":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string") {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be strings!");
         }
       });
       break;
     case "NonEmptyString":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || v.trim() === "") {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be non-empty strings!");
         }
       });
       break;
     case "Email":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || !cLASS.patterns.EMAIL.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid email addresses!");
         }
       });
       break;
     case "URL":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || !cLASS.patterns.URL.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid URLs!");
         }
       });
       break;
     case "PhoneNumber":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || !cLASS.patterns.INT_PHONE_NO.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid international phone numbers!");
         }
       });
       break;
     case "Integer":
       valuesToCheck.forEach( function (v) {
         if (!Number.isInteger(v)) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be an integer!");
         }
       });
       break;
     case "NonNegativeInteger":
       valuesToCheck.forEach( function (v) {
         if (!Number.isInteger(v) || v < 0) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a non-negative integer!");
         }
       });
       break;
     case "PositiveInteger":
       valuesToCheck.forEach( function (v) {
         if (!Number.isInteger(v) || v < 1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a positive integer!");
         }
       });
       break;
     case "Number":
     case "Decimal":
     case "Percent":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "number") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a (decimal) number!");
         }
       });
       break;
     case "ClosedUnitInterval":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "number") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a (decimal) number!");
         } else if (v<0 || v>1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a number in [0,1]!");
         }
       });
       break;
     case "OpenUnitInterval":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "number") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a (decimal) number!");
         } else if (v<=0 || v>=1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a number in (0,1)!");
         }
       });
       break;
     case "Boolean":
       valuesToCheck.forEach( function (v,i) {
         if (typeof v === "string") {
           if (["true","yes"].includes(v)) valuesToCheck[i] = true;
           else if (["no","false"].includes(v)) valuesToCheck[i] = false;
           else constrVio = new RangeConstraintViolation("The value of "+ fld +
                 " must be either 'true'/'yes' or 'false'/'no'!");
         } else if (typeof v !== "boolean") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be either 'true' or 'false'!");
         }
       });
       break;
     case "Date":
       valuesToCheck.forEach( function (v,i) {
         if (typeof v === "string" &&
             (/\d{4}-(0\d|1[0-2])-([0-2]\d|3[0-1])/.test(v) ||
             !isNaN( Date.parse(v)))) {
           valuesToCheck[i] = new Date(v);
         } else if (!(v instanceof Date)) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be either a Date value or an ISO date string. "+
               v +" is not admissible!");
         }
       });
       break;
     default:
       if (range instanceof eNUMERATION) {
         valuesToCheck.forEach( function (v) {
           if (!Number.isInteger( v) || v < 1 || v > range.MAX) {
             constrVio = new RangeConstraintViolation("The value "+ v +
                 " is not an admissible enumeration integer for "+ fld);
           }
         });
       } else if (Array.isArray( range)) {
         // *** Ad-hoc enumeration ***
         valuesToCheck.forEach( function (v) {
           if (range.indexOf(v) === -1) {
             constrVio = new RangeConstraintViolation("The "+ fld +" value "+ v +
                 " is not in value list "+ range.toString());
           }
         });
       } else if (!(typeof range === "string" && (cLASS[range] || range.includes("|")))) {
         if (typeof range === "object" && range.dataType !== undefined) {
           // the range is a (collection) datatype declaration record
           valuesToCheck.forEach(function (v) {
             var i = 0;
             if (typeof v !== "object") {
               constrVio = new RangeConstraintViolation("The value of " + fld +
                   " must be an object! " + JSON.stringify(v) + " is not admissible!");
             }
             switch (range.dataType) {
               case "Array":
                 if (!Array.isArray(v)) {
                   constrVio = new RangeConstraintViolation("The value of " + fld +
                       " must be an array! " + JSON.stringify(v) + " is not admissible!");
                   break;
                 }
                 if (v.length !== range.size) {
                   constrVio = new RangeConstraintViolation("The value of " + fld +
                       " must be an array of length " + range.size + "! " + JSON.stringify(v) + " is not admissible!");
                   break;
                 }
                 for (i = 0; i < range.size; i++) {
                   if (!cLASS.isOfType(v[i], range.itemType)) {
                     constrVio = new RangeConstraintViolation("The items of " + fld +
                         " must be of type " + range.itemType + "! " + JSON.stringify(v) +
                         " is not admissible!");
                   }
                 }
                 break;
             }
           });
         } else if (range === Object) {
           valuesToCheck.forEach(function (v) {
             if (!(v instanceof Object)) {
               constrVio = new RangeConstraintViolation("The value of " + fld +
                   " must be a JS object! " + JSON.stringify(v) + " is not admissible!");
             }
           });
         }
       } else if (optParams && optParams.checkRefInt) {
         // the range is a cLASS or a cLASS disjunction
         valuesToCheck.forEach(function (v, i) {
           var rangeClasses = [];
           if (cLASS[range]) {
             if (v instanceof cLASS[range]) v = valuesToCheck[i] = v.id;  // convert to IdRef
             else if (typeof v === "string") v = valuesToCheck[i] = parseInt(v);
             // assuming that the ID reference represents an integer (ID)
             if (!Number.isInteger(v)) {
               constrVio = new RangeConstraintViolation("The value (" + val + ") of property '" +
                   fld + "' is not an integer!");
             }
             if (!cLASS[range].instances[String(v)]) {
               constrVio = new ReferentialIntegrityConstraintViolation("The value " + v + " of property '" +
                   fld + "' is not an ID of any " + range + " object!");
             }
           } else {  // a cLASS disjunction
             rangeClasses = range.split("|");
             // check referential integrity: val must be in some range class
             if (!rangeClasses.some(function (rc) {
                   return cLASS[rc].instances[String(v)];
                 })) {
               constrVio = ReferentialIntegrityConstraintViolation("The value " + val + " does not reference any of " +
                   range + "!");
             }
           }
         });
       }
   }
   // return constraint violation found in range switch
   if (constrVio) return constrVio;

   /********************************************************
    ***  Check constraints that apply to several ranges  ***
    ********************************************************/
   if (range === "String" || range === "NonEmptyString") {
     valuesToCheck.forEach( function (v) {
       if (min !== undefined && v.length < min) {
         constrVio = new StringLengthConstraintViolation("The length of "+
             fld + " must not be smaller than "+ min);
       } else if (max !== undefined && v.length > max) {
         constrVio = new StringLengthConstraintViolation("The length of "+
             fld + " must not be greater than "+ max);
       } else if (pattern !== undefined && !pattern.test( v)) {
         constrVio = new PatternConstraintViolation( msg || v +
             "does not comply with the pattern defined for "+ fld);
       }
     });
   }
   if (range === "Integer" || range === "NonNegativeInteger" ||
       range === "PositiveInteger") {
     valuesToCheck.forEach( function (v) {
       if (min !== undefined && v < min) {
         constrVio = new IntervalConstraintViolation( fld +
             " must be greater than "+ min);
       } else if (max !== undefined && v > max) {
         constrVio = new IntervalConstraintViolation( fld +
             " must be smaller than "+ max);
       }
     });
   }
   if (constrVio) return constrVio;

   /********************************************************
    ***  Check cardinality constraints  *********************
    ********************************************************/
   if (maxCard > 1) { // (a multi-valued property can be array-valued or map-valued)
     // check minimum cardinality constraint
     if (minCard > 0 && valuesToCheck.length < minCard) {
       return new CardinalityConstraintViolation("A collection of at least "+
           minCard +" values is required for "+ fld);
     }
     // check maximum cardinality constraint
     if (valuesToCheck.length > maxCard) {
       return new CardinalityConstraintViolation("A collection value for "+
           fld +" must not have more than "+ maxCard +" members!");
     }
   }
   val = maxCard === 1 ? valuesToCheck[0] : valuesToCheck;
   return new NoConstraintViolation( val);
 };
 /**
  * Convert property value to form field value.
  * @method
  * @author Gerd Wagner
  * @param {cLASS} Class  The domain of the property.
  * @param {string} prop  The property name.
  * @param {?} val  The value to be converted.
  * @return {boolean}
  */
 cLASS.convertPropValToStr = function ( Class, prop, val) {
   // make sure the eNUMERATION meta-class object can be checked if available
   var eNUMERATION = typeof eNUMERATION === "undefined" ? undefined : eNUMERATION;
   var range = Class.properties[prop].range;
   if (val === undefined) return "";
   if (eNUMERATION && range instanceof eNUMERATION) return range.labels[val-1];
   if (typeof val === "string") return val;
   if (["number","boolean"].includes( typeof(val))) return String( val);
   if (range === "Date") return util.createIsoDateString( val);
   // show the value of a reference property as an ID reference
   if (typeof range === "string" && cLASS[range]) return val["id"];
   // else
   return JSON.stringify( val);
 };
 /**
  * Check if a value is of some type.
  * @method
  * @author Gerd Wagner
  * @return {boolean}
  */
 cLASS.isOfType = function ( v, Type) {
   switch (Type) {
   case "String": return (typeof v === "string");
   case "NonEmptyString": return (typeof v === "string" && v.trim() !== "");
   case "Integer": return Number.isInteger(v);
   case "NonNegativeInteger": return (Number.isInteger(v) && v >= 0);
   case "PositiveInteger": return (Number.isInteger(v) && v > 0);
   case "Decimal": return (typeof v === "number");
   case "ClosedUnitInterval":
     return (typeof v === "number" && v>=0 && v<=1);
   case "OpenUnitInterval":
     return (typeof v === "number" && v>0 && v<1);
   default: return true;
 }
 };
 /**
  * Convert property value to form field value.
  * @method
  * @author Gerd Wagner
  * @param {eNTITYtYPE} ET  The domain of the property.
  * @param {string} prop  The property name.
  * @param {?} val  The value to be converted.
  * @return {boolean}
  */
 cLASS.convertPropValToString = function ( ET, prop, val) {
   var range = ET.properties[prop].range;
   if (val === undefined) return "";
   if (range instanceof eNUMERATION) return range.labels[val-1];
   if (typeof(val) === "string") return val;
   if (["number","boolean"].includes( typeof(val))) return String( val);
   if (range === "Date") return util.createIsoDateString( val);
   if (cLASS[range]) return val[range.standardIdAttr];
   // else
   return JSON.stringify( val);
 };

 /********************************************************
  ***  Collection datatypes  *****************************
  ********************************************************/
/*
 * cLASS datatypes, such as collection types, are defined in the form of
 * cOLLECTIONdATATYPE objects that specify the collection type, the
 * item type and the size of the collection.
 */
 cLASS.cOLLECTIONdATATYPE = function (typeName, itemType, size, optParams) {
   this.type = typeName;
   this.itemType = itemType;
   this.size = size;
   this.optParams = optParams;
 };
 cLASS.Array = function (itemType, size, optParams) {
  /*
  if (constraints) {
    return {dataType:"Array", itemType: itemType, size: size, constraints: constraints};
  } else return {dataType:"Array", itemType: itemType, size: size};
  */
  if (this instanceof cLASS.Array) {
    // called with new, so return an array object
    this.type = "Array";
    this.itemType = itemType;
    this.size = size;
    if (optParams) {
      if (optParams.constraints) this.constraints = optParams.constraints; //TODO
      if (optParams.decimalPlaces) this.decimalPlaces = optParams.decimalPlaces;
    }
    this.array = new Array( size);
  } else {
    // called without new, return an object representing an Array datatype
    return new cLASS.cOLLECTIONdATATYPE("Array",
        {itemType:itemType, size:size, optParams:optParams});
  }
 };
cLASS.ArrayList = function (itemType, constraints) {
   if (constraints) {
     return {dataType:"ArrayList", itemType: itemType, constraints: constraints};
   } else return {dataType:"ArrayList", itemType: itemType};
 };
cLASS.Map = function (itemType, constraints) {
  if (constraints) {
    return {dataType:"Map", itemType: itemType, constraints: constraints};
  } else return {dataType:"Map", itemType: itemType};
};

cLASS.RingBuffer = function (itemType, size, optParams) {
  if (this instanceof cLASS.RingBuffer) {
    // called with new, so return a ring buffer object
    this.type = "RingBuffer";
    this.itemType = itemType;
    this.size = size;
    if (optParams) {
      if (optParams.constraints) this.constraints = optParams.constraints; //TODO
      if (optParams.decimalPlaces) this.decimalPlaces = optParams.decimalPlaces;
    }
    this.first = 0;  // index of first item
    this.last = -1;  // index of last item
    this.buffer = new Array( size);
  } else {
    // called without new, return an object representing a RingBuffer datatype
    return new cLASS.cOLLECTIONdATATYPE("RingBuffer",
        {itemType:itemType, size:size, optParams:optParams});
  }
};
cLASS.RingBuffer.prototype.nmrOfItems = function () {
  if (this.last === -1) return 0;
  else if (this.first <= this.last) return this.last - this.first + 1;
  else return this.last + this.size - this.first + 1;
};
 cLASS.RingBuffer.prototype.add = function (item) {
   if (this.nmrOfItems() < this.size) {
     this.last++;  // still filling the buffer
   } else {  // buffer is full, move both pointers
     this.first = (this.first+1) % this.size;
     this.last = (this.last+1) % this.size;
   }
   this.buffer[this.last] = item;
 };
cLASS.RingBuffer.prototype.toString = function (n) {
  var i=0, str = "[", item, roundingFactor=1,
      N = this.nmrOfItems(),
      outputLen = n ? Math.min( n, N): N;
  if (N === 0) return " ";
  for (i=0; i < outputLen; i++) {
    item = this.buffer[(this.first+i) % this.size];
    // serialize enum values as labels
    if (this.itemType instanceof eNUMERATION) item = this.itemType.labels[item-1];
    else if (cLASS.isDecimalType( this.itemType)) {
      //decimalPlaces:
      roundingFactor = Math.pow( 10, this.decimalPlaces);
      item = Math.round( item * roundingFactor) / roundingFactor;
    }
    str += item;
    if (i < outputLen-1) str += ", ";
  }
  return str + "]";
 };
 /**
 * @fileOverview  A library of DOM element creation methods and 
 * other DOM manipulation methods.
 * 
 * @author Gerd Wagner
 */

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
        uiEl.value = cLASS.convertPropValToString( mc, f, v);
      } else {
        v.forEach( function (el,i) {
          var ds = cLASS.convertPropValToString( mc, f, el);
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
    dom.fillSelectWithOptions( selEl, choiceItems);
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
        c.textContent = cLASS.convertPropValToStr( Class, p, obj[p]);
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
    dom.fillSelectWithOptions( selEl, choiceItems);
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

