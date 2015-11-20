angular.module('jobManagement')
  .factory('AuthService', ['$firebaseAuth', 'FlashService', '$location', AuthService]);

function AuthService($firebaseAuth, FlashService, $location) {
  var ref = 'https://job-management.firebaseio.com/';
  var authObj = $firebaseAuth(ref);
  var login = function (email, password) {
    authObj.$authWithPassword({
      email: email,
      password: password
    }).then(function(authData) {
      return authData;
    }).catch(function(err) {
      FlashService.toast(err, 'OK');
    });
  };

  var logout = function () {
    authObj.$unauth();
    $location.path('/login');
    FlashService.toast('See you later!', 'CLOSE');
  };

  return {
    login: login,
    logout: logout
  };
}
