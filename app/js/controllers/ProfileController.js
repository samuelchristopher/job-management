angular.module('jobManagement')
  .controller('ProfileController', ['$scope', 'FlashService', ProfileController]);

function ProfileController($scope, FlashService) {
  $scope.updateEmailText = 'Update Email';
  var updateEmail = function() {
    if ($scope.oldEmail === $scope.newEmail) {
      FlashService.toast('New email cannot be the same as old email', 'OK');
      $scope.newEmail = '';
    }

  };
};
