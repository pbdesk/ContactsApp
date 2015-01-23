(function () {
    'use strict';

    angular
        .module('PBDesk.Contacts')
        .controller('ListController', ListController);

    ListController.$inject = ['$location', 'ContactsCRUDFactory'];

    function ListController($location, ContactsCRUDFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'PBDesk';
        vm.items = [];
        vm.viewMode = "list";

        vm.SetViewMode = function (viewMode) {
            vm.viewMode = viewMode;
        }

        activate();

        function activate() {
            ContactsCRUDFactory
                .GetItems()
                .then(function (result, status, headers, httpconfig) {
                    angular.copy(result, vm.items);
                },function (result, status, headers, httpconfig) {
                    alert("error");
                });
        }
    }
})();
