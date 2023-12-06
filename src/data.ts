import type { Item, Collection } from './model';

export let item1: Item = {
	id: '1',
	title: 'A',
	subtitle: 'a',
	collection: 'Char',
	author: 'Kiet',
	src: 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/free-art-resources-3.jpg',
	time: 'TOMORROW',
	description: 'idkman'
};
export let item2: Item = {
	id: '2',
	title: 'B',
	subtitle: 'b',
	collection: 'Char',
	author: 'Kiet',
	src: 'https://www.artmajeur.com/medias/hero_new/v/a/van-lanigh/artwork/17330824_melting-down.jpg',
	time: 'TOMORROW',
	description: 'idkman'
};
export let item3: Item = {
	id: '3',
	title: 'C',
	subtitle: 'c',
	collection: 'Char',
	author: 'Shrimp',
	src: 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/free-art-resources-3.jpg',
	time: 'TOMORROW',
	description: 'idkman'
};

export let item4: Item = {
	id: '4',
	title: 'D',
	subtitle: 'd',
	collection: 'Char',
	author: 'NotMe',
	src: 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/free-art-resources-3.jpg',
	time: 'TODAY',
	description: 'eh'
};

export let item5: Item = {
	id: '5',
	title: 'E',
	subtitle: 'e',
	collection: 'Char',
	author: 'NotMe',
	src: 'https://www.artmajeur.com/medias/hero_new/v/a/van-lanigh/artwork/17330824_melting-down.jpg',
	time: 'TODAY',
	description: 'bruv'
};

export let itemList1 = [item1, item2];
export let itemList2 = [item3, item4, item5];

export let itemList: Item[] = [item1, item2, item3, item4, item5];

export let collection1: Collection = {
	id: 'col1',
	title: 'Char',
	subtitle: 'Characters',
	itemList: itemList1
};

export let collection2: Collection = {
	id: 'col1',
	title: 'Char',
	subtitle: 'Characters',
	itemList: itemList2
};

export let collectionList: Collection[] = [collection1, collection2];
