/**
 * Enumeration QuestionTypeEL
 * @enum
 */
vt.RenderingModeEL = new eNUMERATION("RenderingModeEL",["single problem", "multiple problems"]);

/**
 * Object type
 * @class
 */
vt.RenderingForm = new cLASS({
  Name: "RenderingForm",
  primaryKey: "name",
  properties: {
    "name": {range:"NonEmptyString", min: 2, max: 200, label:"Title"},
    "description": {range:"NonEmptyString", min: 10, max: 1000,
      label:"Description"},
    "renderingMode": {range:"RenderingModeEL", label:"Rendering mode"}
  },
  methods: {
  }
});
