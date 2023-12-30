import { getAuth } from 'firebase/auth';

export async function load() {
	return {
		modal: {
			toggled: true,
			href: '/user/account/setting',
			title: 'Account',
			button: 'Save',
			buttonFunction: function () {}
		},
		auth: getAuth()
	};
}
