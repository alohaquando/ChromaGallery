export async function load() {
	return {
		modal: {
			toggled: true,
			href: '/account',
			title: 'Account',
			exit: true,
			buttonFunction: function () {}
		}
	};
}
