angular.module('jobManagement')
  .factory('JobsService', ['$firebaseArray', JobsService]);

function JobsService($firebaseArray) {
  var ref = new Firebase('https://job-management.firebaseio.com/jobs');
  var jobs = $firebaseArray(ref);
  var getJobs = function() {
    return jobs;
  };

  var addJob = function(name, customerName, createdBy, desc, dueDate) {
    var newJob = {
      name: name,
      customerName: customerName,
      createdBy: createdBy,
      desc: desc,
      dueDate: new Date(String(dueDate)).getTime() / 1000
    };
    jobs.$add(newJob);
  };

  return {
    getJobs: getJobs,
    addJob: addJob
  };
}
