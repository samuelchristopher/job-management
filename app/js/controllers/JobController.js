angular.module('jobManagement')
  .controller('JobController', ['currentAuth', 'FlashService', 'JobsService', '$routeParams', '$scope', JobController]);

function JobController(currentAuth, FlashService, JobsService, $routeParams, $scope) {
  $scope.jobLoaded = false;
  var job = JobsService.getJobObject($routeParams.id);
  job.$loaded().then(function() {
    $scope.job = job;
    $scope.customer = job.customer;
    $scope.jobLoaded = true;
  });

  $scope.saveJob = function() {
    job.attendedBy = currentAuth.password.email;
    job.updated = true;
    job.$save();
    FlashService.toast('Details were saved.', 'OK');
  };
}
