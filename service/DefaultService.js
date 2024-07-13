'use strict';


/**
 * Login a user
 *
 * body Auth_login_body 
 * returns AuthResponse
 **/
exports.authLoginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "accessToken" : "accessToken",
    "user" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "password" : "password",
      "phone" : "phone",
      "userId" : "userId",
      "email" : "email"
    }
  },
  "message" : "message",
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register a new user
 *
 * body User 
 * returns AuthResponse
 **/
exports.authRegisterPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "accessToken" : "accessToken",
    "user" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "password" : "password",
      "phone" : "phone",
      "userId" : "userId",
      "email" : "email"
    }
  },
  "message" : "message",
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

