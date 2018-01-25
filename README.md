# cLASSjs
A JS library for defining (1) enumerations and (2) constructor-based classes (and class hierarchies) with semantic meta-data for generic data storage management, declarative constraint validation and for generating model-based user interfaces.

## Use Case 1: Handling Enumerations and Enumeration Attributes

### Defining an Enumeration

    var WeatherStateEL = new eNUMERATION ("WeatherStateEL", 
        ["sunny", "partly cloudy", "cloudy", "cloudy with rain", "rainy"]);

### Using an Enumeration as the Range of an Attribute

    var Weather = new cLASS({
        Name: "Weather",
        properties: {
          "weatherState": {range: WeatherStateEL, label: "Weather conditions"},
          "temperature": {range: "Decimal", label: "Temperature"}
        },
        methods: {...}
    });

### Using Enumeration Literals

Recall that *enumeration literals* are constants that stand for a positive integer (the *enumeration index*). 

For instance, the enum literal `WeatherStateEL.SUNNY` stands for the enum index 1. In program code, we do no use the enum index, but rather the enum literal. For instance, 

    var theWeather = new Weather({
          weatherState: WeatherStateEL.SUNNY, // do not use the enum index value 1
          temperature: 30
    })

### Looping over an Enumeration

We loop over the enumeration `WeatherStateEL` with a `for` loop counting from 1 to `WeatherStateEL.MAX`:

    var i=0;
    for (i=1; i <= WeatherStateEL.MAX; i++) {
      switch (i) {
      case WeatherStateEL.SUNNY: 
        ...
        break;
      case WeatherStateEL.PARTLY_CLOUDY: 
        ...
        break;
      }
    }


## Use Case 2: Flexible Data Storage Management with Adapters

cLASSjs comes with a sTORAGEmANAGER class and two storage adapters for using `localStorage` or `ìndexedDB`. A storage manager works like a wrapper of the methods of an adapter. The storage manager methods invoke corresponding methods of its adapter. The following code example shows how to use a storage manager for invoking a data retrieval operation on a model class `Book`:

    var storageAdapter = {name:"IndexedDB", dbName:"Test"};
    var storageManager = new sTORAGEmANAGER( storageAdapter);
    storageManager.retrieveAll( Book).then( list); 


Since the IndexedDB technology is much more powerful, it is normally preferred for local data storage. However, older browsers (such as IE 9) may not support it. In this case we can easily fall back to LocalStorage in the followig way:

    var storageAdapter = {dbName:"VocabularyTraining"},
        storageManager = null;
    if (!("indexedDB" in window)) {
      console.log("This browser doesn't support IndexedDB. Falling back to LocalStorage.");
      storageAdapter.name = "LocalStorage";
    } else {
      storageAdapter.name = "IndexedDB";
    }
    storageManager = new sTORAGEmANAGER( storageAdapter);


## Use Case 3: Declarative Constraint Valdiation

cLASSjs allows defining property constraints in a model class created with cLASS:

    var Book = new cLASS({
      Name: "Book",
      properties: {
        "id": {range:"NonEmptyString", label:"ISBN", pattern:/\b\d{9}(\d|X)\b/,
            patternMessage:"The ISBN must be a 10-digit string or a 9-digit string followed by 'X'!"},
        "title": {range:"NonEmptyString", min: 2, max: 50}, 
        "year": {range:"Integer", min: 1459, max: util.nextYear()},
        "edition": {range:"PositiveInteger", optional: true}
      }
    });

The constraints defined for a property in a model class can be checked on input/change and before submit in an HTML form and, in addition, before commit in the `add` and `update` methods of a storage manager, using the generic validation method `cLASS.check`, as shown in the follwoing example:

    var formEl = document.querySelector("#Book-Create > form");
    // loop over Book.properties add event listeners for validation on input
    Object.keys( Book.properties).forEach( function (prop) {
      var propDecl = Book.properties[prop];
      formEl[prop].addEventListener("input", function () {
        var errMsg = **cLASS.check**( prop, propDecl, formEl[prop].value).message;
        formEl[prop].setCustomValidity( errMsg);
      });
    });
