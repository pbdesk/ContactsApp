angular.module('app',['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource){
     //$scope.test = 'ng binding is working';
     
    /* $scope.contacts = [
          {name: 'xyz abc', email: 'a@a.com'},
          {name: 'pqr uvw', email: 'p@p.com'},
          {name: 'ooo bcd', email: 'q@q.com'}
          ];*/
     
     $scope.contacts = $resource('/api/contacts').query();
          
          
});