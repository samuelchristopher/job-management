angular.module('jobManagement')
  .controller('viewJobController', ['FlashService', '$mdDialog', 'JobsService', 'id', '$scope', viewJobController]);

function viewJobController(FlashService, $mdDialog, JobsService, id, $scope) {
  var job = JobsService.getJobObject(id);
  $scope.viewJobText = 'Save';
  job.$loaded().then(function() {
      $scope.label = job.name;
      $scope.job = job;
   });
  $scope.closeDialog = function() {
    $mdDialog.hide();
  };

  $scope.saveComment = function() {
    JobsService.jobComment($scope.job.comment, job.$id);
    $scope.viewJobText = 'Saved!';
    $mdDialog.hide();
    FlashService.toast('Comment has been saved.', 'OK');
  };

  $scope.jobCompleted = function() {
    JobsService.completed(id);
    FlashService.toast('Job has been completed.', 'OK');
    $mdDialog.hide();
  };
}
