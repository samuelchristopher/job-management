angular.module('jobManagement')
  .controller('LabelController', ['JobsService', '$scope', '$routeParams', LabelController]);

function LabelController(JobsService, $scope, $routeParams) {
  var id = $routeParams.id;
  var job = JobsService.getJobObject(id);
  job.$loaded().then(function() {
    $scope.job = job;
    var jobDate = new Date(job.date).toDateString();
    $scope.jobDate = jobDate;
  });
}
