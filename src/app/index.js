'use strict';

var app = angular.module('therapyClient', ['optinomic-logo', 'ngFx', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        })

    .when('/patient/:pid', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
    })
        .otherwise({
            redirectTo: '/'
        });
});






app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryColor('blue-grey', {
            'default': '800', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': '900', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '300', // use shade 800 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentColor('indigo', {
        'default': '500', // use shade 500 for default, and keep all other shades the same
        'hue-1': '800', // use shade 100 for the <code>md-hue-1</code> class
        'hue-2': '300', // use shade 800 for the <code>md-hue-2</code> class
        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
        .warnColor('pink', {
            'default': '500', // use shade 500 for default, and keep all other shades the same
            'hue-1': '800', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '300', // use shade 800 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        });
});




// Resize (optinomic-page) - height 
app.directive('resize', function($window) {
    return function(scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function() {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };

        scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            scope.style = function() {

                if (newValue.w >= 960) {
                    return {
                        'height': (newValue.h - 75) + 'px',
                        'width': 100 + '%'
                    };
                }
            };
            scope.styleNavbar = function() {
                return {
                    'height': (newValue.h - 115) + 'px',
                    'width': 100 + '%'
                };
            };


        }, true);

        w.bind('resize', function() {
            scope.$apply();
        });
    }
})