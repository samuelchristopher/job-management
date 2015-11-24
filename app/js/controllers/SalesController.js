angular.module('jobManagement')
  .controller('SalesController', ['$scope', 'JobsService', SalesController]);

function SalesController($scope, JobsService) {
  $scope.message = 'Sales page';
  $scope.jobs = JobsService.getJobs();
}
