export async function load({ parent }) {
	const { session } = await parent();
	return {
		modal: {
			toggled: true,
			href: '/account/setting',
			title: 'Account'
		},
		auth: {
			currentUser: session
				? { displayName: session.displayName }
				: null
		}
	};
}
