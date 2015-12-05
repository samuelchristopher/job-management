angular.module('jobManagement')
  .controller('TechController', ['$location', 'JobsService', '$scope', TechController]);

function TechController($location, JobsService, $scope) {
  var jobs = JobsService.getJobs();
  jobs.$loaded().then(function() {
    angular.forEach(jobs, function(job) {
      job.date = new Date(job.date).toDateString();
    });
    $scope.jobs = jobs;
  });

  $scope.editJob = function(id) {
    $location.path('/job/' + id);
  };
}
