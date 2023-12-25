export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Add item',
			button: 'Save',
			exit: true,
			buttonFunction: function () {}
		}
	};
}
