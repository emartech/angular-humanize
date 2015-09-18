'use strict';

const MODULE_NAME = 'humanize';
const humanize = require('humanize-num');

module.exports = function(angular) {
  angular
    .module(MODULE_NAME, [])
    .filter('humanize', [() => humanize]);
  return MODULE_NAME;
};
