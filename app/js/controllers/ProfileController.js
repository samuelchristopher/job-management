angular.module('jobManagement')
  .controller('ProfileController', ['currentAuth', '$scope', 'Auth', ProfileController]);

function ProfileController(currentAuth, $scope, Auth) {
  $scope.currentEmail = currentAuth.password.email;
  $scope.updateEmailText = 'Update Email';
  $scope.updateEmail = function() {
    Auth.updateEmail($scope.oldEmail, $scope.newEmail, $scope.emailPassword);
    $scope.updateEmailText = 'Processing...';
    setTimeout(function() {
      $scope.updateEmailText = 'Update Email';
    }, 500);
  };

  $scope.changePasswordText = 'Change Password';
  $scope.changePassword = function() {
    Auth.changePassword($scope.email, $scope.oldPassword, $scope.newPassword);
    $scope.changePassword = 'Processing...';
    setTimeout(function() {
      $scope.changePassword = 'Change Password';
    }, 500);
  }
}
