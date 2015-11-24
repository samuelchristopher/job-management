angular.module('jobManagement')
  .factory('JobsService', ['$firebaseArray', JobsService]);

function JobsService($firebaseArray) {
  var ref = new Firebase('https://job-management.firebaseio.com/jobs');
  var jobs = $firebaseArray(ref);
  var getJobs = function() {
    return jobs;
  };

  return {
    getJobs: getJobs
  };
}
