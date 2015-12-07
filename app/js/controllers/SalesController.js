angular.module('jobManagement')
  .controller('SalesController', ['currentAuth', 'FiltersService', '$location', '$mdToast', 'FlashService', '$mdDialog', '$scope', 'JobsService', '$mdBottomSheet', SalesController]);

function SalesController(currentAuth, FiltersService, $location, $mdToast, FlashService, $mdDialog, $scope, JobsService, $mdBottomSheet) {
  if (!(FiltersService.sales(currentAuth) || FiltersService.admin(currentAuth))) {
    return $location.path('/');
  }
  $scope.message = 'Sales page';
  $scope.jobsLoaded = false;
  $scope.jobs = JobsService.getJobs();
  $scope.jobs.$loaded().then(function() {
    $scope.jobsLoaded = true;
  })
  var jobs = JobsService.getJobs();
  jobs.$watch(function(e) {
    if(e.event == 'child_changed') {
      var job = JobsService.getJobObject(e.key);
      job.$loaded().then(function() {
        FlashService.toast(job.name + ' was updated.', 'OK');
      });
    }
  });

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

 $scope.print = function (id) {
   $location.path('/print/' + id);
 };

}
