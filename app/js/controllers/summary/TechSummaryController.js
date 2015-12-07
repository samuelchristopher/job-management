angular.module('jobManagement')
  .controller('TechSummaryController', ['$scope', TechSummaryController]);

function TechSummaryController($scope) {
  $scope.foo = 'foo bar baz';
}
