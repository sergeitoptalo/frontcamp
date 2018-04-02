import angular from 'angular';

export class ArticleMinLength {
    constructor() {
        'ngInject';
        'ngModel';
        this.restrict = 'A';
        this.valid = false;
    }

    link($scope, $element, $attrs, $ctrl) {
        $scope.articleForm.articleText.$validators.articleMinLength = (value) => {

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

