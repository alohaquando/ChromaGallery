import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface Background {
	toggled: boolean;
	design: string;
	randomized: boolean;
	hue: number;
	saturation: number;
	lightness: number;
}

export const currentBg: Writable<Background> = writable({
	toggled: true,
	design: 'top',
	randomized: true,
	hue: Math.floor(Math.random() * 360),
	saturation: Math.floor(Math.random() * (101 - 60) + 60),
	lightness: Math.floor(Math.random() * (91 - 60) + 60)
});

export const getNewBackground = (): Writable<Background> => {
	return writable({
		toggled: true,
		design: 'top',
		randomized: true,
		hue: Math.floor(Math.random() * 360),
		saturation: Math.floor(Math.random() * (101 - 60) + 60),
		lightness: Math.floor(Math.random() * (91 - 60) + 60)
	});
};
