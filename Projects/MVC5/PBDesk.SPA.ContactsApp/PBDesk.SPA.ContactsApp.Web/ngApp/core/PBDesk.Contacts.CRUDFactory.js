(function () {
    'use strict';

    angular
        .module('PBDesk.Contacts')
        .factory('PBDesk.Contacts.CRUDFactory', CRUDFactory);

    CRUDFactory.$inject = ['$http','$q'];

    function CRUDFactory($http,$q) {
        var service = {
        	GetItems: _getItems,
        	GetItem: _getItem,
        	AddItem: _addItem,
        	UpdItem: _updItem,
        	DelItem: _delItem
        };

        return service;

        var _getItems = function (config) {
        	var deferred = $q.defer();
        }

        
    }
})();