angular.module('jobManagement')
  .controller('NewJobController', ['$mdConstant', '$mdBottomSheet', 'FlashService', '$location', '$scope', 'Auth', 'JobsService', NewJobController]);

function NewJobController($mdConstant, $mdBottomSheet, FlashService, $location, $scope, Auth, JobsService) {
  $scope.header = 'New Job';
  var user = Auth.getUser();
  $scope.createdBy = user.password.email;
  $scope.newJobText = 'Create New Job';
  $scope.tags = [];
  $scope.createNewJob = function() {
    JobsService.addJob($scope.name, $scope.createdBy, $scope.desc, $scope.customer, $scope.tags);
    $mdBottomSheet.hide();
    setTimeout(function() {
      FlashService.toast('Added ' + $scope.name + '!', 'OK');
    }, 99);
  };
}
