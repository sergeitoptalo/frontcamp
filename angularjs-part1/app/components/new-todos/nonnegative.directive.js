import angular from 'angular';

export class Nonnegative {
    constructor($ngModel, $validators) {
        'ngInject';
        'ngModel';
        this.restrict = 'A';
    }

    link($scope, $element, $attrs) {
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
