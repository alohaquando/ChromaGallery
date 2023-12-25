export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Add to list',
			button: 'Save',
			exit: true,
			buttonFunction: function () {}
		}
	};
}
