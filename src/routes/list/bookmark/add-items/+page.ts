export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Add item to list',
			button: 'Add',
			exit: true,
			buttonFunction: function () {}
		}
	};
}
