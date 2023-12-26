export async function load() {
	return {
		modal: {
			toggled: true,
			href: '/user/account',
			title: 'Account',
			exit: true,
			buttonFunction: function () {}
		}
	};
}
