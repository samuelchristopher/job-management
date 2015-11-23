angular.module('jobManagement')
  .factory('FiltersService', ['$location', Filters]);

function Filters($location) {
  var guest = function(currentAuth) {
    if (currentAuth) {
      return $location.path('/');
    }
  };

  return {
    guest: guest
  };
}
