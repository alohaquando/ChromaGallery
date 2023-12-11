export interface Item {
	id: string;
	src: string;
	name: string;
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

export interface HeaderInfo {
	type: string;
	button?: string | undefined;
	destructive?: string | undefined;
}

export interface NavigationInfo {
	type: string;
}

export interface ModalInfo {
	toggled: boolean;
	title: string;
	exit: boolean | undefined;
	button: string | undefined;
	destructive: string | undefined;
	transition: boolean | undefined;
}

export interface BgInfo {
	color: string | undefined;
	design: string;
	randomized: boolean;
}
