angular.module('jobManagement')
  .controller('TechController', ['FiltersService', 'currentAuth', '$location', 'JobsService', '$scope', TechController]);

function TechController(FiltersService, currentAuth, $location, JobsService, $scope) {
  if (!(FiltersService.technician(currentAuth) || FiltersService.admin(currentAuth))) {
    $location.path('/');
  }
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
