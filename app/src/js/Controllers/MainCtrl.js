angular.module('jobManagementApp')
  .controller('MainCtrl', ['$rootScope', 'Auth', '$scope', '$mdSidenav' ,function($rootScope, Auth, $scope, $mdSidenav) {
    $scope.thing = 'It works?';

    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

    $scope.loggedIn = Auth.isLoggedIn();

    $rootScope.$on('$routeChangeStart', function() {
      $scope.loggedIn = Auth.isLoggedIn();

      Auth.getUserData()
        .then(function(data) {
          $scope.user = data.data;
        });
    });

    $scope.doLogin = function() {
      $scope.processing = true;
      $scope.error = '';
      Auth.login($scope.loginData.email, $scope.loginData.password)
        .success(function(data) {
          $scope.processing = false;
          Auth.getUser()
            .then(function(data) {
              $scope.user = data.data;
            });
          if(data.success) {
            $location.path('/');
          } else {
            $scope.error = data.message;
          }
        });
    };

    $scope.doLogout = function() {
      Auth.logout();
      $location.path('/logout');
    };

  }]);
