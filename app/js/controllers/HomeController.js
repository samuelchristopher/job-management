angular.module('jobManagement')
  .controller('HomeController', ['JobsService', 'currentAuth', '$rootScope', '$scope', '$location', 'Auth', 'FlashService', HomeController]);

function HomeController(JobsService, currentAuth, $rootScope, $scope, $location, Auth, FlashService) {
  $scope.user = currentAuth.password;
  var jobs = JobsService.getJobs();
  jobs.$loaded().then(function() {
    updateCounters(jobs);
  });

  jobs.$watch(function(e) {
    updateCounters(jobs);
  });

  function updateCounters(jobs) {
    var completedCount = 0;
    var pendingCount = 0;
    angular.forEach(jobs, function(job, key) {
      if (job.completed) {
        completedCount++;
      } else {
        pendingCount++;
      }
    });
    $scope.pendingCount = pendingCount;
    $scope.completedCount = completedCount;
  }


}
