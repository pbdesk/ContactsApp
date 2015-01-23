(function () {
    'use strict';

    angular
        .module('PBDesk.Contacts')
        .controller('EditController', EditController);

    EditController.$inject = ['$location', 'ContactsCRUDFactory'];

    function EditController($location, ContactsCRUDFactory) {
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
                    alert(vm.items.length);
                },function (result, status, headers, httpconfig) {
                    alert("error");
                });
        }
    }
})();
