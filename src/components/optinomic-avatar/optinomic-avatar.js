angular.module('therapyClient').directive('optinomicAvatar', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            patientInfo: '='
        },
        templateUrl: '/components/optinomic-avatar/optinomic-avatar.html',
        link: function(scope, element, attrs, fn) {

            console.log('optinomicAvatar - Controller');

            // --------------------------------
            // Initialen
            // --------------------------------
            scope.initialen = scope.patientInfo.lastName.substring(0, 1) + scope.patientInfo.firstName.substring(0, 1);
            //console.log('scope.patientInfo: ', scope.patientInfo);

            // --------------------------------
            // Färben
            // --------------------------------
            if (scope.patientInfo.gender === 'male') {
                // --------------
                // BLAU
                // --------------
                scope.farbe = '#E8EAF6';
                scope.text1_dunkel = '#303F9F';
                scope.text1_hell = '#C5CAE9';


                scope.text1 = scope.text1_dunkel;

                if (scope.patientInfo.age >= 10) {
                    scope.farbe = '#C5CAE9';
                    scope.text1 = scope.text1_dunkel;
                }
                if (scope.patientInfo.age >= 20) {
                    scope.farbe = '#9FA8DA';
                    scope.text1 = scope.text1_dunkel;
                }
                if (scope.patientInfo.age >= 30) {
                    scope.farbe = '#7986CB';
                    scope.text1 = scope.text1_dunkel;
                }
                if (scope.patientInfo.age >= 40) {
                    scope.farbe = '#5C6BC0';
                    scope.text1 = scope.text1_hell;
                }
                if (scope.patientInfo.age >= 50) {
                    scope.farbe = '#3F51B5';
                    scope.text1 = scope.text1_hell;
                }
                if (scope.patientInfo.age >= 60) {
                    scope.farbe = '#3949AB';
                    scope.text1 = scope.text1_hell;
                }
                if (scope.patientInfo.age >= 70) {
                    scope.farbe = '#303F9F';
                    scope.text1 = scope.text1_hell;
                }
                if (scope.patientInfo.age >= 80) {
                    scope.farbe = '#283593';
                    scope.text1 = scope.text1_hell;
                }
                if (scope.patientInfo.age >= 90) {
                    scope.farbe = '#1A237E';
                    scope.text1 = scope.text1_hell;
                }

            } else {
                // --------------
                // PINK
                // --------------
                scope.farbe = '#FCE4EC';
                scope.text1_dunkel = '#C2185B';
                scope.text1_hell = '#F8BBD0';


                scope.text1 = scope.text1_dunkel;

                if (scope.patientInfo.age >= 10) {
                    scope.farbe = '#F8BBD0';
                    scope.text1 = scope.text1_dunkel;
                }
                if (scope.patientInfo.age >= 20) {
                    scope.farbe = '#F48FB1';
                    scope.text1 = scope.text1_dunkel;
                }
                if (scope.patientInfo.age >= 30) {
                    scope.farbe = '#F06292';
                    scope.text1 = scope.text1_dunkel;
                }
                if (scope.patientInfo.age >= 40) {
                    scope.farbe = '#EC407A';
                    scope.text1 = scope.text1_hell;
                }
                if (scope.patientInfo.age >= 50) {
                    scope.farbe = '#E91E63';
                    scope.text1 = scope.text1_hell;
                }
                if (scope.patientInfo.age >= 60) {
                    scope.farbe = '#D81B60';
                    scope.text1 = scope.text1_hell;
                }
                if (scope.patientInfo.age >= 70) {
                    scope.farbe = '#C2185B';
                    scope.text1 = scope.text1_hell;
                }
                if (scope.patientInfo.age >= 80) {
                    scope.farbe = '#AD1457';
                    scope.text1 = scope.text1_hell;
                }
                if (scope.patientInfo.age >= 90) {
                    scope.farbe = '#880E4F';
                    scope.text1 = scope.text1_hell;
                }

            }


            // --------------------------------
            // Line 1 & Line 2
            // --------------------------------

            scope.patientInfo.line1 = scope.patientInfo.lastName + ' ' + scope.patientInfo.firstName;

            var laenge = 27;

            if ( scope.patientInfo.line1.length > laenge) {
            	scope.patientInfo.line1 = scope.patientInfo.line1.substring(0, (laenge-3)) + '...';	
            } 

            scope.patientInfo.line2 = scope.patientInfo.birthday + ' | ' + scope.patientInfo.age;

            scope.patientInfo.lineTooltip = scope.patientInfo.country + ' - ' + scope.patientInfo.zipCode + ' ' + scope.patientInfo.city 


            // --------------------------------
            // Set
            // --------------------------------

            scope.my1style = {
                'color': scope.farbe
            };

            scope.my1style = {
                'color': scope.text1,
                'text-align': 'center',
                'font-size': '25.5px',
                'font-weight': '300'
            };


            scope.my2style = {
                'color': scope.text1,
                'margin-top': '-12px',
                'font-size': '9.5px',
                'font-weight': '900'
            };

            scope.mystyle = {
                'background-color': scope.farbe,

            };

        }
    };
});