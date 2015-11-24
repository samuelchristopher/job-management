angular.module('jobManagement')
  .controller('SalesController', ['$scope', 'JobsService', '$mdBottomSheet', SalesController]);

function SalesController($scope, JobsService, $mdBottomSheet) {
  $scope.message = 'Sales page';
  $scope.jobs = JobsService.getJobs();
  $scope.openCreateJob = function (e) {
    $mdBottomSheet.show({
      templateUrl: 'pages/createNewJob.html',
      controller: 'NewJobController',
      clickOutsideToClose: true,
      targetEvent: e
    });
  };

}
