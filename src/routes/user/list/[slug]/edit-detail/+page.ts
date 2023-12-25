export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Edit list',
			button: 'Save',
			exit: true,
			buttonFunction: function () {}
		}
	};
}
