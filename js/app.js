window.jQuery = $ = require('jquery')
var navbarTop  = require('./navbarTop.js')
var calculatorNav  = require('./calculatorNav.js')
var imperial  = require('./imperial.js')
var metric  = require('./metric.js')
var calculate  = require('./calculate.js')
var check  = require('./check.js')
var caloriesTopTab  = require('./caloriesTopTab.js')
var chartFatSecret  = require('./chartFatSecret.js')
var calculatorTopTab  = require('./calculatorTopTab.js')



$(function() {
  navbarTop();
  calculatorNav();
  imperial();
  metric();
  calculate();
  check();
  caloriesTopTab();
  chartFatSecret();
  calculatorTopTab();
});
