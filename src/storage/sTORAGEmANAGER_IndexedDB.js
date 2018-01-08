/**
 * @fileOverview  Storage management methods for the "IndexedDB" adapter
 * @author Gerd Wagner
 * @copyright Copyright 2017 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
sTORAGEmANAGER.adapters["IndexedDB"] = {
  idbConnection: new JsStore.Instance(),
  //------------------------------------------------
  createDbConnection: function (dbName, modelClasses, continueProc) {
  //------------------------------------------------
    var jsStoreTableSchemas = null;
    var idbCon = sTORAGEmANAGER.adapters["IndexedDB"].idbConnection;
    JsStore.isDbExist( dbName).then( function (exists) {
      if (exists) idbCon.openDb( dbName);
      else {
        jsStoreTableSchemas = modelClasses.map( function (mc) {
          var jsStoreColDefs=[];
          // convert cLASS property declarations to JsStore column definitions
          Object.keys( mc.properties).forEach( function (prop) {
            var range = mc.properties[prop].range,
                jsDataType = cLASS.rangeToJsDataType( range),
                colDef = {Name: prop, DataType: jsDataType};
            if (prop === "id") colDef.PrimaryKey = true;
            if (!mc.properties[prop].optional) colDef.NotNull = true;
            jsStoreColDefs.push( colDef);
          });
          return {Name: mc.Name, Columns: jsStoreColDefs};
        });
        idbCon.createDb( {Name: dbName, Tables: jsStoreTableSchemas});
      }
    })
    .catch( function (err) {console.log( err.Message);});
  },
  //------------------------------------------------
  add: function (mc, slots, newObj, continueProcessing) {
  //------------------------------------------------
    var tableName = util.class2TableName( mc.name);
    pl.c.storageManager.idbCon.insert({
      Into: tableName,
      Values: [slots],
      OnSuccess: function (nmrOfRowsInserted){
        console.log( nmrOfRowsInserted +" record(s) added!");
      },
      OnError: function (error) {
        console.log( error.value);
      }
    });

  },
  //------------------------------------------------
  retrieve: function (mc, id, continueProcessing) {
    //------------------------------------------------
    //this.retrieveAll();             //TODO: Needed?
    continueProcessing( mc.instances[id]);
  },
  //------------------------------------------------
  retrieveAll: function (mClass, continueProcessing) {
  //------------------------------------------------
    function retrieveAll (mc) {
      var key = "", keys = [], i = 0,
          tableString = "", table={},
          tableName = util.class2TableName( mc.Name);
      Object.keys( mc.properties).forEach( function (p) {
        var range = mc.properties[p].range;
        if (range instanceof cLASS) retrieveAll( range);
      });
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
          mc.instances[key] = mc.convertRec2Obj( table[key]);
        }
      }
    }
    retrieveAll( mClass);
    continueProcessing();
  },
  //------------------------------------------------
  /***** newObj includes validated update slots *****/
  update: function (mc, id, slots, newObj, continueProcessing) {
  //------------------------------------------------
    this.saveAll( mc);  //TODO: save only on leaving page or closing browser tab/window
  },
  //------------------------------------------------
  destroy: function (mc, id, continueProcessing) {
  //------------------------------------------------
    delete mc.instances[id];
    this.saveAll( mc);  //TODO: save only on app exit
  },
  //------------------------------------------------
  clearData: function (mc, continueProcessing) {
    //------------------------------------------------
    var tableName = util.class2TableName( mc.Name);
    mc.instances = {};
    try {
      localStorage[tableName] = JSON.stringify({});
      console.log("Table "+ tableName +" cleared.");
    } catch (e) {
      console.log("Error when writing to Local Storage\n" + e);
    }
  },
  //------------------------------------------------
  saveAll: function (mc) {
  //------------------------------------------------
    var id="", table={}, rec={}, obj=null, i=0,
        keys = Object.keys( mc.instances),
        tableName = util.class2TableName( mc.Name);
    // convert to a 'table' as a map of entity records
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
};