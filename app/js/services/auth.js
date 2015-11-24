angular.module('jobManagement')
  .factory('Auth', ['$firebaseAuth', '$rootScope', 'FlashService', '$location', Auth]);

function Auth($firebaseAuth, $rootScope, FlashService, $location) {
  var ref = new Firebase('https://job-management.firebaseio.com/');
  var authObj = $firebaseAuth(ref);
  var login = function (email, password, path, showMessage) {
    authObj.$authWithPassword({
      email: email,
      password: password
    }).then(function(authData) {
      $rootScope.auth = true;
      $location.path(path || '/');
      if (showMessage || true) {
        FlashService.toast('Welcome '+ email + '!', 'CLOSE');
      }
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

  var authRef = $firebaseAuth(ref);

  var createUser = function(email, password) {
    authObj.$createUser({
      email: email,
      password: password
    }).then(function(userData) {
      FlashService.toast('Welcome to the family', 'OK');
      login(email, password);
    });
  };

  var updateEmail = function(oldEmail, newEmail, password) {
    authObj.$changeEmail({
      oldEmail: oldEmail,
      newEmail: newEmail,
      password: password
    }).then(function() {
      FlashService.toast('Your email has been updated!', 'OK');
      login(newEmail, password, '/', true);
    }).catch(function(error) {
      FlashService.toast('Could not update your email', 'OK');
    });
  };


  return {
    login: login,
    logout: logout,
    getAuth: getAuth,
    authRef: authRef,
    createUser: createUser,
    updateEmail: updateEmail
  };
}
