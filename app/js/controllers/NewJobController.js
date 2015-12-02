angular.module('jobManagement')
  .controller('NewJobController', ['$mdBottomSheet', 'FlashService', '$location', '$scope', 'Auth', 'JobsService', NewJobController]);

function NewJobController($mdBottomSheet, FlashService, $location, $scope, Auth, JobsService) {
  $scope.header = 'New Job';
  var user = Auth.getUser();
  $scope.createdBy = user.password.email;
  $scope.newJobText = 'Create New Job';
  $scope.createNewJob = function() {
    JobsService.addJob($scope.name, $scope.createdBy, $scope.desc, $scope.customer);
    $mdBottomSheet.hide();
    setTimeout(function() {
      FlashService.toast('Added ' + $scope.name + '!', 'OK');
    }, 99);
  };
}
