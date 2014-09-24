angular.module('app',[]);

angular.module('app').controller('testCtrl', function($scope){
     //$scope.test = 'ng binding is working';
     $scope.contacts = [
          {name: 'xyz abc', email: 'a@a.com'},
          {name: 'pqr uvw', email: 'p@p.com'},
          {name: 'ooo bcd', email: 'q@q.com'}
          ];
});