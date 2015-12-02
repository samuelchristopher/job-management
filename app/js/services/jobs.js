angular.module('jobManagement')
  .factory('JobsService', [ '$firebaseArray', '$firebaseObject', JobsService]);

function JobsService($firebaseArray, $firebaseObject) {
  var ref = new Firebase('https://job-management.firebaseio.com/jobs');
  var refURL = 'https://job-management.firebaseio.com/jobs/';
  var jobs = $firebaseArray(ref);
  var getJobs = function() {
    return jobs;
  };

  var getJobsObject = function() {
    var jobsObject = $firebaseObject(ref);
    return jobsObject;
  };

  var addJob = function(name, createdBy, desc, customer, tags) {
    var newJob = {
      name: name,
      belongings: tags,
      customer: customer,
      createdBy: createdBy,
      desc: desc,
      date: new Date().getTime(),
      comment: '',
      completed: false
    };
    jobs.$add(newJob);
  };

  var getJobObject = function(id) {
    var jobRefURL = refURL + id;
    var job = $firebaseObject(new Firebase(jobRefURL));
    return job;
  };

  var getJobArray = function(id) {
    var jobRefURL = refURL + id;
    var job = $firebaseArray(new Firebase(jobRefURL));
    return job;
  }

  var jobComment = function(comment, id) {
    var job = getJobObject(id);
    job.$loaded().then(function() {
      job.comment = comment;
      job.$save();
    });
  };

  var completed = function(id) {
    var job = getJobObject(id);
    job.$loaded().then(function() {
      job.completed = true;
      job.$save();
    });
  };

  return {
    getJobs: getJobs,
    getJobsObject: getJobsObject,
    addJob: addJob,
    getJobObject: getJobObject,
    jobComment: jobComment,
    completed: completed
  };
}
