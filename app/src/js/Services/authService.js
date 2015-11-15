angular.module('authService',  [])
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
      if(AuthToken.getUser()) {
        return true;
      } else {
        return false;
      }
    };

    authFactory.getUser = function() {
      if(AuthToken.getUserData()) {
        return AuthToken.getUserData();
      } else {
        return $q.reject({
          message: 'User has no token'
        });
      }
    };

    return authFactory;

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

  authTokenFactory.getUserData = function () {
    return $window.localStorage.getItem('firebase:session::job-management');
  }

  return authTokenFactory;

}])

.factory('AuthInterceptor', ['$q', '$location', 'AuthToken', function($q, $location, AuthToken) {

  var interceptorFactory = {};

  interceptorFactory.request = function(config) {
    var token = AuthToken.getUser().token;

    if(token) {
      config.headers['x-access-token'] = token;
    }

    return config;
  };

  interceptorFactory.responseError = function(res) {
    if(res.status === 403) {
      $location.path('/login');
    }

    return $q.reject(res);
  };

  return interceptorFactory;
}]);
