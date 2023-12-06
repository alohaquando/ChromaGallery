export interface Item {
	id: string | undefined;
	src: string | undefined;
	name: string | undefined;
	location: string | undefined;
	author: string | undefined;
	description: string;
	year: string | undefined;
}

export interface Collection {
	id: string | undefined;
	name: string | undefined;
	description: string | undefined;
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
	ID: string;
	name: string;
	Item: string[];
	description: string;
}
