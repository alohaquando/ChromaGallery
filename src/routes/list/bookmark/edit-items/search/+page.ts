export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Edit items',
			href: '../edit-items',
			button: 'Save',
			buttonFunction: function () {}
		}
	};
}
