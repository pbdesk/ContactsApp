(function () {
    'use strict';

    angular
        .module('PBDesk.Contacts')
        .controller('CreateController', CreateController);

    CreateController.$inject = ['$location', 'ContactsCRUDFactory'];

    function CreateController($location, ContactsCRUDFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'PBDesk';
        vm.items = [];

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
