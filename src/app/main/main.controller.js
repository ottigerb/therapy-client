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
        selectedIndex: 0,
        secondLocked: false,
        secondLabel: "Groups"
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


    $scope.todos = [{
        face: 'https://material.angularjs.org/img/list/60.jpeg',
        what: '21.5.1973 | 41 Lj.',
        who: 'Ottiger Beat',
        when: '3:08PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    }, {
        face: 'https://material.angularjs.org/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Müller Johannes',
        when: '3:08PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    }, {
        face: 'https://material.angularjs.org/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan Gowanabe',
        when: '3:08PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    }, {
        face: 'https://material.angularjs.org/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Luc Suver',
        when: '3:08PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    }, {
        face: 'http://media.musiciansfriend.com/is/image/MMGS7/G6120DC-Chet-Atkins-Nashville-Electric-Guitar-Western-Maple-Stain/512990000971000-00-750x750.jpg',
        what: 'Brunch this weekend?',
        who: 'Ottiger Beat',
        when: '3:08PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    }, {
        face: 'https://material.angularjs.org/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Müller Johannes',
        when: '3:08PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    }, {
        face: 'https://material.angularjs.org/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan Gowanabe',
        when: '3:08PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    }, {
        face: 'http://www.mia-and-me.com/de/wp-content/uploads/sites/2/media/Mia-and-me_Mia.png',
        what: 'Schwimmen',
        who: 'Szirnyi Marisa',
        when: '3:08PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    }, {
        face: 'https://material.angularjs.org/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Ottiger Beatus',
        when: '3:08PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    }, {
        face: 'http://www.metropolisplus.com/superman/SupermanJLBColorWeb.jpg',
        what: 'Mein Superman',
        who: 'Szirnyi Sascha',
        when: '3:08PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    }, {
        face: 'https://material.angularjs.org/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan Gowanabe',
        when: '1:08PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    }, {
        face: 'https://material.angularjs.org/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Luc Suver',
        when: '3:09PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    }, {
        face: 'https://material.angularjs.org/img/list/60.jpeg',
        what: 'Brunch this weekend?',
        who: 'Martina Szirnyi',
        when: '3:08PM',
        notes: 'Bemerkungen sind hier gespeichert.'
    } ];


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