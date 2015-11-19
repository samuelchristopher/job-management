angular.module('jobManagement')
  .controller('MainController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.thing = 'Hello World';
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
  }
]);
