export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Edit item',
			button: 'Save',
			exit: true,
			buttonFunction: function () {}
		}
	};
}
