'use strict';

angular.module('seekers01.angular-modal', [])
    .directive('customModal', [function () {
        return {
            restrict: 'EA',
            scope: {
                "customModalShow": '=',
                "sharedScope": '&'
            },
            templateUrl: '../directive/modal-template.html',
            transclude: true,
            controller: ['$scope',
                function ($scope) {
                    $scope.hideModal = function () {
                        $scope.customModalShow = false;
                    }
                }]
        };
}]);