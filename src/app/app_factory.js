app.factory('app_factory', function() {

        return {


            // ------------------------------------------
            // Patients
            // ------------------------------------------
            user_search: '',
            watchlist_filter: true,

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