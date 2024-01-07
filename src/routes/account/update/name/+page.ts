import { getAuth } from 'firebase/auth';

export async function load() {
	return {
		modal: {
			toggled: true,
			href: '/account/setting',
			title: 'Account'
		},
		auth: getAuth()
	};
}
