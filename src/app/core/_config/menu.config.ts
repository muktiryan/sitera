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
					title: 'Informasi',
					root: true,
					alignment: 'left',
					page: '/informasi'
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
		headerAdmin: {
			self: {},
			items: [
				{
					title: 'Home',
					root: true,
					alignment: 'left',
					page: '/home',
				},
				{
					title: 'Program',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Pengembangan',
							bullet: 'dot',
							icon: 'flaticon-web',
							page: '/pengembangan'
						},
						{
							title: 'Pemanfaatan',
							bullet: 'dot',
							icon: 'flaticon-web',
							page: '/pemanfaatan'
						},
						{
							title: 'Pengajuan',
							bullet: 'dot',
							icon: 'flaticon-web',
							page: '/pengajuan'
						},
					]
				},
				{
					title: 'Info',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Informasi',
							bullet: 'dot',
							icon: 'flaticon-web',
							page: '/informasi'
						},
						{
							title: 'Simulasi',
							bullet: 'dot',
							icon: 'flaticon-web',
							page: '/simulasi'
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
					title: 'Home',
					root: true,
					alignment: 'left',
					page: '/home',
				},
				{
					title: 'Kepesertaan',
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
					title: 'Informasi',
					root: true,
					alignment: 'left',
					page: '/informasi',
				},
				{
					title: 'Dashboard & Report',
					root: true,
					alignment: 'left',
					page: '/dashboardandreport',
				},
				{
					title: 'Instruksi',
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
							title: 'Redemption',
							bullet: 'dot',
							icon: 'flaticon-web',
							page: '/simulasi'
						},
						{
							title: 'Investasi',
							bullet: 'dot',
							icon: 'flaticon-web',
							page: '/informasi'
						},
					]
				},
			]
		},
		aside: {
			self: {},
			items: [
				{ section: 'Halaman' },
				{
					title: 'Home',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/home',
				},
				{
					title: 'Program',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Pengembangan',
							page: '/pengembangan'
						},
						{
							title: 'Pemanfaatan',
							page: '/pemanfaatan'
						},
						{
							title: 'Pengajuan',
							page: '/pengajuan'
						},
					]
				},
				{
					title: 'Info',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Informasi',
							page: '/informasi'
						},
						{
							title: 'Simulasi',
							page: '/simulasi'
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
				{ section: 'Halaman' },
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
					title: 'Informasi',
					root: true,
					icon: 'flaticon2-user-outline-symbol',
					page: '/informasi'
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
		asideBptappera: {
			self: {},
			items: [
				{ section: 'Halaman' },
				{
					title: 'Home',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/home',
				},
				{
					title: 'Kepesertaan',
					icon: 'flaticon2-list-2',
					root: true,
					page: '/pengajuan',
				},
				{
					title: 'Pengajuan',
					icon: 'flaticon2-list-2',
					root: true,
					page: '/pengajuan',
				},
				{
					title: 'Informasi',
					icon: 'flaticon2-list-2',
					root: true,
					page: '/info',
				},
				{
					title: 'Dashboard & Report',
					icon: 'flaticon2-list-2',
					root: true,
					page: '/dashboardandreport'
				},
				{
					title: 'Instruksi',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Pemanfaatan',
							page: '/pengembangan'
						},
						{
							title: 'Redemption',
							page: '/pemanfaatan'
						},
						{
							title: 'Investasi',
							page: '/pengajuan'
						},
					]
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
