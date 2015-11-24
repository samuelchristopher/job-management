angular.module('jobManagement')
  .controller('ProfileController', ['currentAuth', '$scope', 'Auth', ProfileController]);

function ProfileController(currentAuth, $scope, Auth) {
  $scope.currentEmail = currentAuth.password.email;
  $scope.updateEmailText = 'Update Email';
  $scope.updateEmail = function() {
    Auth.updateEmail($scope.oldEmail, $scope.newEmail, $scope.emailPassword);
  };
}
