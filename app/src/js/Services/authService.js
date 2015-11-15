angular.module('jobManagementApp')
  .factory('Auth',['$q', '$scope', '$firebaseAuth', 'AuthToken',
  function($q, $scope, $firebaseAuth, AuthToken) {
    var ref = new Firebase('https://job-management.firebaseio.com');
    $scope.authObj = $firebaseAuth(ref);

    var authFactory = {};

    authFactory.login = function(email, password) {
      $scope.authObj.$authWithPassword({
        email: email,
        password: password
      }).then(function(authData) {
        AuthToken.setToken(authData);
        return authData;
      });
    };

    authFactory.logout = function() {
      AuthToken.setToken();
    };

    authFactory.isLoggedIn = function() {
      if(AuthToken.getToken()) {
        return true;
      } else {
        return false;
      }
    };

    authFactory.getUser = function() {
      if(AuthToken.getToken()) {
        return authData;
      } else {
        return $q.reject({
          message: 'User has no token'
        });
      }
    };

  }
])

.factory('AuthToken', ['$window', function($window) {

  var authTokenFactory = {};

  authTokenFactory.getToken = function() {
    return $window.localStorage.getItem('token');
  };

  authTokenFactory.setToken = function(token) {
    if(token) {
      $window.localStorage.setItem('token', token);
    } else {
      $window.localStorage.removeItem('token');
    }
  };

  authTokenFactory.getUser = function () {
    return $window.localStorage.getItem('firebase:session::job-management');
  }

}]);
