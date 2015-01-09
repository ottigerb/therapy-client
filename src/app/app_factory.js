app.factory('app_factory', function() {

    return {


        // ------------------------------------------
        // Sidenav - Controls
        // ------------------------------------------
        user_search: '',
        watchlist_filter: true,



        // ------------------------------------------
        // Patients
        // ------------------------------------------
        patients: [{
        	face: 'http://medias.audiofanzine.com/images/normal/gretsch-g6120ssu-brian-setzer-nashville-orange-tiger-flame-346220.jpg',
            address1: "Haldenstrasse 7",
            address2: null,
            age: 40,
            ahv: null,
            birthName: null,
            birthdate: "1988-11-11T00:00:00.000Z",
            birthday: "1973-05-21",
            cisPid: 1,
            city: "Oberrieden",
            country: "CH",
            deceased: false,
            email: "beat@ottiger.org",
            firstName: "Beat",
            fourLetterCode: "BOTO",
            gender: "male",
            language: "de",
            lastName: "Ottiger",
            notes: null,
            phoneHome: "+41 (0)79 635 85 84",
            phoneMobile: "+41 (0)79 635 85 84",
            title: "Dip. Psych.",
            zipCode: "8942"
        }, {
        	face: 'https://lataifascuradu.files.wordpress.com/2011/09/ho-oponopono.jpg',
            address1: "Fachstrasse 73a",
            address2: null,
            age: 43,
            ahv: null,
            birthName: null,
            birthdate: "1988-11-11T00:00:00.000Z",
            birthday: "1970-05-21",
            cisPid: 2,
            city: "Oberrieden",
            country: "CH",
            deceased: false,
            email: "martina@ottiger.org",
            firstName: "Martina",
            fourLetterCode: "BOTO",
            gender: "female",
            language: "de",
            lastName: "Szirnyi",
            notes: null,
            phoneHome: "+41 (0)43 305 78 80",
            phoneMobile: null,
            title: null,
            zipCode: "8942"
        }, {
        	face: 'http://img4.wikia.nocookie.net/__cb20140114011034/cartoonfatness/images/0/03/Superman_john_byrne1.png',
            address1: "Fachstrasse 73a",
            address2: null,
            age: 10,
            ahv: null,
            birthName: null,
            birthdate: "1988-11-11T00:00:00.000Z",
            birthday: "2004-05-21",
            cisPid: 3,
            city: "Oberrieden",
            country: "CH",
            deceased: false,
            email: "sascha@ottiger.org",
            firstName: "Sascha",
            fourLetterCode: "BOTO",
            gender: "male",
            language: "de",
            lastName: "Szirnyi",
            notes: null,
            phoneHome: "+41 (0)79 635 85 84",
            phoneMobile: "+41 (0)79 635 85 84",
            title: null,
            zipCode: "8942"
        }, {
        	face: 'http://testosteron-kaufen.org/wp-content/uploads/mann-bodybuilding-muskel-hantel-sport-900x500.jpg',
            address1: "Tastenstrasse 3",
            address2: null,
            age: 26,
            ahv: null,
            birthName: null,
            birthdate: "1988-11-11T00:00:00.000Z",
            birthday: "1988-11-11",
            cisPid: 4,
            city: "Osterone",
            country: "CH",
            deceased: false,
            email: "katrin.schlaefli@suedhang.ch",
            firstName: "Testo",
            fourLetterCode: "SSTO",
            gender: "male",
            language: "de",
            lastName: "Testosteron",
            notes: null,
            phoneHome: "11 111 111",
            phoneMobile: null,
            title: null,
            zipCode: "3333"
        }, {
        	face: 'https://material.angularjs.org/img/list/60.jpeg',
            address1: "Haldenstrasse 7",
            address2: null,
            age: 40,
            ahv: null,
            birthName: null,
            birthdate: "1988-11-11T00:00:00.000Z",
            birthday: "1973-05-21",
            cisPid: 5,
            city: "Oberrieden",
            country: "CH",
            deceased: false,
            email: "beat@ottiger.org",
            firstName: "Beat",
            fourLetterCode: "BOTO",
            gender: "male",
            language: "de",
            lastName: "Ottiger",
            notes: null,
            phoneHome: "+41 (0)79 635 85 84",
            phoneMobile: "+41 (0)79 635 85 84",
            title: "Dip. Psych.",
            zipCode: "8942"
        }, {
        	face: 'https://material.angularjs.org/img/list/60.jpeg',
            address1: "Fachstrasse 73a",
            address2: null,
            age: 43,
            ahv: null,
            birthName: null,
            birthdate: "1988-11-11T00:00:00.000Z",
            birthday: "1970-05-21",
            cisPid: 6,
            city: "Oberrieden",
            country: "CH",
            deceased: false,
            email: "martina@ottiger.org",
            firstName: "Martina",
            fourLetterCode: "BOTO",
            gender: "female",
            language: "de",
            lastName: "Szirnyi",
            notes: null,
            phoneHome: "+41 (0)43 305 78 80",
            phoneMobile: null,
            title: null,
            zipCode: "8942"
        }, {
        	face: 'https://material.angularjs.org/img/list/60.jpeg',
            address1: "Fachstrasse 73a",
            address2: null,
            age: 10,
            ahv: null,
            birthName: null,
            birthdate: "1988-11-11T00:00:00.000Z",
            birthday: "2004-05-21",
            cisPid: 7,
            city: "Oberrieden",
            country: "CH",
            deceased: false,
            email: "sascha@ottiger.org",
            firstName: "Sascha",
            fourLetterCode: "BOTO",
            gender: "male",
            language: "de",
            lastName: "Szirnyi",
            notes: null,
            phoneHome: "+41 (0)79 635 85 84",
            phoneMobile: "+41 (0)79 635 85 84",
            title: null,
            zipCode: "8942"
        }, {
        	face: 'https://material.angularjs.org/img/list/60.jpeg',
            address1: "Tastenstrasse 3",
            address2: null,
            age: 26,
            ahv: null,
            birthName: null,
            birthdate: "1988-11-11T00:00:00.000Z",
            birthday: "1988-11-11",
            cisPid: 8,
            city: "Osterone",
            country: "CH",
            deceased: false,
            email: "katrin.schlaefli@suedhang.ch",
            firstName: "Testo",
            fourLetterCode: "SSTO",
            gender: "male",
            language: "de",
            lastName: "Testosteron",
            notes: null,
            phoneHome: "11 111 111",
            phoneMobile: null,
            title: null,
            zipCode: "3333"
        }, {
        	face: 'http://topnews.in/light/files/Elvis-Presley_10.jpg',
            address1: "Memphisstr. 123",
            address2: null,
            age: 80,
            ahv: "123.123.123.123",
            birthName: null,
            birthdate: "1935-01-08T00:00:00.000Z",
            birthday: "1935-01-08",
            cisPid: 9,
            city: "Somewhere",
            country: "CH",
            deceased: false,
            email: "elvis@presley.com",
            firstName: "Elvis",
            fourLetterCode: "VEIE",
            gender: "male",
            language: "de",
            lastName: "Presley",
            notes: "Love me tender.",
            phoneHome: "234534",
            phoneMobile: "123123",
            title: null,
            zipCode: "3421"
        }],

        // ------------------------------------------
        // Colors
        // ------------------------------------------
        color: 'md-accent',
        colors: [{
            text: 'text-primary',
            bg: 'bg-primary',
            btn: 'btn-primary'
        }, {
            text: 'text-success',
            bg: 'bg-success',
            btn: 'btn-success'
        }, {
            text: 'text-info',
            bg: 'bg-info',
            btn: 'btn-info'
        }, {
            text: 'text-danger',
            bg: 'bg-danger',
            btn: 'btn-danger'
        }],

        // ------------------------------------------
        // Optibox -  Widgets
        // ------------------------------------------
        bricks_query: '',
        optibox_widget: [{
                wid: 1,
                visible: 2,
                size: 'small',
                title: 'PATIENTS',
                id: "patients_overview",
                box_color: 1,
                box_enter: true,
                box_both: false,
                box_settings: true,
                box_btn_name: 'OPEN',
                box_btn_icon: 'fa-group',
                box_btn_href: '#/patients',
                footer_inc: true
            },

            {
                wid: 2,
                visible: 2,
                size: 'medium',
                title: 'MODULES',
                id: "modules_overview",
                box_color: 2,
                box_enter: true,
                box_both: false,
                box_settings: true,
                box_btn_name: 'OPEN',
                box_btn_icon: 'fa-gift',
                box_btn_href: '#/modules',
                footer_inc: false
            }, {
                wid: 3,
                visible: 1,
                size: 'small',
                title: 'NOTIFICATIONS',
                id: "notifications_overview",
                box_color: 0,
                box_enter: false,
                box_both: false,
                box_settings: false,
                box_btn_name: 'OPEN',
                box_btn_icon: 'fa-envelope-o',
                box_btn_href: '',
                footer_inc: true
            }, {
                wid: 4,
                visible: 1,
                size: 'medium',
                title: 'TASKS',
                id: "tasks_overview",
                box_color: 3,
                box_enter: false,
                box_both: true,
                box_settings: false,
                box_btn_name: 'OPEN',
                box_btn_icon: 'fa-tasks',
                box_btn_href: '#/tasks',
                footer_inc: false
            }, {
                wid: 5,
                visible: 2,
                size: 'medium',
                title: 'PATIENTS',
                id: "patients_overview_timeline",
                box_color: 1,
                box_enter: false,
                box_both: false,
                box_settings: false,
                box_btn_name: 'OPEN',
                box_btn_icon: 'fa-group',
                box_btn_href: '#/patients',
                footer_inc: false
            }
        ]


    };
});