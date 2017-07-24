# cLASSjs
A JS library for defining enumerations, constructor-based classes, and class hierarchies, with semantic meta-data for declarative constraint validation and for generating model-based CRUD user interfaces.

## Use Case 1: Enumerations and Enumeration Attributes

### Defining an Enumeration

    var WeatherStateEL = new eNUMERATION ("WeatherStateEL", 
        ["sunny", "partly cloudy", "cloudy", "cloudy with rain", "rainy"]);

### Using an Enumeration as the Range of an Attribute

    var Weather = new cLASS({
        Name: "Weather",
        supertypeName: "oBJECT",
        properties: {
          "weatherState": {
              range: WeatherStateEL,
              label: "Weather conditions",
              shortLabel: "cond"
          },
          "temperature": {
              range: "Decimal",
              label: "Temperature"
          }
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


## Use Case 2: Declarative Constraint Valdiation

T.B.D-
