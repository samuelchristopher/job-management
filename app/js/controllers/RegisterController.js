angular.module('jobManagement')
  .controller('RegisterController', ['FiltersService','currentAuth', '$scope', 'Auth', 'FlashService', RegisterController]);

function RegisterController(FiltersService, currentAuth, $scope, Auth, FlashService) {
  FiltersService.guest(currentAuth);
  $scope.thing = 'Register Page';
}
