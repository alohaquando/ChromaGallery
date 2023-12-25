export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Add item to collection',
			button: 'Add',
			exit: true,
			buttonFunction: function () {}
		}
	};
}
