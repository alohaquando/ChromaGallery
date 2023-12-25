export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Create new collection',
			href: './',
			button: 'Save',
			exit: true,
			buttonFunction: function () {}
		}
	};
}
