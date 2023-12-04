export interface Item {
	id: string | undefined;
	title: string | undefined;
	subtitle: string | undefined;
	collection: string | undefined;
	author: string | undefined;
	src: string | undefined;
}

export interface Collection {
	id: string | undefined;
	title: string | undefined;
	subtitle: string | undefined;
	itemList: Item[];
}
