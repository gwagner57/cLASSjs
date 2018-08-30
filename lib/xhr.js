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
   * Make an XHR OPTIONS request
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