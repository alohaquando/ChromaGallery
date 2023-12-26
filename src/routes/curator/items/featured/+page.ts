export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Featured items',
			href: './',
			button: 'Save',
			exit: true,
			buttonFunction: function () {}
		}
	};
}
