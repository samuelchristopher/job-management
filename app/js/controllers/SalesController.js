angular.module('jobManagement')
  .controller('SalesController', ['$mdDialog', '$scope', 'JobsService', '$mdBottomSheet', SalesController]);

function SalesController($mdDialog, $scope, JobsService, $mdBottomSheet) {
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

  $scope.viewJob = function (e, id) {
    $mdDialog.show({
     controller: 'viewJobController',
     templateUrl: 'pages/viewJob.html',
     parent: angular.element(document.body),
     targetEvent: e,
     clickOutsideToClose: true,
     locals: {
       id: id
     }
   });
 };

}
