(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// "use strict";

// // es5 polyfills, powered by es5-shim
// require("es5-shim")
// // es6 polyfills, powered by babel
// require("babel/register")

// var Promise = require('es6-promise').Promise
// // just Node?
// // var fetch = require('node-fetch')
// // Browserify?
// // require('whatwg-fetch') //--> not a typo, don't store as a var

// // other stuff that we don't really use in our own code
// // var Pace = require("../bower_components/pace/pace.js")

// // require your own libraries, too!

// // var Backbone = require(back)
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
// start app
// new Router()
// }

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAtYnJvd3NlcmlmeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIC8vIGVzNSBwb2x5ZmlsbHMsIHBvd2VyZWQgYnkgZXM1LXNoaW1cbi8vIHJlcXVpcmUoXCJlczUtc2hpbVwiKVxuLy8gLy8gZXM2IHBvbHlmaWxscywgcG93ZXJlZCBieSBiYWJlbFxuLy8gcmVxdWlyZShcImJhYmVsL3JlZ2lzdGVyXCIpXG5cbi8vIHZhciBQcm9taXNlID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlXG4vLyAvLyBqdXN0IE5vZGU/XG4vLyAvLyB2YXIgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJylcbi8vIC8vIEJyb3dzZXJpZnk/XG4vLyAvLyByZXF1aXJlKCd3aGF0d2ctZmV0Y2gnKSAvLy0tPiBub3QgYSB0eXBvLCBkb24ndCBzdG9yZSBhcyBhIHZhclxuXG4vLyAvLyBvdGhlciBzdHVmZiB0aGF0IHdlIGRvbid0IHJlYWxseSB1c2UgaW4gb3VyIG93biBjb2RlXG4vLyAvLyB2YXIgUGFjZSA9IHJlcXVpcmUoXCIuLi9ib3dlcl9jb21wb25lbnRzL3BhY2UvcGFjZS5qc1wiKVxuXG4vLyAvLyByZXF1aXJlIHlvdXIgb3duIGxpYnJhcmllcywgdG9vIVxuXG4vLyAvLyB2YXIgQmFja2JvbmUgPSByZXF1aXJlKGJhY2spXG4vLyB2YXIgUm91dGVyID0gcmVxdWlyZSgnLi9hcHAuanMnKVxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFwcClcblxuLy8gZnVuY3Rpb24gYXBwKCkge1xuLy8gc3RhcnQgYXBwXG4vLyBuZXcgUm91dGVyKClcbi8vIH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSXZWWE5sY25NdllYSnBjM1J2Ym14bGQybHpMMGRwZEdoMVlpQlFjbTlxWldOMGN5OWpZV3hqZFd4aGRHOXlMMnB6TDJGd2NDMWljbTkzYzJWeWFXWjVMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2x0ZGZRPT0iXX0=
