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

  var sales = function(currentAuth) {
    var isSales;
    var email = currentAuth.password.email;
    var salesAssistants = [
      'testemailofmine@gmail.com',
      'sales@one.com',
      'sales@two.com'
    ];

    for(var i = 0; i < salesAssistants.length; i++) {
      if (email === salesAssistants[i]) {
        isSales = true;
      }
    }

    if (isSales === true) {
      return true;
    } else {
      return false;
    }

  }

  var admin = function(currentAuth) {
    var email = currentAuth.password.email;
    if (email === 'admin@one.com') {
      return true;
    } else {
      return false;
    }
  };

  return {
    guest: guest,
    technician: technician,
    admin: admin,
    sales: sales
  };
}
