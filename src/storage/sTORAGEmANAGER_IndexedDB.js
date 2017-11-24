/**
 * @fileOverview  Storage management methods for the "IndexedDB" adapter
 * @author Gerd Wagner
 * @copyright Copyright 2017 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
sTORAGEmANAGER.adapters["IndexedDB"] = {
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
  add: function (mc, slots, newObj, continueProcessing) {
  //------------------------------------------------
    mc.instances[newObj.id] = newObj;
    this.saveAll( mc);
    //console.log( newObj.toString() + " created!");
    continueProcessing( newObj, null);  // no error
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