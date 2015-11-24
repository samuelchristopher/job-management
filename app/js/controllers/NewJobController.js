angular.module('jobManagement')
  .controller('NewJobController', ['$scope', 'Auth', 'JobsService', NewJobController]);

function NewJobController($scope, Auth, JobsService) {
  $scope.header = 'New Job';
  var user = Auth.getUser();
  $scope.createdBy = user.password.email;
  $scope.newJobText = 'Create New Job';
  $scope.createNewJob = function() {

  };
}
