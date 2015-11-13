angular.module('jobManagementApp')
  .controller('MainCtrl', ['$scope', '$mdSidenav' ,function($scope, $mdSidenav) {
    $scope.thing = 'It works?';

    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

  }]);
