'use strict';


app.controller('MainCtrl', function($scope, $timeout, $mdSidenav, $mdBottomSheet, app_factory) {



    // --------------------------------------------------
    // inject factory :: app_factory
    // --------------------------------------------------
    $scope.data = app_factory;


    // --------------------------------------------------
    // Navbar - Left
    // --------------------------------------------------

    $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();
    };


    $scope.data.navbar = {
        selectedIndex: 0
    };

    $scope.next = function() {
        $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
    };

    $scope.previous = function() {
        $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };

    // --------------------------------------------------
    // To delete
    // --------------------------------------------------


    $scope.openBottomSheet = function() {
        $mdBottomSheet.show({
            template: '<div style="height:112px;"><div layout="row"><div flex="33">[flex="33"]</div><div flex>Current Patient</div><div flex="33">[flex]</div></div></div>'
        });
    };



    // --------------------------------------------------
    // Debug
    // --------------------------------------------------
    console.log('$scope.data: ', $scope.data);



});

app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
        $mdSidenav('left').close();
    };
});