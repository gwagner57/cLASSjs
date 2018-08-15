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
/**
 * Given a class name (e.g. Book) create the corresponding database
 * table name (e.g., books) which is the lower case plural version
 * of the used (and provided as parameter) class name.
 * @param {string} className
 * @return the corresponding table name for the given class name
 */
util.class2TableName = function ( className) {
  return util.camelToUnderscore( className, true);
};

/**
 * Given a property name (e.g. dateOfBirth) create the corresponding
 * table column name (e.g., date_of_birth) which is the underscore
 * notation version of the property name.
 * @param {string} propertyName
 * @return the corresponding column name for the given property name
 */
util.property2ColumnName = function ( propertyName) {
  return util.camelToUnderscore( propertyName);
};

/**
 * Given a table name (e.g. books) create the corresponding class
 * name (e.g., Book) which is the camel case version of the table
 * name but without the ending 's' and with first letter capitalized.
 * @param {string} tableName
 * @return the corresponding class name for the given table name
 */
util.table2ClassName = function ( tableName) {
  return util.underscoreToCamel( tableName, true);
};

/**
 * Given a column name (e.g. date_of_birth) create the corresponding
 * property name (e.g., dateOfBirth) which is the camel case version
 * of the column name (first letter lower case also).
 * @param {string} columnName
 * @return the corresponding property name for the given column name
 */
util.column2PropertyName = function ( columnName) {
  return util.underscoreToCamel( columnName);
};

/** REGEX to check if valid JS identifier **/
util.JsIdentifierPattern = /^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/;
/**
 * Convert a camel case identifier to underscore notation.
 * E.g.: dateOfBirth => date_of_birth,
 *       TemperatureSensor => temperature_sensors (if isClass = true)
 * @param {string} identifier
 *                the identifier(class name, property name, etc) to transform
 * @param {boolean} isClass
 *                a flag which specify if the identifier is a class name
 *                because in this case, the underscore notation contains
 *                the 's' char at the end.
 * @return the underscore-notation string for the identifier
 */
util.camelToUnderscore = function ( identifier, isClass) {
  var result = '';
  // null or undefined identifier
  if ( !identifier) {
    throw "util.camelToUnderscore: the 'identifier' can't be null or undefined!";
  }
  // invalid JS identifier
  if ( !util.JsIdentifierPattern.test( identifier)) {
    throw "util.camelToUnderscore: the provided 'identifier' (" + identifier + ") is not a JS valid identifier!";
  }
  // if the first is a A-Z char, replace it with its lower case equivalent
  // that's much easier than to create a regular expression to consider this
  // specific exception case (which occurs normally with class names)
  identifier = identifier.charAt( 0).toLowerCase() + identifier.slice( 1);
  // replace upper case letter with '_' followed by the lower case equivalent leter
  result = identifier.replace( /([A-Z])/g, function( $1) {
    return "_" + $1.toLowerCase();
  });
  // if is a class, add the 's' at the end
  if ( isClass === true) {
    result += 's';
  }
  return result;
};
/**
 * Given a underscore-notation identifier, the method
 * transform it to camel case notation.
 * E.g.: date_of_birth => dateOfBirth
 *       temperature_sensors => TemperatureSensor (if isClass = true)
 * @param {string} identifier
 *                the identifier to transform
 * @param {boolean} isClass
 *                a flag which specify if the identifier is a class name
 *                because in this case, the underscore notation contains
 *                the 's' char at the end which has to be cut-out and also
 *                the first letter has to be capitalized.
 * @return the camel case notation string for the identifier
 */
util.underscoreToCamel = function ( identifier, isClass) {
  var result = '';
  // null or undefined identifier
  if ( !identifier) {
    throw "util.underscoreToCamel: the 'identifier' can't be null or undefined!";
  }
  // invalid JS identifier
  if ( !util.JsIdentifierPattern.test( identifier)) {
    throw "util.underscoreToCamel: the provided 'identifier' is not a JS valid identifier!";
  }
  // replace upper case letter with '_' followed by the lower case equivalent letter
  result = identifier.replace( /(\_[a-z])/g, function ( $1) {
    return $1.toUpperCase().replace( '_', '');
  });
  // if is a class name, delete the 's' from the end
  // and capitalize the first letter
  if ( isClass === true) {
    result = result.charAt( 0).toUpperCase() + result.slice( 1);
    // if it has an 's' at the end, then cut it out
    // this should be in general the case...but anyway check it
    if ( result.charAt( result.length - 1) === 's') {
      result = result.slice( 0, result.length - 1);
    }
  }
  return result;
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
 * Computes the Cartesian Product of an array of arrays
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
 *   if (myObj. .Name ==="MyObject") ...
 *   // or, alternatively,
 *   if (myObj instanceof MyObject) ...
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
  // define a constructor function for creating a new cLASS
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
    /***************************************************/
    constr.prototype.set = function ( prop, val) {
    /***************************************************/
      // this = object
      var constrViol = cLASS.check( prop, this.constructor.properties[prop], val);
      if (constrViol instanceof NoConstraintViolation) {
        this[prop] = constrViol.checkedValue;
      } else {
        throw constrViol;
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
              } else {  // map from ID refs to obj refs
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
          valuesToConvert = val.slice(0);  // clone;
        } else console.log("The value of a multi-valued " +
            "datatype property must be an array!");
      } else valuesToConvert = [val];
      valuesToConvert.forEach( function (v,i) {
        if (eNUMERATION && range instanceof eNUMERATION) {
          valuesToConvert[i] = range.labels[v-1];
        } else if (["number","string","boolean"].includes( typeof v) || !v) {
          valuesToConvert[i] = String( v);
        } else if (range === "Date") {
          valuesToConvert[i] = util.createIsoDateString( v);
        } else if (Array.isArray( v)) {  // JSON-compatible array
          valuesToConvert[i] = v.slice(0);  // clone
        } else if (typeof range === "string" && cLASS[range]) {
          if (typeof val === "object" && val.id !== undefined) {
            valuesToConvert[i] = val.id;
          } else {
            valuesToConvert[i] = "";
          }
        } else valuesToConvert[i] = JSON.stringify( v);
      });
      displayStr = valuesToConvert[0];
      if (propDecl.maxCard && propDecl.maxCard > 1) {
        displayStr = "[" + displayStr;
        for (k=1; k < valuesToConvert.length; k++) {
          displayStr += listSep + valuesToConvert[k];
        }
        displayStr = displayStr + "]";
      }
      return displayStr;
    };
    /***************************************************/
    /***************************************************/
    // A class-level de-serialization method
    constr.createObjectFromRecord = function (record) {
    /***************************************************/
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
  * @param optParams.checkRefInt  Check referential integrity
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
   } else {  // multi-valued properties can be array-valued or map-valued
     if (Array.isArray( val) ) {
       valuesToCheck = val;
     } else if (typeof range === "string" && cLASS[range]) {
       valuesToCheck = Object.keys( val).map( function (id) {
         return val[id];
       });
     } else {
       return new RangeConstraintViolation("Values for "+ fld +
           " must be arrays or maps!");
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
   // return deserialized value available in validationResult.checkedValue
   return new NoConstraintViolation( val);
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
  * Create option elements from an array list of option text strings
  * and insert them into a selection list element
  *
  * @param {object} selEl  A select(ion list) element
  * @param {object} options  An array list of option text items
  * @param {object} optPar  A record of optional parameters
  */
  fillSelectWithOptionsFromArrayList: function (selEl, options, optPar) {
    selEl.innerHTML = "";
    if (!selEl.multiple) {
      selEl.add( dom.createOption({text:" --- ", value:""}), null);
    }
    options.forEach( function (txt,i) {
      var optEl = dom.createOption({text: txt, value: i});
      if (selEl.multiple && optPar && optPar.selection &&
          optPar.selection.includes(i+1)) {
        // flag the option element with this value as selected
        optionEl.selected = true;
      }
      selEl.add( optEl, null);
    });
  },
   /**
    * Create option elements from a map of ID values to entity objects/records
    * and insert them into a selection list element
    *
    * @param {object} selEl  A select(ion list) element
    * @param {object} entityMap  A map of option values to option text items
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
          this.fields[fld] = {
            moName: mo.objectName,
            label: properties[fld].label,
            hint: properties[fld].hint,
            range: properties[fld].range,
            inputOutputMode:"I/O"
          };
          fldOrdEl.push( fld);
        } else if (typeof fld === "object") {  // field definition
          properties = this.modelObject.properties;
          this.fields[fld.name] = {
            moName: this.modelObject.objectName,
            label: fld.label || properties[fld.name].label,
            hint: fld.hint || properties[fld.name].hint,
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
oBJECTvIEW.prototype.render = function (parentEl) {
  var fields = this.fields,  // fields map
      fieldOrder = this.fieldOrder,  // field order array
      mObject = this.modelObject,  // model object
      mObjects = this.modelObjects,  // model objects
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
      !parentEl ? "form":"div", {id: this.modelObject ? this.modelObject.objectName :
            Object.keys( this.modelObjects)[0]});
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
        c.textContent = obj.getValueAsString( p);
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
        var v = fldEl.value,
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
    if (typeof fldDef.fieldValue === "function") {
      fldEl.value = fldDef.fieldValue();
    } else if (typeof fldDef.fieldValue === "object") {
      fldEl.value = JSON.stringify( fldDef.fieldValue);
    } else {
      fldEl.value = fldDef.fieldValue || fldDef.initialValue || "";
    }
    fldEl.size = 7;
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


 /**
 * @fileOverview  A library of XHR-based HTTP messaging methods.
 *                It uses JS Promises in the underlayer.
 * @author Gerd Wagner
 * @copyright Copyright 2015 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
var xhr = {
  URL_PATTERN: /\b(https?):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|??]/,
  /**
   * Default response handler, used if 
   * a custom one is not provided by the caller 
   * of GET, PUT, POST, DELETE or OPTIONS.
   */
  defaultResponseHandler: function(rsp) {
    if (rsp.status === 200 || rsp.status === 201 || rsp.status === 304) 
      console.log("Response: " + rsp.responseText); 
     else console.log("Error " + rsp.status +": "+ rsp.statusText);
   },
  /**
   * Utility method encapsulating common code 
   * required to initiate the specific XHR request.
   */
  initiateRequest: function (params, type) {
    params.method = type;
    if (typeof params.handleResponse !== "function")
      params.handleResponse = xhr.defaultResponseHandler;
    xhr.makeRequest( params)
    .then(function (p) {params.handleResponse(p)})
    .catch(function (e) {console.log(e)});
  },
  /**
   * Make an XHR GET request
   * @param params  Contains parameter slots
   */
  OPTIONS: function (params) {
    xhr.initiateRequest(params, "OPTIONS");
  },
  /**
   * Make an XHR GET request
   * @param params  Contains parameter slots
   */
  GET: function (params) {
    xhr.initiateRequest(params, "GET");
  },
  /**
   * Make an XHR POST request
   * @param params  Contains parameter slots
   */
  POST: function (params) {
    xhr.initiateRequest(params, "POST");
  },
  /**
   * Make an XHR PUT request
   * @param params  Contains parameter slots
   */
  PUT: function (params) {
    xhr.initiateRequest(params, "PUT");
  },
  /**
   * Make an XHR DELETE request
   * @param params  Contains parameter slots
   */
  DELETE: function (params) {
    xhr.initiateRequest(params, "DELETE");
  },
  /**
   * Make an XHR request
   * @param {{method: string?, url: string, 
   *          reqFormat: string?, respFormat: string?,
   *          handleResponse: function?,
   *          requestHeaders: Map?}
   *        } params  The parameter slots.
   */
  makeRequest: function (params) {
    return new Promise(function(resolve, reject) {
      var req=null, url="", method="",
          reqFormat="", respFormat="";
      if (!params.url) {
        reject(new Error("Missing value for url parameter in XHR GET request!"));
      } else if (!xhr.URL_PATTERN.test( params.url)) {
        reject(new Error("Invalid URL in XHR GET request!"));    
      } else {
        url = params.url;
        req = new XMLHttpRequest();
        method = (params.method) ? params.method : "GET";  // default
        reqFormat = (params.reqFormat) ? params.reqFormat : 
            "application/x-www-form-urlencoded";  // default
        respFormat = (params.respFormat) ? params.respFormat : "application/json";  // default
      }
      req.open( method, url, true);
      req.onload = function (e) {resolve(e.target);};
      req.onerror = reject;
      if (params.requestHeaders) {
        Object.keys( params.requestHeaders).forEach( function (rH) {
          req.setRequestHeader( rH, params.requestHeaders[rH]);
        });
      }
      req.setRequestHeader("Accept", respFormat);
      if (method === "GET" || method === "DELETE") {
        req.send("");
      } else {  // POST and PUT
        req.setRequestHeader("Content-Type", reqFormat);
        req.send( params.msgBody);
      }
    });
  }
};
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
    throw new ConstraintViolation("Storage adapter:missing DB name!");
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
sTORAGEmANAGER.prototype.createEmptyDb = function () {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    var modelClasses=[];
    Object.keys( cLASS).forEach( function (key) {
      // collect all non-abstract cLASSes
      if (cLASS[key].instances) modelClasses.push( cLASS[key]);
    });
    sTORAGEmANAGER.adapters[adapterName].createEmptyDb( dbName, modelClasses)
    .then( resolve);
  });
};
/**
 * Generic method for creating and "persisting" new model objects
 * @method
 * @param {object} mClass  The model cLASS concerned
 * @param {object} records  The object creation slots
 */
sTORAGEmANAGER.prototype.add = function (mClass, records) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    var newObj=null, objID="";
    if (Array.isArray( records)) {  // bulk insertion
      sTORAGEmANAGER.adapters[adapterName].add( dbName, mClass, records)
      .then( function () {
        console.log( records.length +" "+ mClass.Name +"s added.");
        if (typeof resolve === "function") resolve();

      });
    } else {  // single record insertion
      try {
        newObj = new mClass( records);  // check constraints
        objID = newObj.id;  // save object ID
        if (newObj) {
          sTORAGEmANAGER.adapters[adapterName].add( dbName, mClass, newObj)
          .then( function () {
            console.log( mClass.Name +" "+ objID +" added.");
            if (typeof resolve === "function") resolve();
          });
        }
      } catch (e) {
        if (e instanceof ConstraintViolation) {
          console.log( e.constructor.name +": "+ e.message);
        } else console.log( e);
      }
    }
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
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    sTORAGEmANAGER.adapters[adapterName].retrieveAll( dbName, mc)
    .then( resolve);
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
      var tableName = util.class2TableName( mc.Name);
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
        if (cLASS[key].instances) {
          cLASS[key].instances = {};
          tableName = util.class2TableName( cLASS[key].Name);
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