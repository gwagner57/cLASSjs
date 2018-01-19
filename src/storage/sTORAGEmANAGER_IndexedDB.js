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
          var tableName = util.class2TableName( mc.Name);
          if (!upgradeDb.objectStoreNames.contains( tableName)) {
            upgradeDb.createObjectStore( tableName, {keyPath:"id"});
            // possibly create autoIncrement standard ID attributes
          }
        })
      }).then( resolve);
    });
  },
  //------------------------------------------------
  add: function (dbName, mc, records) {
  //------------------------------------------------
    return new Promise( function (resolve, reject) {
      var tableName = util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readwrite");
        var os = tx.objectStore( tableName);
        if (!Array.isArray( records)) {  // single record insertion
          records = [records];
        }
        // Promise.all takes a list of promises and resolves if all of them do
        return Promise.all( records.map( function (rec) {return os.add( rec);}))
            .then( function () {return tx.complete;});
      }).then( resolve)
      .catch( function (err) {
        reject( err);
      });
    });
  },
  //------------------------------------------------
  retrieve: function (dbName, mc, id) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readonly");
        var os = tx.objectStore( tableName);
        return os.get( id);
      }).catch( function (err) {
        console.log( err);
      }).then( function( result) {
        if (result === undefined) result = null;
        resolve( result);
      });
    });
  },
  //------------------------------------------------
  retrieveAll: function (dbName, mc) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readonly");
        var os = tx.objectStore( tableName);
        return os.getAll();
      }).catch( function (err) {
        console.log( err);
      }).then( function( results) {
        if (results === undefined) results = [];
        resolve( results);
      });
    });
  },
  //------------------------------------------------
  update: function (dbName, mc, id, slots) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readwrite");
        var os = tx.objectStore( tableName);
        slots["id"] = id;
        os.put( slots);
        return tx.complete;
      }).catch( function (err) {
        console.log( err);
      }).then( resolve);
    });
  },
  //------------------------------------------------
  destroy: function (dbName, mc, id) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readwrite");
        var os = tx.objectStore( tableName);
        os.delete( id);
        return tx.complete;
      }).catch( function (err) {
        console.log( err);
      }).then( resolve);
    });
  },
  //------------------------------------------------
  clearTable: function (dbName, mc) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = util.class2TableName( mc.Name);
      idb.open( dbName).then( function (idbCx) {  // idbCx is a DB connection
        var tx = idbCx.transaction( tableName, "readwrite");
        var os = tx.objectStore( tableName);
        os.clear();
        return tx.complete;
      }).catch( function (err) {
        console.log( err);
      }).then( resolve);
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
      }).catch( function (err) {
        console.log( err);
      }).then( resolve);
    });
  },
  //------------------------------------------------
  saveOnUnload: function (dbName) {  // not yet implemented
  //------------------------------------------------
  }
};