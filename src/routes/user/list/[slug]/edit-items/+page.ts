export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Edit items',
			button: 'Save',
			exit: true,
			buttonFunction: function () {}
		}
	};
}
