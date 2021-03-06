angular.module('jobManagement')
  .controller('AllController', ['$location', 'FiltersService', 'currentAuth', '$scope', AllController]);

function AllController($location, FiltersService, currentAuth, $scope) {
  if (!(FiltersService.admin(currentAuth))) {
    return $location.path('/');
  }

  $scope.gotoTechnicianSummary = function() {
    return $location.path('/summary/technician');
  }
}
