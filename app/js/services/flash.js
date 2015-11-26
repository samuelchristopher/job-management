angular.module('jobManagement')
  .factory('FlashService', ['$rootScope', '$mdToast', FlashService]);

function FlashService($rootScope, $mdToast) {
  return {
    show: function(message) {
      $rootScope.flash = message;
    },
    clear:  function() {
      $rootScope.flash = '';
    },
    toast: function(message, action) {
      var toast = $mdToast.simple()
            .content(message)
            .action(action)
            .highlightAction(false)
            .position('bottom left');
      setTimeout(function() {
        $mdToast.show(toast);
      }, 99);

    },
  };
}
