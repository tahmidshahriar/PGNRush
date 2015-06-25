var app = angular.module('pgn', ['ngAnimate']);

app.controller('myCtrl', function($scope) {
    $scope.message = "now";
    $scope.activeTab = "home";
    $scope.clicked = false;





    $scope.setActiveTab = function(str) {
      $scope.activeTab = str;
    };

    $scope.changeHead = function(click) {
      $scope.clicked = !click;
    };




});
