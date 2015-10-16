'use strict';

var MODULE_NAME = 'humanize';
var humanize = require('humanize-num');

module.exports = function(angular) {
  angular
    .module(MODULE_NAME, [])
    .filter('humanize', [function() {
      return humanize;
    }]);
  return MODULE_NAME;
};
