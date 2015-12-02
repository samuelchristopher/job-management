angular.module('jobManagement')
  .controller('CustomerController', ['$routeParams', 'JobsService', '$scope', CustomerController]);

function CustomerController($routeParams, JobsService, $scope) {
  var job = JobsService.getJobObject($routeParams.id);
  job.$loaded().then(function() {
    $scope.job = job;
    $scope.customer = job.customer;
  });
}
