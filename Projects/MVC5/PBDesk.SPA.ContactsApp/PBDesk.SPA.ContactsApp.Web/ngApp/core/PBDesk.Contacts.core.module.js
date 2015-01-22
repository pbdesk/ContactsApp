(function () {
    'use strict';

    angular.module('PBDesk.Contacts.Core', [
        'ngAnimate', 'ngRoute', 'ngSanitize',
        'blocks.exception', 'blocks.logger', 'blocks.router',
        'GoogleFeedsApp',
        'angular-data.DSCacheFactory'
    ]);
})();
