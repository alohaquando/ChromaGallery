export interface Item {
	id: string;
	image: string | undefined;
	title: string;
	location: string;
	author: string;
	description: string;
	year: string;
}

export const createNewItem = () => ({
	id: '',
	image: undefined,
	title: '',
	location: '',
	author: '',
	description: '',
	year: ''
});

export interface Collection {
	id: string;
	title: string;
	description: string;
	items: string[];
}

export const createNewCollection = () => ({
	id: '',
	title: '',
	description: '',
	items: []
});

export interface User {
	uid: string;
	email: string;
	name: string;
	lists: string[];
	isAdmin: boolean;
}

export const createNewUser = () => ({
	uid: '',
	email: '',
	name: '',
	lists: [],
	isAdmin: false
});

export interface List {
	id: string;
	title: string;
	items: string[];
	description: string;
}

export const createNewList = () => ({
	id: '',
	title: '',
	description: '',
	items: []
});
