angular.module('jobManagement')
  .directive("inverseCompareTo", inverseCompareTo);
function inverseCompareTo() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=inverseCompareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.inverseCompareTo = function(modelValue) {
                return !(modelValue == scope.otherModelValue);
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};
