angular.module('jobManagement')
  .controller('viewJobController', ['$mdDialog', 'JobsService', 'id', '$scope', viewJobController]);

function viewJobController($mdDialog, JobsService, id, $scope) {
  var job = JobsService.getJobObject(id);
  job.$loaded().then(function() {
      $scope.label = job.name;
      $scope.job = job;
   });
  $scope.closeDialog = function() {
    $mdDialog.hide();
  };

  $scope.saveComment = function() {
    JobsService.jobComment($scope.job.comment, job.$id);
  };
}
