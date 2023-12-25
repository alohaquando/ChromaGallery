export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Create new list',
			button: 'Save',
			exit: true,
			buttonFunction: function () {}
		}
	};
}
