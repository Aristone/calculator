"use strict";

// // es5 polyfills, powered by es5-shim
 require("es5-shim")
// // es6 polyfills, powered by babel
 require("babel/register")

// var Promise = require('es6-promise').Promise
// // just Node?
// // var fetch = require('node-fetch')
// // Browserify?
 require('whatwg-fetch') //--> not a typo, don't store as a var

// // other stuff that we don't really use in our own code
// // var Pace = require("../bower_components/pace/pace.js")
var $ = require("jquery")
// // require your own libraries, too!

 // var Backbone = require("backbone")
 // var Router = require('./app.js')

// window.addEventListener('load', app)

$( ".input.hidden" ).slideDown( 600 );



// function app() {
    // start app
    // new Router()
// }

