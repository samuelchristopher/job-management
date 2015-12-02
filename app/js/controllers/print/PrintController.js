angular.module('jobManagement')
  .controller('PrintController', ['$location', '$routeParams', '$scope', PrintController]);

function PrintController($location, $routeParams, $scope) {
  var id = $routeParams.id;
  $scope.customer = function () {
    var customerPath =  '/print/customer/' + id;
    $location.path(customerPath);
  };

  $scope.label = function () {
    var labelPath =  '/print/label/' + id;
    $location.path(labelPath);
  };
}
