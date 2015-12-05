angular.module('jobManagement')
  .controller('TechController', ['JobsService', '$scope', TechController]);

function TechController(JobsService, $scope) {
  var jobs = JobsService.getJobs();
  jobs.$loaded().then(function() {
    angular.forEach(jobs, function(job) {
      job.date = new Date(job.date).toDateString();
    });
    $scope.jobs = jobs;
  });
}
