export interface Item {
	id: string;
	image: string | undefined;
	title: string;
	location: string;
	author: string;
	description: string;
	year: string;
	isFeatured: boolean;
}

export const createNewItem = () => ({
	id: '',
	image: undefined,
	title: '',
	location: '',
	author: '',
	description: '',
	year: '',
	isFeatured: false
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
	uid: string | undefined;
	email: string | undefined;
	displayName: string | undefined;
	isCurator: boolean | undefined;
}

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
