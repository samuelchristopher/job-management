angular.module('jobManagement')
  .factory('FiltersService', ['$location', Filters]);

function Filters($location) {
  var guest = function(currentAuth) {
    if (currentAuth) {
      return $location.path('/');
    }
  };

  var technician = function(currentAuth) {
    var isTechnician;
    var technicians = [
      'thesamchris@gmail.com',
      'tech@one.com',
      'tech@two.com'
    ];
    for(var i =0; i < technicians.length; i++) {
      if(currentAuth.password.email === technicians[i]) {
        isTechnician = true;
      }
    }
    if(!isTechnician) {
      return false;
    } else {
      return isTechnician;
    }
  };

  return {
    guest: guest,
    technician: technician
  };
}
