/* jshint browser: true */
'use strict';

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

/**
 * Serialize a Date object as an ISO date string
 * @return  YYYY-MM-DD
 */
util.createIsoDateString = function (d) {
  return d.toISOString().substring(0,10);
};
/**
 * Return the next year value (e.g. if now is 2013 the function will return 2014)
 * @return {number}  the integer representing the next year value
 */
util.nextYear = function () {
  var date = new Date();
  return (date.getFullYear() + 1);
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
/**********************************************
 * Name conversions
 **********************************************/
// Example 1: EnglishTeacher => english_teachers
// Example 2: eXPERIMENTdEF => EXPERIMENT_DEFS
util.class2TableName = function (className) {
  var tableName="";
  if (className.charAt(0) === className.charAt(0).toUpperCase()) { // starts with upper case
    if (className.charAt( className.length-1) === "y") {
      tableName = util.camelToLowerCase( className.slice( 0, className.length-1)) + "ies";
    } else {
      tableName = util.camelToLowerCase( className) + "s";
    }
    return tableName;
  } else { // inverse camel case (starts with lower case)
    if (className.charAt( className.length-1) === "Y") {
      tableName = util.invCamelToUppercase( className.slice( 0, className.length-1)) + "IES";
    } else {
      tableName = util.invCamelToUppercase( className) + "S";
    }
    return tableName;
  }
};
// Example: books => Book
util.table2ClassName = function (tableName) {
  var result = util.lowercaseToCamel( tableName);
  result = result.charAt( 0).toUpperCase() + result.slice( 1);
  // if there is an 's' at the end, drop it
  if (result.charAt( result.length - 1) === 's') {
    result = result.slice( 0, result.length - 1);
  }
  /*
  if (!util.JsIdentifierPattern.test( result)) {
    throw Error("util.camelToLowerCase: the provided 'identifier' (" + result +
        ") is not a valid JS identifier!");
  }
  */
  return result;
};
// Example: dateOfBirth => date_of_birth
util.property2ColumnName = function (propertyName) {
  return util.camelToLowerCase( propertyName);
};
// Example: date_of_birth => dateOfBirth
util.column2PropertyName = function (columnName) {
  return util.lowercaseToCamel( columnName);
};
util.camelToLowerCase = function (identifier) {
  var result = '';
  // if the first is a A-Z char, replace it with its lower case equivalent
  identifier = identifier.charAt( 0).toLowerCase() + identifier.slice( 1);
  // replace upper case letter with '_' followed by the lower case equivalent leter
  result = identifier.replace( /([A-Z])/g, function( $1) {
    return "_" + $1.toLowerCase();
  });
  return result;
};
util.invCamelToUppercase = function (name) {
  var result = '';
  // if the first is a a-z, replace it with corresponding upper case
  name = name.charAt(0).toUpperCase() + name.slice( 1);
  // replace lower case letter with '_' followed by the corresponding upper case
  result = name.replace( /([a-z])/g, function( $1) {
    return "_" + $1.toUpperCase();
  });
  return result;
};
util.lowercaseToCamel = function (identifier) {
  var result = '';
  // replace upper case letter with '_' followed by the lower case equivalent letter
  result = identifier.replace( /(\_[a-z])/g, function ($1) {
    return $1.toUpperCase().replace( '_', '');
  });
  return result;
};

/** REGEX to check if valid JS identifier **/
util.JsIdentifierPattern = /^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/;

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
// create an alias for cloning records
util.cloneRecord = util.createRecordFromObject;

/**
 * Create a "deep" clone of a JS object at the level of own properties/slots
 * @param o  the object to be cloned
 * @return {object}
 */
util.cloneObject = function (o) {
  var clone = Array.isArray(o) ? [] : {};
  Object.keys(o).forEach( function (key) {
    clone[key] = (typeof o[key] === "object") ? util.cloneObject(o[key]) : o[key];
  });
  return clone;
};
/**
 * Copy all own (property and method) slots of a number of (untyped) objects
 * to a new (untyped) object.
 * @author Gerd Wagner
 * @return {object}  The merge result.
 *
util.mergeObjects = function () {
  var i=0, k=0, obj=null, mergeObj={}, keys=[], key="";
  for (i=0; i < arguments.length; i++) {
    obj = arguments[i];
    if (obj && typeof obj === "object") {
      keys = Object.keys( obj);
      for (k=0; k < keys.length; k++) {
        key = keys[k];
        mergeObj[key] = obj[key];
      }
    }
  }
  return mergeObj;
};
 */
/**
 * Swap two elements of an array
 * using the ES6 method Object.assign for creating a shallow clone of an object
 * @param a  the array
 * @param i  the first index
 * @param i  the 2nd index
 */
util.swapArrayElements = function (a,i,j) {
  var tempStore = (typeof a[i] === "object") ? Object.assign( {}, a[i]) : a[i];
  a[i] = (typeof a[j] === "object") ? Object.assign( {}, a[j]) : a[j];
  a[j] = tempStore;
};
/**
 * Shuffles array in place using the Fisher-Yates shuffle algorithm
 * @param {Array} a - An array of items to be shuffled
 */
util.shuffleArray = function (a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor( Math.random() * (i + 1) );
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
};
/**
 * Compute the Cartesian Product of an array of arrays
 * From https://stackoverflow.com/a/36234242/2795909
 * @param {Array} arr - An array of arrays of values to be combined
 */
util.cartesianProduct = function (arr) {
  return arr.reduce( function (a,b) {
    return a.map( function (x) {
      return b.map( function (y) {
        return x.concat(y);
      })
    }).reduce( function (a,b) {return a.concat(b)}, [])
  }, [[]])
};
/**
 * Load a script
 * @param {Array} arr - An array of arrays of values to be combined
 */
util.loadScript = function (pathAndFilename, basePath, callback, errCallback) {
  var loadEl = document.createElement('script');
  // if a full URL is provided, the base path is ignored
  if (pathAndFilename.indexOf("://") === -1)
    pathAndFilename = basePath + pathAndFilename;
  // if no callback(s) provided, define an empty function
  callback = typeof callback === "function" ? callback : function () {};
  errCallback = typeof errCallback === "function" ? errCallback : function () {};
  loadEl.src = pathAndFilename;
  loadEl.onload = function () {
    callback(loadEl);
  };
  loadEl.onerror = function (e) {
    console.log("Failed loading file '" + pathAndFilename + "'!");
    loadEl.remove();
    errCallback(e);
  };
  document.head.appendChild( loadEl);
};

/****************************************************************
 * Math Library
 ****************************************************************/
var math = {};
/**
 * Compute the sum of an array of numbers
 * @param {Array} data - An array of numbers
 */
math.sum = function (data) {
  function add( a, b) {return a + b;}
  return data.reduce( add, 0);
};
/**
 * Compute the arithmetic mean of an array of numbers
 * @param {Array} data - An array of numbers
 */
math.mean = function (data) {
  return math.sum( data) / data.length;
};
/**
 * Compute the standard deviation of an array of numbers
 * @param {Array} data - An array of numbers
 */
math.stdDev = function (data) {
  var m = math.mean( data);
  return Math.sqrt( data.reduce( function (acc, x) {
    return acc + Math.pow( x - m, 2);}, 0) / (data.length - 1));
};
/**
 * Compute the bootstrap confidence interval of an array of numbers. Based on
 *   Efron, B. (1985). Bootstrap confidence intervals for a class of parametric
 *   problems. Biometrika, 72(1), 45-58.
 * @param {Array} data - An array of numbers
 * @param {integer} samples - Number of bootstrap samples (default 10000)
 * @param {decimal} alpha - Confidence interval to estimate [0,1] (default 0.95)
 * @returns {Array} Lower and upper confidence interval
 */
math.bootstrapConfInt = function ( data, samples, alpha ) {
  var n = samples || 10000;
  var p = alpha || 0.95;
  var i, j, t;
  var mu = Array( n );
  var m = math.mean( data );
  var len = data.length;

  /* Calculate bootstrap samples */
  for ( i = 0; i < n; i += 1 ) {
    t = 0;
    for ( j = 0; j < len; j += 1 ) {
      t += data[ Math.floor( Math.random() * len ) ];
    }
    mu[ i ] = ( t / len ) - m;
  }

  /* Sort in ascending order */
  mu.sort( function ( a, b ) {
    return a - b;
  } );

  /* Return the lower and upper bootstrap confidence interval */
  return [
    m - mu[ Math.floor( Math.min( n - 1, n * ( 1 - ( (1 - p ) / 2 ) ) ) ) ],
    m - mu[ Math.floor( Math.max( 0, n * ( ( 1 - p ) / 2 ) ) ) ]
  ];
};
/**
 * Compute the lower confidence interval of an array of numbers.
 * @param {Array} data - An array of numbers
 * @returns {decimal} Lower confidence interval
 */
math.confIntLower = function ( data ) {
  return math.bootstrapConfInt( data )[ 0 ];
};
/**
 * Compute the upper confidence interval of an array of numbers.
 * @param {Array} data - An array of numbers
 * @returns {decimal} Upper confidence interval
 */
math.confIntUpper = function ( data ) {
  return math.bootstrapConfInt( data )[ 1 ];
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
 *   var Student = new cLASS({
 *     Name: "Student",
 *     supertypeName: "Person",
 *     properties: {
 *       "university": {range:"String", label:"University", max: 50, ...}
 *     },
 *     methods: {
 *     }
 *   });
 *   var stud1 = new Student({id: 1, university:"MIT"});
 *   // test if direct instance
 *   if (stud1.constructor.Name === "Student") ...
 *   // test if instance
 *   if (stud1 instanceof Student) ...
 *
 * Notice that it is assumed that a class has (or inherits) an "id" attribute
 * as its standard ID attribute.
 *
 *
 * @copyright Copyright 2015-2017 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
/* globals cLASS */
function cLASS (classSlots) {
  var propDefs = classSlots.properties || {},  // property declarations
      methods = classSlots.methods || {},
      supertypeName = classSlots.supertypeName,
      superclass=null, constr=null, missingRangeProp="",
      propsWithInitialValFunc = [];
  // check Class definition constraints
  if (supertypeName && !cLASS[supertypeName]) {
    throw "Specified supertype "+ supertypeName +" has not been defined!";
  }
  if (!Object.keys( propDefs).every( function (p) {
        if (!propDefs[p].range) missingRangeProp = p;
        return (propDefs[p].range !== undefined);
      }) ) {
    throw "No range defined for property "+ missingRangeProp +
        " of class "+ classSlots.Name +" !";
  }
  // define a constructor function for creating a new object
  constr = function (instanceSlots) {
    if (!instanceSlots) return;
    if (supertypeName) {
      // invoke supertype constructor
      cLASS[supertypeName].call( this, instanceSlots);
    }
    // assign own properties  TODO: use the checked value from validationResult
    Object.keys( propDefs).forEach( function (p) {
      var pDef = propDefs[p], range = pDef.range, Class=null,
          val, rangeTypes=[], i=0, validationResult=null;
      if (typeof instanceSlots === "object" && p in instanceSlots) {
        // property p has an initialization slot
        val = instanceSlots[p];
        validationResult = cLASS.check( p, pDef, val);
        if (!(validationResult instanceof NoConstraintViolation)) throw validationResult;
        // is range a cLASS collection datatype?
        if (typeof range === "object" && range.dataType !== undefined) {
          this[p] = Array.isArray( val) ? val.slice(0) : Object.assign({}, val);  // assign clone
        } else if (typeof range === "string" && typeof val !== "object" &&
            (cLASS[range] || range.includes("|"))) {
          // is range a class (or class disjunction)?
          if (range.includes("|")) {
            rangeTypes = range.split("|");
            for (i=0; i < rangeTypes.length; i++) {
              Class = cLASS[rangeTypes[i]];
              if (Class) {  // type disjunct is a cLASS
                if (Class.instances[String(val)])  {
                  // convert IdRef to object reference
                  this[p] = Class.instances[String(val)];
                  break;
                }
              }
            }
            if (!this[p]) this[p] = val;
          } else {  // range is a class
            // convert IdRef to object reference
            this[p] = cLASS[range].instances[String(val)] || val;
          }
        } else this[p] = val;
      } else if (pDef.initialValue !== undefined) {  // assign initial value
        if (typeof pDef.initialValue === "function") {
          propsWithInitialValFunc.push(p);
        } else this[p] = pDef.initialValue;
      } else if (p === "id" && range === "AutoNumber") {    // assign auto-ID
        if (typeof this.constructor.getAutoId === "function") {
          this[p] = this.constructor.getAutoId();
        } else if (this.constructor.idCounter !== undefined) {
          this[p] = ++this.constructor.idCounter;
        }
      } else if (!pDef.optional) {  // assign default values to mandatory properties
        if (pDef.maxCard > 1) {
          if (pDef.minCard === 0) {  // optional multi-valued property
            if (pDef.range in cLASS && !pDef.isOrdered) this[p] = {};  // map
            else this[p] = [];  // array list
          } else throw "A non-empty collection value for "+ p +" is required!";
        } else if (cLASS.isIntegerType(range) || cLASS.isDecimalType(range)) {
          this[p] = 0;
        } else if (range === "String") {
          this[p] = "";
        } else if (range === "Boolean") {
          this[p] = false;
        } else if (typeof range === "object") {
          if (["Array", "ArrayList"].includes(range.dataType)) {
            this[p] = [];
          } else if (range.dataType === "Map") {
            this[p] = {};
          }
        } else {
          throw "A value for "+ p +" is required when creating a(n) "+ classSlots.Name;
          console.log("instanceSlots = ", JSON.stringify(instanceSlots));
        }
      }
      // initialize historical properties
      if (pDef.historySize) {
        this.history = this.history || {};  // a map
        this.history[p] = pDef.decimalPlaces ?
            new cLASS.RingBuffer( pDef.range, pDef.historySize,
                {decimalPlaces: pDef.decimalPlaces}) :
            new cLASS.RingBuffer( pDef.range, pDef.historySize);
      }
    }, this);
    // call the functions for initial value expressions
    propsWithInitialValFunc.forEach( function (p) {
      this[p] = propDefs[p].initialValue.call(this);
    }, this);
    // assign remaining fields not defined as properties by the object's class
    if (typeof( instanceSlots) === "object") {
      Object.keys( instanceSlots).forEach( function (f) {
        if (!propDefs[f]) this[f] = instanceSlots[f];
      }, this);
    }
    // take care of cLASS-specific provisions (e.g., update a materialized view)
    if ("onConstruction" in methods) this.onConstruction();
    // is the class neither a complex DT nor abstract and does the object have an ID slot?
    if (!classSlots.isComplexDatatype && !classSlots.isAbstract && "id" in this) {
      // add new object to the population/extension of the class
      cLASS[classSlots.Name].instances[String(this.id)] = this;
    }
  };
  // assign class-level (meta-)properties
  constr.constructor = cLASS;
  constr.Name = classSlots.Name;
  if (classSlots.isComplexDatatype) constr.isComplexDatatype = true;
  if (classSlots.isAbstract) constr.isAbstract = true;
  if (classSlots.label) constr.label = classSlots.label;
  if (classSlots.shortLabel) constr.shortLabel = classSlots.shortLabel;
  if (classSlots.primaryKey) constr.primaryKey = classSlots.primaryKey;
  if (classSlots.tableName) constr.tableName = classSlots.tableName;
  if (supertypeName) {
    constr.supertypeName = supertypeName;
    superclass = cLASS[supertypeName];
    // apply classical inheritance pattern for methods
    constr.prototype = Object.create( superclass.prototype);
    constr.prototype.constructor = constr;
    // merge superclass property declarations with own property declarations
    constr.properties = Object.create( superclass.properties);
   //  assign own property declarations, possibly overriding super-props																		 
    Object.keys( propDefs).forEach( function (p) {
      constr.properties[p] = propDefs[p];
    });
  } else {  // if class is root class
    constr.properties = propDefs;
    /***************************************************/
    constr.prototype.set = function ( prop, val) {
    /***************************************************/
      // this = object
      var validationResult = cLASS.check( prop, this.constructor.properties[prop], val);
      if (validationResult instanceof NoConstraintViolation) {
        this[prop] = validationResult.checkedValue;
      } else {
        throw validationResult;
      }
    };
    /***************************************************/
    // overwrite and improve the standard toString method
    constr.prototype.toString = function () {
    /***************************************************/
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
    /***************************************************/
    constr.prototype.toRecord = function () {
    /***************************************************/
      var obj = this, rec={}, propDecl={}, valuesToConvert=[], range, val;
      Object.keys( obj).forEach( function (p) {
        if (obj[p] !== undefined) {
          val = obj[p];
          propDecl = obj.constructor.properties[p];
          range = propDecl.range;
          if (propDecl.maxCard && propDecl.maxCard > 1) {
            if (range.constructor && range.constructor === cLASS) { // object reference(s)
              if (Array.isArray( val)) {
                valuesToConvert = val.slice(0);  // clone;
              } else {  // val is a map from ID refs to obj refs
                valuesToConvert = Object.values( val);
              }
            } else if (Array.isArray( val)) {
              valuesToConvert = val.slice(0);  // clone;
            } else console.log("Invalid non-array collection in toRecord!");
          } else {  // maxCard=1
            valuesToConvert = [val];
          }
          valuesToConvert.forEach( function (v,i) {
            // alternatively: enum literals as labels
            // if (range instanceof eNUMERATION) rec[p] = range.labels[val-1];
            if (["number","string","boolean"].includes( typeof(v)) || !v) {
              valuesToConvert[i] = String( v);
            } else if (range === "Date") {
              valuesToConvert[i] = util.createIsoDateString( v);
            } else if (range.constructor && range.constructor === cLASS) { // object reference(s)
              valuesToConvert[i] = v.id;
            } else if (Array.isArray( v)) {  // JSON-compatible array
              valuesToConvert[i] = v.slice(0);  // clone
            } else valuesToConvert[i] = JSON.stringify( v);
          });
          if (!propDecl.maxCard || propDecl.maxCard <= 1) {
            rec[p] = valuesToConvert[0];
          } else {
            rec[p] = valuesToConvert;
          }
        }
      });
      return rec;
    };
    /***************************************************/
    // Convert property value to (form field) string.
    constr.prototype.getValueAsString = function ( prop) {
    /***************************************************/
      // make sure the eNUMERATION meta-class object can be checked if available
      var eNUMERATION = typeof eNUMERATION === "undefined" ? undefined : eNUMERATION;
      var propDecl = this.constructor.properties[prop],
          range = propDecl.range, val = this[prop];
      var valuesToConvert=[], displayStr="", k=0,
          listSep = ", ";
      if (val === undefined || val === null) return "";
      if (propDecl.maxCard && propDecl.maxCard > 1) {
        if (Array.isArray( val)) {
          valuesToConvert = val.length>0 ? val.slice(0) : [];  // clone;
        } else if (typeof val === "object") {
          valuesToConvert = Object.keys( val);
        } else console.log("The value of a multi-valued " +
            "property like "+ prop +" must be an array or a map!");
      } else valuesToConvert = [val];
      valuesToConvert.forEach( function (v,i) {
        if (typeof propDecl.val2str === "function") {
          valuesToConvert[i] = propDecl.val2str( v);
        } else if (eNUMERATION && range instanceof eNUMERATION) {
          valuesToConvert[i] = range.labels[v-1];
        } else if (["number","string","boolean"].includes( typeof v) || !v) {
          valuesToConvert[i] = String( v);
        } else if (range === "Date") {
          valuesToConvert[i] = util.createIsoDateString( v);
        } else if (Array.isArray( v)) {  // JSON-compatible array
          valuesToConvert[i] = v.slice(0);  // clone
        } else if (typeof range === "string" && cLASS[range]) {
          if (typeof v === "object" && v.id !== undefined) {
            valuesToConvert[i] = v.id;
          } else {
            valuesToConvert[i] = v.toString();
            propDecl.stringified = true;
            console.log("Property "+ this.constructor.Name +"::"+ prop +" has a cLASS object value without an 'id' slot!");
          }
        } else {
          valuesToConvert[i] = JSON.stringify( v);
          propDecl.stringified = true;
        }
      }, this);
      if (valuesToConvert.length === 0) displayStr = "[]";
      else {
        displayStr = valuesToConvert[0];
        if (propDecl.maxCard && propDecl.maxCard > 1) {
          displayStr = "[" + displayStr;
          for (k=1; k < valuesToConvert.length; k++) {
            displayStr += listSep + valuesToConvert[k];
          }
          displayStr = displayStr + "]";
        }
      }
      return displayStr;
    };
    /***************************************************/

    /***************************************************
     * A class-level de-serialization method
     ***************************************************/
    constr.createObjectFromRecord = function (record) {
      var obj={};
      try {
        obj = new constr( record);
      } catch (e) {
        console.log( e.constructor.name + " while deserializing a "+
            constr.Name +" record: " + e.message);
        obj = null;
      }
      return obj;
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
  // return the constructor as the object constructed with new cLASS
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
  return ["Integer","PositiveInteger","AutoNumber","NonNegativeInteger"].includes(T) ||
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
   return ["Number","Decimal","Percent","ClosedUnitInterval","OpenUnitInterval"].includes(T);
 };
 /**
  * Constants
  */
 cLASS.patterns = {
   ID: /^([a-zA-Z0-9][a-zA-Z0-9_\-]+[a-zA-Z0-9])$/,
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
  * @param optParams.checkRefInt  Check referential integrity
  * @return {ConstraintViolation}  The constraint violation object.
  */
 cLASS.check = function (fld, decl, val, optParams) {
   var constrVio=null, valuesToCheck=[],
       msg = decl.patternMessage || "",
       minCard = decl.minCard!=="umdefined" ? decl.minCard : decl.optional?0:1,  // by default, a property is mandatory
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
   } else {  // multi-valued properties can be array-valued or map-valued
     if (Array.isArray( val) ) {
       valuesToCheck = val;
     } else if (typeof range === "string" && cLASS[range]) {
       if (!decl.isOrdered) {
         valuesToCheck = Object.keys( val).map( function (id) {
           return val[id];
         });
       } else {
         return new RangeConstraintViolation("Values for the ordered property "+ fld +
             " must be arrays, and not maps!");
       }
     } else {
       return new RangeConstraintViolation("Values for "+ fld +
           " must be arrays or maps of IDs to cLASS instances!");
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
     case "Identifier":  // add regexp test
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || v.trim() === "" || !cLASS.patterns.ID.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid identifiers/names!");
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
     case "AutoNumber":
       if (valuesToCheck.length === 1) {
         if (!Number.isInteger( valuesToCheck[0]) || valuesToCheck[0] < 1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a positive integer!");
         }
       } else {
         constrVio = new RangeConstraintViolation("The value of "+ fld +
             " must not be a collection like "+ valuesToCheck);
       }
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
             /\d{4}-(0\d|1[0-2])-([0-2]\d|3[0-1])/.test(v) && !isNaN( Date.parse(v))) {
           valuesToCheck[i] = new Date(v);
         } else if (!(v instanceof Date)) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be either a Date value or an ISO date string. "+
               v +" is not admissible!");
         }
       });
       break;
     case "DateTime":
       valuesToCheck.forEach( function (v,i) {
         if (typeof v === "string" && !isNaN( Date.parse(v))) {
           valuesToCheck[i] = new Date(v);
         } else if (!(v instanceof Date)) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be either a Date value or an ISO date-time string. "+
               v +" is not admissible!");
         }
       });
       break;
     default:
       if (range instanceof eNUMERATION || typeof range === "string" && eNUMERATION[range]) {
         if (typeof range === "string") range = eNUMERATION[range];
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
       } else if (typeof range === "string" && cLASS[range]) {
         valuesToCheck.forEach( function (v, i) {
           var recFldNames=[], propDefs={};
           if (!cLASS[range].isComplexDatatype && !(v instanceof cLASS[range])) {
             // convert IdRef to object reference
             if (cLASS[range].instances[String(v)]) {
               v = valuesToCheck[i] = cLASS[range].instances[String(v)];
             } else if (optParams && optParams.checkRefInt) {
               constrVio = new ReferentialIntegrityConstraintViolation("The value " + v +
                   " of property '"+ fld +"' is not an ID of any " + range + " object!");
             }
           } else if (cLASS[range].isComplexDatatype && typeof v === "object") {
             v = Object.assign({}, v);  // use a clone
             // v is a record that must comply with the complex datatype
             recFldNames = Object.keys(v);
             propDefs = cLASS[range].properties;
             // test if all mandatory properties occur in v and if all fields of v are properties
             if (Object.keys( propDefs).every( function (p) {return !!propDefs[p].optional || p in v;}) &&
                 recFldNames.every( function (fld) {return !!propDefs[fld];})) {
               recFldNames.forEach( function (p) {
                 var validationResult = cLASS.check( p, propDefs[p], v[p]);
                 if (validationResult instanceof NoConstraintViolation) {
                   v[p] = validationResult.checkedValue;
                 } else {
                   throw validationResult;
                 }
               })
             } else {
               constrVio = new RangeConstraintViolation("The value of " + fld +
                   " must be an instance of "+ range +" or a compatible record!"+
                   JSON.stringify(v) + " is not admissible!");
             }
/* DROP
           } else {  // v may be a (numeric or string) ID ref
             if (typeof v === "string") {
               if (!isNaN( parseInt(v))) v = valuesToCheck[i] = parseInt(v);
             } else if (!Number.isInteger(v)) {
               constrVio = new RangeConstraintViolation("The value (" + JSON.stringify(v) +
                   ") of property '" +fld + "' is neither an integer nor a string!");
             }
*/
           }
         });
       } else if (typeof range === "string" && range.includes("|")) {
         valuesToCheck.forEach( function (v, i) {
           var rangeTypes=[];
           rangeTypes = range.split("|");
           if (typeof v === "object") {
             if (!rangeTypes.some( function (rc) {
               return v instanceof cLASS[rc];
             })) {
               constrVio = ReferentialIntegrityConstraintViolation("The object " + JSON.stringify(v) +
                   " is not an instance of any class from " + range + "!");
             } else {
               v = valuesToCheck[i] = v.id;  // convert to IdRef
             }
           } else if (Number.isInteger(v)) {
             if (optParams && optParams.checkRefInt) {
               if (!cLASS[range].instances[String(v)]) {
                 constrVio = new ReferentialIntegrityConstraintViolation("The value " + v +
                     " of property '"+ fld +"' is not an ID of any " + range + " object!");
               }
             }
           } else if (typeof v === "string") {
             if (!isNaN( parseInt(v))) v = valuesToCheck[i] = parseInt(v);
           } else {
             constrVio = new RangeConstraintViolation("The value (" + v + ") of property '" +
                 fld + "' is neither an integer nor a string!");
           }
         });
       } else if (typeof range === "object" && range.dataType !== undefined) {
         // the range is a (collection) datatype declaration record
         valuesToCheck.forEach( function (v) {
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
             for (i = 0; i < v.length; i++) {
               if (!cLASS.isOfType(v[i], range.itemType)) {
                 constrVio = new RangeConstraintViolation("The items of " + fld +
                     " must be of type " + range.itemType + "! " + JSON.stringify(v) +
                     " is not admissible!");
               }
             }
             break;
           case "ArrayList":
             if (!Array.isArray(v)) {
               constrVio = new RangeConstraintViolation("The value of " + fld +
                   " must be an array! " + JSON.stringify(v) + " is not admissible!");
               break;
             }
             for (i = 0; i < v.length; i++) {
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
   if (maxCard > 1) { // (a multi-valued property can be array- or map-valued)
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
   // return deserialized value available in validationResult.checkedValue
   return new NoConstraintViolation( maxCard === 1 ? valuesToCheck[0] : valuesToCheck);
 };
 /**
  * Map range datatype to JS datatype.
  * @method
  * @author Gerd Wagner
  * @return {string}
  */
 cLASS.range2JsDataType = function ( range) {
   var jsDataType="";
   switch (range) {
     case "String":
     case "NonEmptyString":
     case "Email":
     case "URL":
     case "PhoneNumber":
     case "Date":
       jsDataType = "string";
       break;
     case "Integer":
     case "NonNegativeInteger":
     case "PositiveInteger":
     case "Number":
     case "AutoNumber":
     case "Decimal":
     case "Percent":
     case "ClosedUnitInterval":
     case "OpenUnitInterval":
       jsDataType = "number";
       break;
     case "Boolean":
       jsDataType = "boolean";
       break;
     default:
       if (range instanceof eNUMERATION) {
         jsDataType = "number";
       } else if (typeof range === "string" && cLASS[range]) {
         jsDataType = "string";  // for the standard ID (TODO: can also be "number")
       } else if (typeof range === "object") {  // a.g. Array or Object
         jsDataType = "object";
       }
   }
   return jsDataType;
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
      outputLen = n ? Math.min( n, N) : N;
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
// Simple Moving Average (SMA)
 cLASS.RingBuffer.prototype.getSMA = function (n) {
   var N = this.nmrOfItems(), i=0, val=0, sum=0;
   if (n) N = Math.min( n, N);
   for (i=0; i < N; i++) {
     val = this.buffer[(this.first+i) % this.size];
     sum += val;
   }
   return sum / N;
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
      if (slots.title) el.title = slots.title;
      if (slots.content) el.innerHTML = slots.content;
      if (slots.borderColor) el.style.borderColor = slots.borderColor;
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
    if (slots.value !== undefined) el.value = slots.value;
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
    if (!slots.type) el.type = "button";
    else el.type = slots.type;
    if (slots.id) el.id = slots.id;
    if (slots.name) el.name = slots.name;
    if (slots.classValues) el.className = slots.classValues;
    if (slots.title) el.title = slots.title;
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
    else inpEl.type = "text";
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
  createLabeledChoiceControl: function (t,n,v,lblTxt) {
    var ctrlEl = document.createElement("input"),
        lblEl = document.createElement("label");
    ctrlEl.type = t;
    ctrlEl.name = n;
    ctrlEl.value = v;
    lblEl.appendChild( ctrlEl);
    lblEl.appendChild( !lblTxt.includes("</") ?
        document.createTextNode( lblTxt) :
        dom.createElement("div", {content: lblTxt})
    );
    return lblEl;
  },
  /**
  * Create a labeled select element
  *
  * @param {{labelText: string, name: string?, index: integer?}}
  *     slots  The view definition slots.
  * @return {object}
  */
  createLabeledSelect: function (slots) {
    var selEl = document.createElement("select"),
        lblEl = document.createElement("label");
    if (slots.name) selEl.name = slots.name;
    if (slots.index !== undefined) selEl.index = slots.index;
    lblEl.textContent = slots.labelText;
    lblEl.appendChild( selEl);
    return lblEl;
  },
  /**
  * Create option elements from an array list of option text strings
  * and insert them into a selection list element
  *
  * @param {object} selEl  A select(ion list) element
  * @param {object} options  An array list of records or text items
  * @param {object} optPar  A record of optional parameters
  */
  fillSelectWithOptionsFromArrayList: function (selEl, options, optPar) {
    selEl.innerHTML = "";
    if (!selEl.multiple) {
      selEl.add( dom.createOption({text:" --- ", value:""}), null);
    }
    options.forEach( function (opt,i) {
      var optEl = null,
          id = optPar && optPar.primaryKey ? opt[optPar.primaryKey] : opt.id;
      if (typeof opt === "string") optEl = dom.createOption({text: opt, value: i});
      else optEl = dom.createOption({
        text: optPar && optPar.displayProp ? opt[optPar.displayProp] : id,
        value: id
      });
      if (selEl.multiple && optPar && optPar.selection &&
          optPar.selection.includes(i+1)) {
        // flag the option element with this value as selected
        optEl.selected = true;
      }
      selEl.add( optEl, null);
    });
  },
   /**
    * Create option elements from a map of ID values to entity objects/records
    * and insert them into a selection list element
    *
    * @param {object} selEl  A select(ion list) element
    * @param {object} entityMap  A map of entity IDs to entity records
    * @param {object} optPar  A record of optional parameters
    */
   fillSelectWithOptionsFromEntityMap: function (selEl, entityMap, optPar) {
     var i=0, keys=[], obj={}, optEl=null, txt="";
     selEl.innerHTML = "";
     if (!optPar || !optPar.noVoidOption) {
       selEl.add( dom.createOption({value:"", text:"---"}), null);
     }
     keys = Object.keys( entityMap);
     for (i=0; i < keys.length; i++) {
       obj = entityMap[keys[i]];
       if (optPar && optPar.displayProp) txt = obj[optPar.displayProp];
       else txt = obj.id;
       optEl = dom.createOption({ value: obj.id, text: txt });
       // if invoked with a selection argument, flag the selected options
       if (selEl.multiple && optPar && optPar.selection &&
           optPar.selection[keys[i]]) {
         // flag the option element with this value as selected
         optEl.selected = true;
       }
       selEl.add( optEl, null);
     }
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
 /* Polyfill for ChildNode.remove()
    from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
 */
 (function (arr) {
   arr.forEach(function (item) {
     if (item.hasOwnProperty('remove')) {
       return;
     }
     Object.defineProperty(item, 'remove', {
       configurable: true,
       enumerable: true,
       writable: true,
       value: function remove() {
         if (this.parentNode !== null)
           this.parentNode.removeChild(this);
       }
     });
   });
 })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/**
 * @fileOverview  This file contains the definition of the class ObjectView.
 * @author Gerd Wagner
 * @copyright Copyright 2015 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
/**
 * Class for creating (and rendering) view models based on "model objects". A view model
 * is a (logical) UI model consisting of (input and output) fields, which are typically
 * based on model properties, and user action types, defined as named JS methods that can
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
 * In addition to the field definition map "fields", there is a field value map
 * "fieldValues", which has a top-down databinding to corresponding model object
 * properties (via implicit setters). The underlying model object is associated
 * with a view field via the record field "moName" of the corresponding "fields"
 * definition record and the view's map "modelObjects".
 *
 * A view (or 'view model') is a logical representation of the interaction
 * elements of a UI, which typically correspond to properties and methods
 * of a model object. A view consists of (input/output) fields and of user
 * action types, such as "run", "saveSimulationState", etc.
 *
 * A view field has an I/O mode of either "I/O" (input/output) or "O". When a view
 * is rendered, its fields are rendered as HTML UI elements in the following way:
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
 * A view's UI with its view-field-based input/output elements and widgets
 * is rendered by invoking the ender method on the view. UI fields/widgets are
 * subsequently synchronized with view field values and model object property values
 * by means of a top-down data binding mechanism: value changes of UI fields are
 * propagated to corresponding view fields (typically in a change event listener)
 * and then to model object properties in the setter of the fields.<fld>.value property.
 * TODO: implement this two-step data binding mechanism
 *
 * A user action type is a named JS function where the name indicates the
 * intended meaning of the user action (such as "saveSimulationState"). It
 * binds a UI event type, such as clicking on a button, to a view method as
 * its "event handler".

 * TODO: bottom-up data binding from model object properties to view fields:
 * When a view field is bound to a model object property, its value is updated
 * whenever the corresponding property value of the model object is updated.
 *
 * TODO: Support multiple model objects when using field definitions instead of names
 *
 * A view can be rendered in two different ways:
 * - (normally) By creating all required DOM elements (form elements with controls), and
 *    appending them to the child elements of the body element, if the document
 *    does not contain suitable form elements.
 * - By accessing existing form elements and controls, just setting/updating their
 *    contents (and dynamic parts)
 *
 * Notice that slots.fields is an array of property names or view field definitions
 * while this.fields is a map of view field definitions.
 *
 * Example invocation:

 // create a view based on a single model object
 var view = new oBJECTvIEW({
      modelObject: sim.scenario,
	  // create a horizontal field group
      fields: [["simulationEndTime", "stepDuration", "visualize", "createLog"]],
      userActions: {
        "run": function () {...}
	  }
  })
 // render the view and store its databinding
 view.dataBinding = view.render();

 // create a view based on multiple model objects
 var view = new oBJECTvIEW({
     modelObjects: {"scenario":sim.scenario, "model":sim.model},
	   // create a horizontal field group
     fields: [["scenario.simulationEndTime", "model.timeUnit", "scenario.stepDuration", ...]],
     userActions: {
        "run": function () {...}
	   }
 })
 +
 * @constructor
 * @this {oBJECTvIEW}
 * @param {{modelObject: Object, fields: Array, methods: Map?}}
 *        slots  The view definition slots
 */
/* globals oBJECTvIEW */
var oBJECTvIEW = function (slots) {
  var properties={},
      multipleModelObjects = slots.modelObjects && slots.modelObjects instanceof Object;
  // check oBJECTvIEW definition constraints
  if (!(slots.modelObject && (slots.modelObject instanceof Object)) &&
      !multipleModelObjects) {
    throw ViewConstraintViolation("Creating an object view requires a (set of) model object(s)!");
  }
  if (multipleModelObjects) {
    if (!slots.fields) {
      throw ViewConstraintViolation(
          "A view def with multiple model objects requires field definitions!");
    }
    if (!slots.fields.every( function (fGrp) {
        // turn single field into singleton field group
        if (!Array.isArray(fGrp)) fGrp = [fGrp];
        return fGrp.every( function (f) {
            return typeof f === "string" && f.indexOf(".") > -1;});
        })) {
      throw ViewConstraintViolation("Field definitions based on multiple model objects " +
          "need to be two-part strings with a dot as separator!");
    }
  }
  // check if i18n translation function is defined
  if (typeof i18n !== "object" || !i18n.t) {
    // define dummy function
    i18n = {t: function (txt) {return txt;}}
  }
  if (multipleModelObjects) {
    this.modelObjects = slots.modelObjects;
  } else {
    this.modelObject = slots.modelObject;
    // store the modelObject also in the modelObjects map
    this.modelObjects = {};
    this.modelObjects[slots.modelObject.objectName] = slots.modelObject;
  }
  this.heading = slots.heading;
  // Process the "slots.fields" array (or the properties map) into a "fields" map
  // of view field declarations and a field order definition array "fieldOrder"
  this.fields = {};
  this.fieldValues = {};
  this.fieldOrder = [];
  if (slots.suppressNoValueFields === undefined) this.suppressNoValueFields = true;  // default
  else this.suppressNoValueFields = slots.suppressNoValueFields;
  if (slots.fields) {
    slots.fields.forEach( function (el) {
      var j=0, fld, fldGrp=[], fldOrdEl=[], moName="", mo=null, pos=0;
      // turn single field into singleton field group
      if (!Array.isArray( el)) fldGrp = [el];
      else fldGrp = el;        // field group
      for (j=0; j < fldGrp.length; j++) {
        fld = fldGrp[j];
        if (typeof fld === "string") {  // name of property-induced field
          if (multipleModelObjects) {  // two-part field name
            pos = fld.indexOf(".");
            moName = fld.substring( 0, pos);
            mo = this.modelObjects[moName];
            fld = fld.substring( pos+1);  // proper field name
          } else {
            mo = this.modelObject;
          }
          properties = mo.properties;
          if (!properties[fld]) {
            throw new ViewConstraintViolation(
                "View field "+ fld +" does not correspond to a model property!");
          }
          if (this.suppressNoValueFields && mo[fld] === undefined) continue;
          // else
          this.fields[fld] = util.cloneRecord( properties[fld]);
          // in case range is a JS constructor function or object
          if (typeof properties[fld].range !== "string") {
            if (cLASS[properties[fld].range.Name]) {
              this.fields[fld].range = properties[fld].range.Name;
            } else {
              this.fields[fld].range = properties[fld].range;
            }
          }
          this.fields[fld].moName = mo.objectName;
          this.fields[fld].inputOutputMode = "I/O";
          this.fields[fld].label = i18n.t( this.fields[fld].label);
          if (this.fields[fld].hint) {
            this.fields[fld].hint = i18n.t( this.fields[fld].hint);
          }
          fldOrdEl.push( fld);
        } else if (typeof fld === "object") {  // field definition
          properties = this.modelObject.properties;
          this.fields[fld.name] = {
            moName: this.modelObject.objectName,
            label: i18n.t( fld.label || properties[fld.name].label),
            hint: i18n.t( fld.hint || properties[fld.name].hint),
            range: fld.range || properties[fld.name].range,
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
  } else {  // no view field definitions provided in constructor slots
    properties = this.modelObject.properties;
    // create view fields from labeled model properties
    Object.keys( properties).forEach( function (prop) {
      if (properties[prop].label &&
          (!this.suppressNoValueFields ||
           this.modelObject[prop] !== undefined ||
           properties[prop].dependsOn  !== undefined)) {
        this.fieldOrder.push( prop);
        this.fields[prop] = util.cloneRecord( properties[prop]);
        this.fields[prop].inputOutputMode = "I/O";
        this.fields[prop].label = i18n.t( this.fields[prop].label);
        if (this.fields[prop].hint) {
          this.fields[prop].hint = i18n.t( this.fields[prop].hint);
        }
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
        mo = this.modelObjects[this.fields[f].moName],
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
        uiEl.value = cLASS.getValueAsString( mo, f, v);
      } else {
        v.forEach( function (el,i) {
          var ds = cLASS.getValueAsString( mo, f, el);
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
oBJECTvIEW.maxCardButtonGroup = 7;
oBJECTvIEW.prototype.render = function (objViewParentEl) {
  var fields = this.fields,  // fields map
      fieldOrder = this.fieldOrder,  // field order array
      mObject = this.modelObject,  // model object
      mObjects = this.modelObjects,  // model objects
      // a map for storing the bindings of UI elems to view fields
      dataBinding = {},
      userActions = this.userActions,
      validateOnInput = true,
      uiElemType = "form", parentEl=null,
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
        fDef = fields[fld];   // field definition
    if (fDef.inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "text";
      if (validateOnInput) {
        fldEl.addEventListener("input", function () {
          fldEl.setCustomValidity( cLASS.check( fld, fDef, fldEl.value).message);
        });
      } else {
        fldEl.addEventListener("blur", function () {
          fldEl.setCustomValidity( cLASS.check( fld, fDef, fldEl.value).message);
        });
      }
      fldEl.addEventListener("change", function () {
        var v = fldEl.value;
        if (!validateOnInput) {
          fldEl.setCustomValidity( cLASS.check( fld, fDef, v).message);
        }
        // UI element to model property data binding (top-down)
        if (fldEl.validity.valid) mObjects[fDef.moName][fld] = v;
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    // render text input element
    fldEl.name = fld;
    fldEl.value = typeof mObject[fld] === "object" ? JSON.stringify( mObject[fld]) : mObject[fld] || "";
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
        fDef = fields[fld];   // field declaration
    if (fields[fld].inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "checkbox";
      fldEl.addEventListener("change", function () {
        mObjects[fDef.moName][fld] = fldEl.checked;  // UI element to model property data binding
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    fldEl.name = fld;
    fldEl.checked = mObject[fld];
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
            mo = mObjects[fields[fld].moName],
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
      var mo = mObjects[fields[fld].moName];
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
      var fDef = fields[fld],
          range = fDef.range,
          isEnum = range instanceof eNUMERATION,
          isArr = Array.isArray( range);
      // convert cLASS Name to cLASS object
      if (typeof range === "string" && cLASS[range]) range = cLASS[range];
      // retrieve model object for views based on multiple model objects
      if (mObjects) mObject = mObjects[fDef.moName];
      if (isEnum || isArr) {  // (ad-hoc) enumeration
        if (isEnum && range.MAX <= maxELforButton ||
            isArr && range.length <= maxELforButton) {
          containerEl = createChoiceButtonGroup( fld);
          if (!containerEl.className) containerEl.className = "choice";
        } else {
          if (!containerEl.className) containerEl.className = "select";
          containerEl.appendChild( createSelectionList( fld));
        }
      } else if (range && range.constructor === cLASS && range.isComplexDatatype) {
        if (fDef.maxCard && fDef.maxCard > 1) {
          if (!containerEl.className) containerEl.className = "RecordTableWidget";
          containerEl.appendChild( oBJECTvIEW.createRecordTableWidget(
              {type: range, records: mObject[fld], tableTitle: fDef.label}));
        }
      } else if (range === "Boolean") {
        if (!containerEl.className) containerEl.className = "yes-no-field";
        containerEl.appendChild( createLabeledYesNoField( fld));
      } else {  // string/numeric property field
        if (!containerEl.className) containerEl.className = "I-O-field";
        containerEl.appendChild( createLabeledTextField( fld));
      }
      if (fDef.dependsOn) {
        if (mObject[fDef.dependsOn]) containerEl.style.display = "block";
        else containerEl.style.display = "none";
        dataBinding[fDef.dependsOn].addEventListener("change", function () {
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
      var renderActBtn = typeof userActions[usrAct].showCondition !== "function" ||
          userActions[usrAct].showCondition();
      if (renderActBtn) {
        containerEl.appendChild( dom.createButton({
          name: usrAct,
          label: userActions[usrAct].label || util.capitalizeFirstChar( usrAct),
          title: userActions[usrAct].hint,
          handler: userActions[usrAct]
        }));
        parentEl.appendChild( containerEl);
      }
    });
  }
  /* ==================================================================== */
  /* MAIN CODE of render                                                  */
  /* ==================================================================== */
  // check if objView is descendant of a "form" element
  parentEl = objViewParentEl;
  while (parentEl && parentEl.tagName !== "BODY") {
    if (parentEl.tagName === "FORM") {
      uiElemType = "div";
      break;
    } else {
      parentEl = parentEl.parentElement;
    }
  }
  uiContainerEl = dom.createElement(
    uiElemType,
    {id: this.modelObject ?
         this.modelObject.objectName : Object.keys( this.modelObjects)[0],
     classValues:"oBJECTvIEW"}
   );
  if (this.heading) {
    uiContainerEl.appendChild( dom.createElement("h2", {content:this.heading}));
  }
  // store the object view's DOM element
  this.domElem = uiContainerEl;
  if (!objViewParentEl) objViewParentEl = document.querySelector("#uiContainerEl");
  if (!objViewParentEl) {
    objViewParentEl = document.body;
    footerEl = document.querySelector("html>body>footer");
    if (footerEl) {
      document.body.insertBefore( uiContainerEl, footerEl);
    } else {
      document.body.appendChild( uiContainerEl);
    }
  } else objViewParentEl.appendChild( uiContainerEl);
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
 * Set up a tabular UI for defining/editing entity records of a given
 * entity type or data records of a given complex datatype
 * @author Gerd Wagner
 * @method
 * @param slots.type  a cLASS
 * @param slots.records?  a collection (array list or map) of records
 * @return {object}  the created DOM element object
 */
oBJECTvIEW.createRecordTableWidget = function (slots) {
  var tableEl = dom.createElement("table", {classValues: "RecTbl"});
  var headerRowEl=null, cell=null, rowIdx=0, obj=null, rowEl=null, N=0,
      rowObjects=[], colProperties=[],  colHeadings=[], colTypes=[],
      maxNmrOfRows = slots.maxNmrOfRows || 13,  // default is 13
      tBody = document.createElement("tBody"),
      Class=null, propDefs=null, tableTitle = "",
      keys=[], records=null, nmrOfRecords=0, p="";
  if (!slots.type) {
    throw Error("No type provided when calling 'createRecordTableWidget'!")
  }
  // convert cLASS name to cLASS object reference
  if (typeof slots.type === "string" && cLASS[slots.type]) {
    Class = cLASS[slots.type];
  } else if (slots.type.constructor === cLASS) {
    Class = slots.type;
  } else {
    throw Error("No cLASS type provided when calling 'createRecordTableWidget'!")
  }
  propDefs = Class.properties;
  tableEl.appendChild( tBody);
  tableTitle = i18n.t( slots.tableTitle || Class.label || Class.Name);
  if (!Class.isComplexDatatype) {
    if (slots.editableProperties) colProperties = slots.editableProperties;
    records = slots.records || Class.instances;
    keys = Object.keys( records);
    nmrOfRecords = keys.length;
  } else if (Array.isArray( slots.records)) {
    records = slots.records || [];
    nmrOfRecords = records.length;
  } else if (typeof slots.records === "object") { // a map
    records = slots.records || {};
    keys = Object.keys( records);
    nmrOfRecords = keys.length;
  }
  if (propDefs.id) {
    if (propDefs.name) colHeadings[0] = "ID/Name";
    else colHeadings[0] = "ID";
  } else if (propDefs.name) {
    colHeadings[0] = "Name";
  }
  // loop over all property definitions (including inherited ones)
  for (p in propDefs) {
    if (p !== "id" && p !== "name" && propDefs[p].label) {
      colProperties.push( p);
      colHeadings.push( i18n.t( propDefs[p].label));
      colTypes.push( propDefs[p].range);
    }
  }
  // store properties displayed in table  TODO: currently not used...
  tableEl.setAttribute("data-properties", colProperties.join(" "));
  // create table heading
  tableEl.appendChild( document.createElement("thead"));
  // create row for table name
  headerRowEl = tableEl.tHead.insertRow();
  cell = headerRowEl.insertCell();
  cell.textContent = tableTitle;
  cell.colSpan = colHeadings.length;
  // create row for column names
  headerRowEl = tableEl.tHead.insertRow();
  // create table column headings
  colHeadings.forEach( function (cH) {
    var c = headerRowEl.insertCell();
    c.textContent = cH;
  });
  // create table rows
  N = Math.min( nmrOfRecords, maxNmrOfRows);
  for (rowIdx=0; rowIdx < N; rowIdx++) {
    obj = keys.length>0 ? records[keys[rowIdx]] : records[rowIdx];
    rowEl = tBody.insertRow();
    // create object row
    rowObjects[rowIdx] = obj;
    if (obj.id) {
      rowEl.insertCell().textContent = obj.name ? obj.id +" / "+ obj.name : obj.id;
    } else if (obj.name) {
      rowEl.insertCell().textContent = obj.name;
    }
    // create property value cells
    colProperties.forEach( function (p) {
      var c=null;
      c = rowEl.insertCell();
      //c.textContent = cLASS.convertPropValToStr( Class, p, obj[p]);
      c.textContent = obj.getValueAsString( p);
      // save value for being able to restore it
      c.setAttribute("data-oldVal", c.textContent);
      if (!propDefs || !propDefs[p].stringified) {
        c.setAttribute("contenteditable","true");
        c.title = "Click to edit!";
      }
      c.addEventListener("blur", function (e) {
        var tdEl = e.target,
            val = tdEl.textContent,
            colNo = tdEl.cellIndex - 1, // skip first column (name/ID)
            rowNo = tdEl.parentElement.rowIndex - 2,  // rowIndex includes 2 tHead rows
            prop = colProperties[colNo],
            constrVio = cLASS.check( prop, propDefs[prop], val);
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
    });
  }
  // create an overflow indication row
  if (nmrOfRecords > maxNmrOfRows) {
    rowEl = tBody.insertRow();
    if (obj.id) rowEl.insertCell().textContent = "...";
    Object.keys( propDefs).forEach( function (p) {
      var c=null;
      if (colProperties.includes( p)) {
        c = rowEl.insertCell();
        c.textContent = "...";
      }
    });
  }
  // create an AddRow button
  //oBJECTvIEW.createUiElemsForUserActions( popTableEl, this.userActions);
  return tableEl;
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
 *
 * The viewModel.fieldValues map holds the name-value slots of fields that
 * have been changed in the UI.
 *
 * @author Gerd Wagner
 * @method
 */
oBJECTvIEW.createUiFromViewModel = function (viewModel) {
  var outFields = viewModel.outputFields || {},  // map of field definitions
      inFields = viewModel.inputFields || {},  // map of field definitions
      fields = {},
      // list of field names or field name lists
      fieldOrder = viewModel.fieldOrder ||
          Object.keys( outFields).concat( Object.keys( inFields)),
      fieldValues = viewModel.fieldValues,
      userActions = viewModel.userActions || {},
      // a map for storing the bindings of view fields to UI elems/widgets
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
        fldDef = fields[fld],   // field declaration
        range = fldDef.range;
    if (fldDef.inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      if (cLASS.isIntegerType( range) || cLASS.isDecimalType( range)) {
        fldEl.type = "number";
        if (cLASS.isDecimalType( range)) {
          if (!isNaN( parseInt( fldDef.decimalPlaces))) {
            fldEl.step = "0." + "000000000".substring( 0, fldDef.decimalPlaces-1) + "1";
          } else fldEl.step = "0.01";  // default
        }
      } else fldEl.type = "text";
      if (validateOnInput) {
        fldEl.addEventListener("input", function () {
          fldEl.setCustomValidity( cLASS.check( fld, fldDef, fldEl.value).message);
        });
      } else {
        fldEl.addEventListener("blur", function () {
          fldEl.setCustomValidity( cLASS.check( fld, fldDef, fldEl.value).message);
        });
      }
      fldEl.addEventListener("change", function () {
        var v = fldEl.value, validationResult = {};
        if (typeof fldDef.str2val === "function") v = fldDef.str2val(v);
        validationResult = cLASS.check( fld, fldDef, v);
        if (!validateOnInput) fldEl.setCustomValidity( validationResult.message);
        // UI element to view model property data binding (top-down)
        if (fldEl.validity.valid) fieldValues[fld] = validationResult.checkedValue;
      });
    }
    // store data binding assignment of UI element to view field
    dataBinding[fld] = fldEl;
    // render text input element
    fldEl.name = fld;
    if (typeof fldDef.value === "function") {
      fldEl.value = fldDef.value();
    } else if (typeof fldDef.val2str === "function") {
      fldEl.value = fldDef.val2str( fldDef.value);
    } else if (typeof fldDef.value === "object") {
      fldEl.value = JSON.stringify( fldDef.value);
    } else {
      fldEl.value = fldDef.value || fldDef.initialValue || "";
    }
    fldEl.size = fldDef.inputFieldSize || 7;
    if (fldDef.hint) lblEl.title = fldDef.hint;
    lblEl.textContent = fldDef.label;
    lblEl.appendChild( fldEl);
    return lblEl;
  }
  /**
   * Create a labeled Yes/No field.
   * @method
   */
  function createLabeledYesNoField( fld) {
    var fldEl = null, lblEl = document.createElement("label");
    if (fields[fld].inputOutputMode === "O") {
      fldEl = document.createElement("output");
    } else {
      fldEl = document.createElement("input");
      fldEl.type = "checkbox";
      fldEl.addEventListener("change", function () {
        fieldValues[fld] = fldEl.checked;  // UI element to view model property data binding
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
        // data binding of UI element to model property (top-down)
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
  // reset custom validity
  for (i=0; i < uiContainerEl.elements.length; i++) {
    uiContainerEl.elements[i].setCustomValidity("");
  }
  uiContainerEl.reset();
  */
  // create UI elements for all view fields
  createUiElemsForVmFields();
  // create actionable UI elements (like buttons) for all user actions of the view model
  createUiElemsForUserActions( uiContainerEl);
  // store the view model's data binding (map field names to corresponding DOM elements)
  viewModel.dataBinding = dataBinding;
  return uiContainerEl;
};


'use strict';

(function() {
  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  var exp = {
    open: function(name, version, upgradeCallback) {
      var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
      var request = p.request;

      request.onupgradeneeded = function(event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };

      return p.then(function(db) {
        return new DB(db);
      });
    },
    delete: function(name) {
      return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
    }
  };

  if (typeof module !== 'undefined') {
    module.exports = exp;
    module.exports.default = module.exports;
  }
  else {
    self.idb = exp;
  }
}());

/**
 * @fileOverview  This file contains the definition of the library class
 * sTORAGEmANAGER.
 * @author Gerd Wagner
 * @copyright Copyright 2015 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
/**
 * Library class providing storage management methods for a number of predefined
 * storage adapters
 *
 * @constructor
 * @this {sTORAGEmANAGER}
 * @param storageAdapter: object
 */
function sTORAGEmANAGER( storageAdapter) {
  if (typeof storageAdapter !== 'object' ||
      typeof storageAdapter.name !== "string" ||
      !(["LocalStorage","IndexedDB","MariaDB"].includes( storageAdapter.name))) {
    throw new ConstraintViolation("Invalid storage adapter name!");
  } else if (!storageAdapter.dbName) {
    throw new ConstraintViolation("Storage adapter: missing DB name!");
  } else {
    this.adapter = storageAdapter;
    // if "LocalStorage", create a main memory DB
    if (storageAdapter.name === "LocalStorage") {
      Object.keys( cLASS).forEach( function (key) {
        // load all cLASSes
        if (cLASS[key].instances) {
          sTORAGEmANAGER.adapters["LocalStorage"].retrieveLsTable( cLASS[key]);
        }
      });
    }
  }
  // copy storage adapter to the corresponding adapter's storage management method library
  sTORAGEmANAGER.adapters[this.adapter.name].currentAdapter = storageAdapter;
}
/**
 * Generic method for creating an empty DB
 * @method
 */
sTORAGEmANAGER.prototype.createEmptyDb = function (classes) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    var modelClasses=[];
    if (Array.isArray( classes) && classes.length > 0) {
      modelClasses = classes;
    } else {
      Object.keys( cLASS).forEach( function (key) {
        // test if cLASS[key] represents a cLASS
        if (typeof cLASS[key] === "function" && cLASS[key].properties) {
          // collect all non-abstract cLASSes that are not datatype classes
          if (!cLASS[key].isAbstract && !cLASS[key].isComplexDatatype) {
            modelClasses.push( cLASS[key]);
          }
        }
      });
    }
    sTORAGEmANAGER.adapters[adapterName].createEmptyDb( dbName, modelClasses)
    .then( resolve);
  });
};
/**
 * Generic method for creating and "persisting" new model objects
 * @method
 * @param {object} mClass  The model cLASS concerned
 * @param {object} rec  A record or record list
 */
sTORAGEmANAGER.prototype.add = function (mClass, rec) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName,
      createLog = this.createLog,
      checkConstraints = this.validateBeforeSave,
      records=[], validRecords=[];
  if (typeof rec === "object" && !Array.isArray(rec)) {
    records = [rec];
  } else if (Array.isArray(rec) && rec.every( function (r) {
             return typeof r === "object" && !Array.isArray(r)})) {
    records = rec;
  } else throw Error("2nd argument of 'add' must be a record or record list!");
  // create auto-IDs if required
  if (mClass.properties.id && mClass.properties.id.range === "AutoNumber") {
    records.forEach( function (r) {
      if (!r.id) {  // do not overwrite assigned ID values
        if (typeof mClass.getAutoId === "function") r.id = mClass.getAutoId();
        else if (mClass.idCounter !== undefined) r.id = ++mClass.idCounter;
      }
    })
  }
  // check constraints before save if required
  if (checkConstraints) {
    records.forEach( function (r) {
      var newObj=null;
      if (r instanceof mClass) {
        validRecords.push( r);
      } else {
        try {newObj = new mClass( r);}  // check constraints
        catch (e) {
          if (e instanceof ConstraintViolation) {
            console.log( e.constructor.name +": "+ e.message);
          } else console.log( e);
        }
        if (newObj) validRecords.push( newObj);
      }
    });
    records = validRecords;
  }
  return new Promise( function (resolve) {
    sTORAGEmANAGER.adapters[adapterName].add( dbName, mClass, records).then( function () {
      if (createLog) console.log( records.length +" "+ mClass.Name +"(s) added.");
      if (typeof resolve === "function") resolve();
    }).catch( function (error) {
      console.log( error.name +": "+ error.message);
    });
  });
};
/**
 * Generic method for loading/retrieving a model object
 * @method
 * @param {object} mc  The model cLASS concerned
 * @param {string|number} id  The object ID value
 */
sTORAGEmANAGER.prototype.retrieve = function (mc, id) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    sTORAGEmANAGER.adapters[adapterName].retrieve( dbName, mc, id)
    .then( function (obj) {
      if (!obj) {
        obj = null;
        console.log("There is no " + mc.Name + " with ID value " + id + " in the database!");
      }
      resolve( obj);
    });
  });
};
/**
 * Generic method for loading all table rows and converting them
 * to model objects
 *
 * @method
 * @param {object} mc  The model cLASS concerned
 */
sTORAGEmANAGER.prototype.retrieveAll = function (mc) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName,
      createLog = this.createLog,
      validateAfterRetrieve = this.validateAfterRetrieve;
  return new Promise( function (resolve) {
    sTORAGEmANAGER.adapters[adapterName].retrieveAll( dbName, mc)
    .then( function (records) {
      var i=0, newObj=null;
      if (createLog) {
        console.log( records.length +" "+ mc.Name +" records retrieved.")
      }
      if (validateAfterRetrieve) {
        for (i=0; i < records.length; i++) {
          try {
            newObj = new mc( records[i]);
          } catch (e) {
            if (e instanceof ConstraintViolation) {
              console.log( e.constructor.name +": "+ e.message);
            } else console.log( e.name +": "+ e.message);
          }
        }
      }
      resolve( records);
    })
  });
};
/**
 * Generic method for updating model objects
 * @method
 * @param {object} mc  The model cLASS concerned
 * @param {string|number} id  The object ID value
 * @param {object} slots  The object's update slots
 */
sTORAGEmANAGER.prototype.update = function (mc, id, slots) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName, 
      currentSM = this;
  return new Promise( function (resolve) {
    var objectBeforeUpdate = null, properties = mc.properties,
        updatedProperties=[], noConstraintViolated = true,
        updSlots = util.cloneObject( slots);
    // first check if object exists
    currentSM.retrieve( mc, id).then( function (objToUpdate) {
      if (objToUpdate) {
        if (typeof objToUpdate === "object" && objToUpdate.constructor !== mc) {
          // if the retrieved objToUpdate is not of type mc, check integrity constraints
          objToUpdate = mc.createObjectFromRecord( objToUpdate);
          if (!objToUpdate) return;  // constraint violation
        }
        objectBeforeUpdate = util.cloneObject( objToUpdate);
        try {
          Object.keys( slots).forEach( function (prop) {
            var oldVal = objToUpdate[prop],
                newVal = slots[prop],
                propDecl = properties[prop];
            if (prop !== "id") {
              if (propDecl.maxCard === undefined || propDecl.maxCard === 1) {  // single-valued
                if (Number.isInteger( oldVal) && newVal !== "") {
                  newVal = parseInt( newVal);
                } else if (typeof oldVal === "number" && newVal !== "") {
                  newVal = parseFloat( newVal);
                } else if (oldVal===undefined && newVal==="") {
                  newVal = undefined;
                }
                if (newVal !== oldVal) {
                  updatedProperties.push( prop);
                  objToUpdate.set( prop, newVal);  // also checking constraints
                } else {
                  delete updSlots[prop];
                }
              } else {   // multi-valued
                if (oldVal.length !== newVal.length ||
                    oldVal.some( function (vi,i) { return (vi !== newVal[i]);})) {
                  objToUpdate.set(prop, newVal);
                  updatedProperties.push(prop);
                } else {
                  delete updSlots[prop];
                }
              }
            }
          });
        } catch (e) {
          console.log( e.constructor.name +": "+ e.message);
          noConstraintViolated = false;
          // restore object to its state before updating
          objToUpdate = objectBeforeUpdate;
        }
        if (noConstraintViolated) {
          if (updatedProperties.length > 0) {
            sTORAGEmANAGER.adapters[adapterName].update( dbName, mc, id, slots, updSlots)
            .then( function () {
              console.log("Properties "+ updatedProperties.toString() +
                  " of "+ mc.Name +" "+ id +" updated.");
              if (typeof resolve === "function") resolve();
            });
          } else {
            console.log("No property value changed for "+ mc.Name +" "+ id +"!");
          }
        }
      }
    });
  });
};
/**
 * Generic method for deleting model objects
 * @method
 * @param {object} mc  The model cLASS concerned
 * @param {string|number} id  The object ID value
 */
sTORAGEmANAGER.prototype.destroy = function (mc, id) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName,
      currentSM = this;
  return new Promise( function (resolve) {
    currentSM.retrieve( mc, id).then( function (record) {
      if (record) {
        sTORAGEmANAGER.adapters[adapterName].destroy( dbName, mc, id)
        .then( function () {
          console.log( mc.Name +" "+ id +" deleted.");
          if (typeof resolve === "function") resolve();
        });
      } else {
        console.log("There is no "+ mc.Name +" with ID value "+ id +" in the database!");
      }
    });
  });
};
/**
 * Generic method for clearing the DB table, or object store, of a cLASS
 * @method
 */
sTORAGEmANAGER.prototype.clearTable = function (mc) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    sTORAGEmANAGER.adapters[adapterName].clearTable( dbName, mc)
    .then( resolve);
  });
};
/**
 * Generic method for clearing the DB of an app
 * @method
 */
sTORAGEmANAGER.prototype.clearDB = function () {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    if ((typeof confirm === "function" &&
        confirm("Do you really want to delete all data?")) ||
        typeof confirm !== "function") {
      sTORAGEmANAGER.adapters[adapterName].clearDB( dbName)
      .then( resolve);
    }
  });
};
/**
 * Generic method for storing unsaved data on page unload
 * @method
 */
sTORAGEmANAGER.prototype.saveOnUnload = function () {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  sTORAGEmANAGER.adapters[adapterName].saveOnUnload( dbName);
};

sTORAGEmANAGER.adapters = {};


/*****************************************************************************
 * Storage management methods for the "LocalStorage" adapter
 * Only in the case of "LocalStorage", due to its non-concurrent architecture,
 * the entire data is loaded into a kind of main memory DB, which is saved
 * back to LocalStorage on page unload.
 ****************************************************************************/
sTORAGEmANAGER.adapters["LocalStorage"] = {
  //-----------------------------------------------------------------
  createEmptyDb: function (dbName, modelClasses) {
  //-----------------------------------------------------------------
    // nothing to do
    return new Promise( function (resolve) {
      resolve();
    });
  },
  //------------------------------------------------
  add: function (dbName, mc, records) {  // does not access localStorage
  //------------------------------------------------
    return new Promise( function (resolve) {
      var newObj=null;
      if (!Array.isArray( records)) {  // single record insertion
        records = [records];
      }
      records.forEach( function (rec) {
        newObj = new mc( rec);
        mc.instances[newObj.id] = newObj;
      })
      resolve( newObj);
    });
  },
  //------------------------------------------------
  retrieve: function (dbName, mc, id) {  // does not access localStorage
  //------------------------------------------------
    return new Promise( function (resolve) {
      resolve( mc.instances[id]);
    });
  },
  //-------------------------------------------------------------
  // *** A LocalStorage-specific, and not an interface method ***
  //-------------------------------------------------------------
  retrieveLsTable: function (mc) {
  //-------------------------------------------------------------
    var key="", keys=[], i=0,
        tableString="", table={},
        tableName = util.class2TableName( mc.Name);
    try {
      if (localStorage[tableName]) {
        tableString = localStorage[tableName];
      }
    } catch (e) {
      console.log( "Error when reading from Local Storage\n" + e);
    }
    if (tableString) {
      table = JSON.parse( tableString);
      keys = Object.keys( table);
      console.log( keys.length + " " + mc.Name + " records loaded.");
      for (i=0; i < keys.length; i++) {
        key = keys[i];
        mc.instances[key] = mc.createObjectFromRecord( table[key]);
      }
    }
  },
  //------------------------------------------------
  retrieveAll: function (dbName, mc) {
    //------------------------------------------------
    var  currentSM = this;
    return new Promise( function (resolve) {
      var records=[];
      /* OLD
      function retrieveAll (mc) {
        var key = "", keys = [], i = 0,
            tableString = "", table={},
            tableName = util.class2TableName( mc.Name);
        // do no retrieve the same class population twice
        if (Object.keys( mc.instances).length > 0) return;
        // first retrieve the population of the classes that are ranges of reference properties
        Object.keys( mc.properties).forEach( function (p) {
          var range = mc.properties[p].range;
          if (range instanceof cLASS) retrieveAll( range);
        });
        currentSM.retrieveTable( mc);      }
      retrieveAll( mc);
      */
      // convert entity map mc.instances to an array list
      records = Object.keys( mc.instances).map( function (key) {return mc.instances[key];});
      resolve( records);
    });
  },
  //------------------------------------------------
  update: function (dbName, mc, id, slots) {  // does not access localStorage
  //------------------------------------------------
    return new Promise( function (resolve) {
      // in-memory object has already been updated in the generic update
      /*
      Object.keys( slots).forEach( function (prop) {
        obj = mc.instances[id];
        obj[prop] = slots[prop];
      });
      */
      resolve();
    });
  },
  //------------------------------------------------
  destroy: function (dbName, mc, id) {  // does not access localStorage
  //------------------------------------------------
    return new Promise( function (resolve) {
      delete mc.instances[id];
      resolve();
    });
  },
  //------------------------------------------------
  clearTable: function (dbName, mc) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      mc.instances = {};
      try {
        localStorage[tableName] = JSON.stringify({});
        console.log("Table "+ tableName +" cleared.");
      } catch (e) {
        console.log("Error when writing to Local Storage\n" + e);
      }
      resolve();
    });
  },
  //------------------------------------------------
  clearDB: function () {
  //------------------------------------------------
    return new Promise( function (resolve) {
      Object.keys( cLASS).forEach( function (key) {
        var tableName="";
        if (!cLASS[key].isComplexDatatype && Object.keys( cLASS[key].instances).length > 0) {
          cLASS[key].instances = {};
          tableName = mc.tableName || util.class2TableName( cLASS[key].Name);
          try {
            localStorage[tableName] = JSON.stringify({});
          } catch (e) {
            console.log("Error when writing to Local Storage\n" + e);
          }
        }
      });
      resolve();
    });
  },
  //------------------------------------------------
  saveOnUnload: function () {
  //------------------------------------------------
    Object.keys( cLASS).forEach( function (key) {
      var id="", table={}, obj=null, i=0, mc=null,
          keys=[], tableName="";
      if (cLASS[key].instances) {
        mc = cLASS[key];
        keys = Object.keys( mc.instances)
        tableName = util.class2TableName( mc.Name);
        for (i=0; i < keys.length; i++) {
          id = keys[i];
          obj = mc.instances[id];
          table[id] = obj.toRecord();
        }
        try {
          localStorage[tableName] = JSON.stringify( table);
          console.log( keys.length +" "+ mc.Name +" records saved.");
        } catch (e) {
          console.log("Error when writing to Local Storage\n" + e);
        }
      }
    });
  }
};
/**
 * @fileOverview  Storage management methods for the "IndexedDB" adapter
 * @author Gerd Wagner
 * @copyright Copyright 2017 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
sTORAGEmANAGER.adapters["IndexedDB"] = {
  //------------------------------------------------
  createEmptyDb: function (dbName, modelClasses) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      idb.open( dbName, 1, function (upgradeDb) {
        modelClasses.forEach( function (mc) {
          var tableName = mc.tableName || util.class2TableName( mc.Name),
              keyPath = mc.primaryKey || "id";
          if (!upgradeDb.objectStoreNames.contains( tableName)) {
            upgradeDb.createObjectStore( tableName, {keyPath: keyPath});
          }
        })
      }).then( resolve);
    });
  },
  //------------------------------------------------
  add: function (dbName, mc, records) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readwrite");
        var os = tx.objectStore( tableName);
        // Promise.all takes a list of promises and resolves if all of them do
        return Promise.all( records.map( function (rec) {return os.add( rec);}))
            .then( function () {return tx.complete;});
      }).then( resolve)
      .catch( function (err) {
        console.log( err.name +": "+ err.message +"Table: "+ tableName);}
      );
    });
  },
  //------------------------------------------------
  retrieve: function (dbName, mc, id) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readonly");
        var os = tx.objectStore( tableName);
        return os.get( id);
      }).then( function( result) {
        if (result === undefined) result = null;
        resolve( result);
      }).catch( function (err) {console.log( err.name +": "+ err.message);});
    });
  },
  //------------------------------------------------
  retrieveAll: function (dbName, mc) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readonly");
        var os = tx.objectStore( tableName);
        return os.getAll();
      }).then( function (results) {
        if (results === undefined) results = [];
        resolve( results);
      }).catch( function (err) {console.log( err.name +": "+ err.message);});
    });
  },
  //------------------------------------------------
  update: function (dbName, mc, id, slots) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readwrite");
        var os = tx.objectStore( tableName);
        slots["id"] = id;
        os.put( slots);
        return tx.complete;
      }).then( resolve)
      .catch( function (err) {
        console.log( err.name +": "+ err.message +"Table: "+ tableName);}
      );
    });
  },
  //------------------------------------------------
  destroy: function (dbName, mc, id) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readwrite");
        var os = tx.objectStore( tableName);
        os.delete( id);
        return tx.complete;
      }).then( resolve)
      .catch( function (err) {console.log( err.name +": "+ err.message);});
    });
  },
  //------------------------------------------------
  clearTable: function (dbName, mc) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = mc.tableName || util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readwrite");
        var os = tx.objectStore( tableName);
        os.clear();
        return tx.complete;
      }).then( resolve)
      .catch( function (err) {console.log( err.name +": "+ err.message);});
    });
  },
  //------------------------------------------------
  clearDB: function (dbName) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( idbCx.objectStoreNames, "readwrite");
        // Promise.all takes a list of promises and resolves if all of them do
        return Promise.all( Array.from( idbCx.objectStoreNames,
            function (osName) {return tx.objectStore( osName).clear();}))
            .then( function () {return tx.complete;});
      }).then( resolve)
      .catch( function (err) {console.log( err.name +": "+ err.message);});
    });
  },
  //------------------------------------------------
  saveOnUnload: function (dbName) {  // not yet implemented
  //------------------------------------------------
  }
};