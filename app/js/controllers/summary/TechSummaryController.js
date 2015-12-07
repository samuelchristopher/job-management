angular.module('jobManagement')
  .controller('TechSummaryController', ['JobsService', 'currentAuth', '$location', 'FiltersService', '$scope', TechSummaryController]);

function TechSummaryController(JobsService, currentAuth, $location, FiltersService, $scope) {
  if (!(FiltersService.admin(currentAuth))) {
    return $location.path('/');
  }
  $scope.doneLoading = false;
  var jobs = JobsService.getJobs();
  jobs.$loaded().then(function() {
    $scope.jobs = jobs;
    $scope.doneLoading = true;
  })
}
