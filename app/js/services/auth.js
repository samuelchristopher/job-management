angular.module('jobManagement')
  .factory('Auth', ['$window', '$firebaseAuth', '$rootScope', 'FlashService', '$location', Auth]);

function Auth($window, $firebaseAuth, $rootScope, FlashService, $location) {
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
      FlashService.toast('Could not update your email.', 'OK');
    });
  };

  var changePassword = function(email, oldPassword, newPassword) {
    authObj.$changePassword({
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword
    }).then(function() {
      FlashService.toast('Your password has been changed!', 'OK');
      login(email, newPassword);
    }).catch(function(error) {
      FlashService.toast('Could not change your password.', 'OK');
    });
  };

  var getUser = function() {
    var user = JSON.parse($window.localStorage.getItem('firebase:session::job-management'));
    return user;
  }


  return {
    login: login,
    logout: logout,
    getUser: getUser,
    getAuth: getAuth,
    authRef: authRef,
    createUser: createUser,
    updateEmail: updateEmail,
    changePassword: changePassword
  };
}
