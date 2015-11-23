angular.module('jobManagement')
  .factory('Auth', ['$firebaseAuth', '$rootScope', 'FlashService', '$location', Auth]);

function Auth($firebaseAuth, $rootScope, FlashService, $location) {
  var ref = new Firebase('https://job-management.firebaseio.com/');
  var authObj = $firebaseAuth(ref);
  var login = function (email, password) {
    authObj.$authWithPassword({
      email: email,
      password: password
    }).then(function(authData) {
      $rootScope.auth = true;
      $location.path('/');
      FlashService.toast('Welcome '+ email + '!', 'CLOSE');
    }).catch(function(err) {
      FlashService.toast('Could not log you in!', 'TRY AGAIN');
    });
  };

  var logout = function () {
    authObj.$unauth();
    $location.path('/login');
    $rootScope.auth = false;
    FlashService.toast('See you later!', 'CLOSE');
  };

  var getAuth = function () {
    if(authObj.$getAuth()) {
      return true;
    } else {
      return false;
    }
  };

  return {
    login: login,
    logout: logout,
    getAuth: getAuth
  };
}
