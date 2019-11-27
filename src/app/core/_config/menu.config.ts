export class MenuConfig {
    public defaults: any = {
        headerKemenkeu: {
            self: {},
            items: [
                {
                    title: 'Home',
                    root: true,
                    alignment: 'left',
                    page: '/home',
                },
                {
                    title: 'Kepesertaan',
                    root: true,
                    alignment: 'left',
                    toggle: 'click',
                    page: '/kepesertaan',
                },
                {
                    title: 'Dashboard & Report',
                    root: true,
                    alignment: 'left',
                    toggle: 'click',
                    page: '/dashboardandreport'
                },
            ]
        },
        headerAdmin: {
            self: {},
            items: [
                {
                    title: 'Beranda',
                    root: true,
                    alignment: 'left',
                    page: '/home',
                },
                {
                    title: 'Profile',
                    root: true,
                    alignment: 'left',
                    toggle: 'click',
                    page: '/profile'
                },
                {
                    title: 'Pengajuan',
                    root: true,
                    alignment: 'left',
                    toggle: 'click',
                    submenu: [
                        {
                            title: 'Kalkulator Limit & Informasi terkait KPR',
                            bullet: 'dot',
                            icon: 'flaticon-web',
                            page: '/kalkulator'
                        },
                        {
                            title: 'Form Pengajuan KPR',
                            bullet: 'dot',
                            icon: 'flaticon-web',
                            page: '/pemanfaatan'
                        },
                    ]
                },
                {
                    title: 'Dashboard & Report',
                    root: true,
                    alignment: 'left',
                    toggle: 'click',
                    page: '/dashboardandreport'
                },
                {
                    title: 'FAQ',
                    root: true,
                    alignment: 'left',
                    toggle: 'click',
                    page: '/faq'
                },
            ]
        },
        headerBptappera: {
            self: {},
            items: [
                {
                    title: 'Beranda',
                    root: true,
                    alignment: 'left',
                    page: '/home',
                },
                {
                    title: 'Pengerahan',
                    root: true,
                    alignment: 'left',
                    page: '/bppengerahan',
                },
                {
                    title: 'Pengelolaan',
                    root: true,
                    alignment: 'left',
                    toggle: 'click',
                    submenu: [
                        {
                            title: 'Pemanfaatan',
                            bullet: 'dot',
                            icon: 'flaticon-web',
                            page: '/informasi'
                        },
                        {
                            title: 'Pemupukan',
                            bullet: 'dot',
                            icon: 'flaticon-web',
                            page: '/simulasi'
                        },
                        {
                            title: 'Pencadangan',
                            bullet: 'dot',
                            icon: 'flaticon-web',
                            page: '/bppencadangan'
                        },
                    ]
                },
                {
                    title: 'Dashboard & Report',
                    root: true,
                    alignment: 'left',
                    page: '/dashboardandreport',
                },
                {
                    title: 'FAQ',
                    root: true,
                    alignment: 'left',
                    toggle: 'click',
                    page: '/faq'
                },
            ]
        },
        headerPesertaMandiri: {
            self: {},
            items: [
                {
                    title: 'Home',
                    root: true,
                    alignment: 'left',
                    page: '/home',
                },
                {
                    title: 'Profile',
                    root: true,
                    alignment: 'left',
                    page: '/pengajuan',
                },
                {
                    title: 'Pengajuan',
                    root: true,
                    alignment: 'left',
                    page: '/pengajuan',
                },
                {
                    title: 'Dashboard & Report',
                    root: true,
                    alignment: 'left',
                    page: '/dashboardandreport',
                },
                {
                    title: 'FAQ',
                    root: true,
                    alignment: 'left',
                    toggle: 'click',
                    page: '/faq'
                },
            ]
        },
        aside: {
            self: {},
            items: [
                {section: 'Halaman'},
                {
                    title: 'Beranda',
                    root: true,
                    icon: 'flaticon2-architecture-and-city',
                    page: '/home',
                },
                {
                    title: 'Profile',
                    icon: 'flaticon2-list-2',
                    root: true,
                    page: '/dashboardandreport'
                },
                {
                    title: 'Pengajuan',
                    root: true,
                    bullet: 'dot',
                    icon: 'flaticon2-browser-2',
                    submenu: [
                        {
                            title: 'Kalkulator Limit & Informasi terkait KPR',
                            page: '/pengembangan'
                        },
                        {
                            title: 'Form Pengajuan KPR',
                            page: '/pemanfaatan'
                        },
                    ]
                },
                {
                    title: 'Dashboard & Report',
                    icon: 'flaticon2-list-2',
                    root: true,
                    page: '/dashboardandreport'
                },
                {
                    title: 'FAQ',
                    root: true,
                    icon: 'flaticon2-list-2',
                    page: '/faq'
                },
            ]
        },
        asideKemenkeu: {
            self: {},
            items: [
                {section: 'Halaman'},
                {
                    title: 'Home',
                    root: true,
                    icon: 'flaticon2-architecture-and-city',
                    page: '/home',
                },
                {
                    title: 'Kepesertaan',
                    root: true,
                    icon: 'flaticon2-browser-2',
                    page: '/kepesertaan',
                },
                {
                    title: 'Dashboard & Report',
                    icon: 'flaticon2-list-2',
                    root: true,
                    page: '/dashboardandreport'
                },
            ]
        },
        asideBptappera: {
            self: {},
            items: [
                {section: 'Beranda'},
                {
                    title: 'Home',
                    root: true,
                    icon: 'flaticon2-architecture-and-city',
                    page: '/home',
                },
                {
                    title: 'Pengerahan',
                    icon: 'flaticon2-list-2',
                    root: true,
                    page: '/pengajuan',
                },
                {
                    title: 'Pengelolaan',
                    root: true,
                    bullet: 'dot',
                    icon: 'flaticon2-browser-2',
                    submenu: [
                        {
                            title: 'Pemanfaatan',
                            page: '/pengembangan'
                        },
                        {
                            title: 'Pemupukan',
                            page: '/pemanfaatan'
                        },
                        {
                            title: 'Pencadangan',
                            page: '/pengajuan'
                        },
                    ]
                },
                {
                    title: 'Dashboard & Report',
                    icon: 'flaticon2-list-2',
                    root: true,
                    page: '/dashboardandreport'
                },
            ]
        },
    };

    public get configs(): any {
        return this.defaults;
    }
}
