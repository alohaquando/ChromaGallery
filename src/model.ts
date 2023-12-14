export interface Item {
	id: string;
	image: string;
	title: string;
	location: string;
	author: string;
	description: string;
	year: string;
}

export interface Collection {
	id: string;
	name: string;
	description: string;
	items: string[];
}

export interface User {
	uid: string;
	email: string;
	name: string;
	lists: string[];
	isAdmin: boolean;
}

export interface List {
	id: string;
	name: string;
	items: string[];
	description: string;
}
