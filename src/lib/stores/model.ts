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
	name: string;
	description: string;
	items: string[];
}

export const createNewCollection = () => ({
	id: '',
	name: '',
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
	name: string;
	items: string[];
	description: string;
}

export const createNewList = () => ({
	id: '',
	name: '',
	description: '',
	items: []
});
