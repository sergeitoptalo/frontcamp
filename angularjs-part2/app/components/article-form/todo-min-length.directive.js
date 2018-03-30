import angular from 'angular';

export class TodoMinLength {
    constructor() {
        'ngInject';
        'ngModel';
        this.restrict = 'A';
        this.valid = false;
    }

    link($scope, $element, $attrs, $ctrl) {
        $scope.todoForm.todoText.$validators.todoMinLength = (value) => {

            if (!value) {
                return false;
            }

            if (value.length > 10) {
                return true;
            } else {
                return false;
            }
        }
    }
}

