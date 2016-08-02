angular.module('ExampleApp', ['seekers01.angular-modal']).
    controller('ExampleCtrl', function ($scope) {
        $scope.showModal1 = false;
        $scope.showModal2 = false;
        // Required for two way sharing between modal and container
        $scope.sharedScope = {};

        $scope.toggleModal1 = function(){
            $scope.showModal1 = !$scope.showModal1;
        };

        $scope.toggleModal2 = function(){
            $scope.showModal2 = !$scope.showModal2;
        };

        $scope.parentFunction = function(){
            alert("Parent Function called");
        };


    })
    .controller('ModalCtrl2', function($scope){
        $scope.welcome = "Welcome text from independent controller.";

        $scope.selfFunction = function(){
            alert("Self Function called.");
        };
    });