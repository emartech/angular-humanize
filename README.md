# angular-humanize

Install
---------

    npm install --save angular-humanize-num


Usage
---------

    require('angular-humanize-num')(angular);

    var myApp = angular.module('your-app', ['humanize']);

Filter
---------

    .div {{ 555555 | humanize }} // 555k
    .div {{ 555.4444 | humanize:2 }} // 555.44k
