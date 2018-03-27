import angular from 'angular';

export class TodoMinLength {
    constructor($ngModel, $validators) {
        'ngInject';
        'ngModel';
        this.restrict = 'A';
        //this.$timeout = $timeout;
        this.valid = false;
    }

    link($scope, $element, $attrs, $ctrl) {
        /* $scope.$watch($attrs.ngModel, (newValue, oldValue) => {
          if (!newValue) {
            return false;
          }
          if (newValue.length > 20) {
              return true;
          } else {
              return false;
          }
    
          //this.$timeout(() => $element[0].focus());
        }); */
        $scope.todoForm.todoText.$validators.todoMinLength = (value) => {

            if (!value) {
                return false;
            }
            
            if (value.length > 20) {
                return true;
            } else {
                return false;
            }
        }
    }
}

