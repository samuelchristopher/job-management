angular.module('jobManagement')
  .controller('TechSummaryController', ['currentAuth', '$location', 'FiltersService', '$scope', TechSummaryController]);

function TechSummaryController(currentAuth, $location, FiltersService, $scope) {
  if (!(FiltersService.admin(currentAuth))) {
    $location.path('/');
  }
  $scope.foo = 'foo bar baz';
}
