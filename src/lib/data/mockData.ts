import type { Collection, Item, List, User } from '$lib/data/dataModels';

import cyberpunk1 from '$lib/assets/images/cyberpunk/cheng-feng-4pTY4ty7jXM-unsplash.jpg';
import cyberpunk2 from '$lib/assets/images/cyberpunk/francois-hoang-MFYlCoSm-0o-unsplash.jpg';
import cyberpunk3 from '$lib/assets/images/cyberpunk/kevin-laminto-7PqRZK6rbaE-unsplash.jpg';
import cyberpunk4 from '$lib/assets/images/cyberpunk/levon-vardanyan-ihUVzI4f5To-unsplash.jpg';
import cyberpunk5 from '$lib/assets/images/cyberpunk/leyre-71SHXwBLp5w-unsplash.jpg';
import cyberpunk6 from '$lib/assets/images/cyberpunk/ray-zhuang-kL3u4Tqfn1s-unsplash.jpg';
import cyberpunk7 from '$lib/assets/images/cyberpunk/salty-justice-NOMebOREvtc-unsplash.jpg';
import cyberpunk8 from '$lib/assets/images/cyberpunk/sandro-katalina-k1bO_VTiZSs-unsplash.jpg';
import cyberpunk9 from '$lib/assets/images/cyberpunk/valentin-beauvais-yVUQlyRlJSw-unsplash.jpg';

import abstract1 from '$lib/assets/images/modern_abstract/joel-filipe-QwoNAhbmLLo-unsplash.jpg';
import abstract2 from '$lib/assets/images/modern_abstract/jr-korpa-9XngoIpxcEo-unsplash.jpg';
import abstract3 from '$lib/assets/images/modern_abstract/lucas-k-wQLAGv4_OYs-unsplash.jpg';
import abstract4 from '$lib/assets/images/modern_abstract/milad-fakurian-PGdW_bHDbpI-unsplash.jpg';
import abstract5 from '$lib/assets/images/modern_abstract/milad-fakurian-seA-FPPXL-M-unsplash.jpg';
import abstract6 from '$lib/assets/images/modern_abstract/mymind-XUlsF9LYeVk-unsplash.jpg';
import abstract7 from '$lib/assets/images/modern_abstract/mymind-tZCrFpSNiIQ-unsplash.jpg';
import abstract8 from '$lib/assets/images/modern_abstract/pawel-czerwinski-6lQDFGOB1iw-unsplash.jpg';
import abstract9 from '$lib/assets/images/modern_abstract/pawel-czerwinski-ERcQ81KaX9g-unsplash.jpg';
import abstract10 from '$lib/assets/images/modern_abstract/rene-bohmer-YeUVDKZWSZ4-unsplash.jpg';

import modernArt1 from '$lib/assets/images/modern_art/claudio-schwarz-k39RGHmLoV8-unsplash.jpg';
import modernArt2 from '$lib/assets/images/modern_art/jazmin-quaynor-CXjp1ycr5Vw-unsplash.jpg';
import modernArt3 from '$lib/assets/images/modern_art/jene-stephaniuk-esRJtEsvJhU-unsplash.jpg';
import modernArt4 from '$lib/assets/images/modern_art/jon-tyson-FKkK1hnTe-Q-unsplash.jpg';
import modernArt5 from '$lib/assets/images/modern_art/josep-martins-l3-erg8nPRU-unsplash.jpg';
import modernArt6 from '$lib/assets/images/modern_art/marius-girard-_8zO0LaCxRQ-unsplash.jpg';
import modernArt7 from '$lib/assets/images/modern_art/mayur-deshpande-zZPeoLxLRyM-unsplash.jpg';
import modernArt8 from '$lib/assets/images/modern_art/mcgill-library-y4PqRPqSako-unsplash.jpg';
import modernArt9 from '$lib/assets/images/modern_art/orfeas-green-G5A5ZNjS2tE-unsplash.jpg';
import modernArt10 from '$lib/assets/images/modern_art/steve-a-johnson-Xx_d26R37E4-unsplash.jpg';
import modernArt11 from '$lib/assets/images/modern_art/steve-a-johnson-b5HMwgoU2h4-unsplash.jpg';
import modernArt12 from '$lib/assets/images/modern_art/steve-a-johnson-e5LdlAMpkEw-unsplash.jpg';
import modernArt13 from '$lib/assets/images/modern_art/steve-a-johnson-eVaxJVA2zHI-unsplash.jpg';
import modernArt14 from '$lib/assets/images/modern_art/tamara-menzi-n-vnWQmmVoY-unsplash.jpg';

import painting1 from '$lib/assets/images/painting/adrianna-geo-1rBg5YSi00c-unsplash.jpg';
import painting2 from '$lib/assets/images/painting/art-institute-of-chicago-AckZaYtIq3I-unsplash.jpg';
import painting3 from '$lib/assets/images/painting/birmingham-museums-trust-4lDX-xTLl3Q-unsplash.jpg';
import painting4 from '$lib/assets/images/painting/birmingham-museums-trust-8wcoY3wcbL0-unsplash.jpg';
import painting5 from '$lib/assets/images/painting/birmingham-museums-trust-HEEvYhNzpEo-unsplash.jpg';
import painting6 from '$lib/assets/images/painting/birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg';
import painting7 from '$lib/assets/images/painting/birmingham-museums-trust-wKlHsooRVbg-unsplash.jpg';
import painting8 from '$lib/assets/images/painting/europeana-6c43FgRt0Dw-unsplash.jpg';
import painting9 from '$lib/assets/images/painting/europeana-TjegK_z-0j8-unsplash.jpg';
import painting10 from '$lib/assets/images/painting/europeana-VsnDYMWollM-unsplash.jpg';
import painting11 from '$lib/assets/images/painting/henrik-donnestad-t2Sai-AqIpI-unsplash.jpg';

const cyberpunkItems: Item[] = [
	{
		id: 'cp1',
		image: cyberpunk1,
		title: 'Neon Skyline',
		location: 'A1',
		author: 'Cheng Feng',
		description: 'Towering megastructures glow under a haze of electric neon light.',
		year: '2021',
		isFeatured: false
	},
	{
		id: 'cp2',
		image: cyberpunk2,
		title: 'Chrome District',
		location: 'A2',
		author: 'François Hoang',
		description: 'Rain-slicked streets reflect a labyrinth of neon signage.',
		year: '2020',
		isFeatured: false
	},
	{
		id: 'cp3',
		image: cyberpunk3,
		title: 'Synthetic Dusk',
		location: 'A3',
		author: 'Kevin Laminto',
		description: 'A lone figure walks beneath holographic billboards at twilight.',
		year: '2022',
		isFeatured: true
	},
	{
		id: 'cp4',
		image: cyberpunk4,
		title: 'Circuit City',
		location: 'A4',
		author: 'Levon Vardanyan',
		description: 'An urban sprawl wired together by pulsing fiber-optic veins.',
		year: '2021',
		isFeatured: false
	},
	{
		id: 'cp5',
		image: cyberpunk5,
		title: 'Violet Arcade',
		location: 'A5',
		author: 'Leyre',
		description: 'A neon-drenched alley humming with the static of old machines.',
		year: '2019',
		isFeatured: false
	},
	{
		id: 'cp6',
		image: cyberpunk6,
		title: 'Data Stream',
		location: 'A6',
		author: 'Ray Zhuang',
		description: 'Rivers of light cascade through a dense vertical metropolis.',
		year: '2022',
		isFeatured: true
	},
	{
		id: 'cp7',
		image: cyberpunk7,
		title: 'Midnight Protocol',
		location: 'A7',
		author: 'Salty Justice',
		description: 'A shadowed rooftop overlooks a city that never sleeps.',
		year: '2020',
		isFeatured: false
	},
	{
		id: 'cp8',
		image: cyberpunk8,
		title: 'Glass Horizon',
		location: 'A8',
		author: 'Sandro Katalina',
		description: 'Mirrored towers fracture the skyline into a thousand neon shards.',
		year: '2021',
		isFeatured: true
	},
	{
		id: 'cp9',
		image: cyberpunk9,
		title: 'Static Bloom',
		location: 'A9',
		author: 'Valentin Beauvais',
		description: 'A burst of digital color blooms across a darkened cityscape.',
		year: '2023',
		isFeatured: false
	}
];

const abstractItems: Item[] = [
	{
		id: 'ab1',
		image: abstract1,
		title: 'Fluid Motion',
		location: 'B1',
		author: 'Joel Filipe',
		description: 'Waves of color blend into one another in constant motion.',
		year: '2020',
		isFeatured: false
	},
	{
		id: 'ab2',
		image: abstract2,
		title: 'Fractured Light',
		location: 'B2',
		author: 'Jr Korpa',
		description: 'Shards of color scatter across a dark, textured canvas.',
		year: '2021',
		isFeatured: false
	},
	{
		id: 'ab3',
		image: abstract3,
		title: 'Gradient Dream',
		location: 'B3',
		author: 'Lucas K.',
		description: 'A soft gradient dissolves into hazy, dreamlike color fields.',
		year: '2019',
		isFeatured: true
	},
	{
		id: 'ab4',
		image: abstract4,
		title: 'Iridescent Wave',
		location: 'B4',
		author: 'Milad Fakurian',
		description: 'Shimmering, oil-slick color washes across the frame.',
		year: '2022',
		isFeatured: false
	},
	{
		id: 'ab5',
		image: abstract5,
		title: 'Prism Drift',
		location: 'B5',
		author: 'Milad Fakurian',
		description: 'Refracted light splits into a spectrum of drifting hues.',
		year: '2022',
		isFeatured: false
	},
	{
		id: 'ab6',
		image: abstract6,
		title: 'Soft Static',
		location: 'B6',
		author: 'mymind',
		description: 'Grainy texture overlays a field of muted pastel tones.',
		year: '2021',
		isFeatured: false
	},
	{
		id: 'ab7',
		image: abstract7,
		title: 'Pastel Noise',
		location: 'B7',
		author: 'mymind',
		description: 'A quiet composition of textured pastel gradients.',
		year: '2021',
		isFeatured: false
	},
	{
		id: 'ab8',
		image: abstract8,
		title: 'Marbled Vision',
		location: 'B8',
		author: 'Pawel Czerwinski',
		description: 'Swirling marbled color forms an otherworldly texture.',
		year: '2020',
		isFeatured: false
	},
	{
		id: 'ab9',
		image: abstract9,
		title: 'Velvet Spectrum',
		location: 'B9',
		author: 'Pawel Czerwinski',
		description: 'Deep, saturated color bands blend into a velvety gradient.',
		year: '2020',
		isFeatured: false
	},
	{
		id: 'ab10',
		image: abstract10,
		title: 'Chromatic Flow',
		location: 'B10',
		author: 'Rene Böhmer',
		description: 'Color pigments swirl and diffuse as if suspended in liquid.',
		year: '2019',
		isFeatured: false
	}
];

const modernArtItems: Item[] = [
	{
		id: 'ma1',
		image: modernArt1,
		title: 'Untitled Form',
		location: 'C1',
		author: 'Claudio Schwarz',
		description: 'A minimalist study in shape, shadow, and negative space.',
		year: '2018',
		isFeatured: false
	},
	{
		id: 'ma2',
		image: modernArt2,
		title: 'Reflections in Red',
		location: 'C2',
		author: 'Jazmin Quaynor',
		description: 'Bold red tones dominate a study of light and reflection.',
		year: '2020',
		isFeatured: false
	},
	{
		id: 'ma3',
		image: modernArt3,
		title: 'Suspended Structure',
		location: 'C3',
		author: 'Jene Stephaniuk',
		description: 'Geometric forms hang in careful, deliberate balance.',
		year: '2019',
		isFeatured: false
	},
	{
		id: 'ma4',
		image: modernArt4,
		title: 'Gallery Study No. 4',
		location: 'C4',
		author: 'Jon Tyson',
		description: 'A contemplative piece exploring texture and framing.',
		year: '2021',
		isFeatured: false
	},
	{
		id: 'ma5',
		image: modernArt5,
		title: 'Line and Form',
		location: 'C5',
		author: 'Josep Martins',
		description: 'Clean lines intersect to construct a quiet visual rhythm.',
		year: '2020',
		isFeatured: true
	},
	{
		id: 'ma6',
		image: modernArt6,
		title: 'Monument',
		location: 'C6',
		author: 'Marius Girard',
		description: 'A towering sculptural form rendered in stark contrast.',
		year: '2017',
		isFeatured: false
	},
	{
		id: 'ma7',
		image: modernArt7,
		title: 'Fragment',
		location: 'C7',
		author: 'Mayur Deshpande',
		description: 'A fragmented composition suggesting a larger, unseen whole.',
		year: '2019',
		isFeatured: false
	},
	{
		id: 'ma8',
		image: modernArt8,
		title: 'Archive No. 8',
		location: 'C8',
		author: 'McGill Library',
		description: 'An archival piece preserved from a private modern collection.',
		year: '1978',
		isFeatured: false
	},
	{
		id: 'ma9',
		image: modernArt9,
		title: 'Greenhouse Study',
		location: 'C9',
		author: 'Orfeas Green',
		description: 'Organic forms rendered with a stark, modern sensibility.',
		year: '2021',
		isFeatured: true
	},
	{
		id: 'ma10',
		image: modernArt10,
		title: 'Concrete Dialogue I',
		location: 'C10',
		author: 'Steve A. Johnson',
		description: 'Heavy concrete forms converse across a minimalist frame.',
		year: '2018',
		isFeatured: false
	},
	{
		id: 'ma11',
		image: modernArt11,
		title: 'Concrete Dialogue II',
		location: 'C11',
		author: 'Steve A. Johnson',
		description: 'A companion study exploring weight, mass, and silence.',
		year: '2018',
		isFeatured: false
	},
	{
		id: 'ma12',
		image: modernArt12,
		title: 'Concrete Dialogue III',
		location: 'C12',
		author: 'Steve A. Johnson',
		description: 'The final study in a series on brutalist form.',
		year: '2018',
		isFeatured: true
	},
	{
		id: 'ma13',
		image: modernArt13,
		title: 'Concrete Dialogue IV',
		location: 'C13',
		author: 'Steve A. Johnson',
		description: 'Light carves sharp geometry into raw, textured surfaces.',
		year: '2018',
		isFeatured: false
	},
	{
		id: 'ma14',
		image: modernArt14,
		title: 'Quiet Interior',
		location: 'C14',
		author: 'Tamara Menzi',
		description: 'A subdued interior scene rendered in muted modern tones.',
		year: '2022',
		isFeatured: false
	}
];

const paintingItems: Item[] = [
	{
		id: 'pt1',
		image: painting1,
		title: 'Garden in Bloom',
		location: 'D1',
		author: 'Adrianna Geo',
		description: 'A lush garden captured in soft, painterly brushstrokes.',
		year: '1904',
		isFeatured: false
	},
	{
		id: 'pt2',
		image: painting2,
		title: 'Portrait of a Lady',
		location: 'D2',
		author: 'Art Institute of Chicago Collection',
		description: 'A formal portrait rendered in the classical academic style.',
		year: '1888',
		isFeatured: true
	},
	{
		id: 'pt3',
		image: painting3,
		title: 'Still Life with Fruit',
		location: 'D3',
		author: 'Birmingham Museums Trust Collection',
		description: 'A meticulously arranged still life of fruit and porcelain.',
		year: '1872',
		isFeatured: false
	},
	{
		id: 'pt4',
		image: painting4,
		title: 'Pastoral Landscape',
		location: 'D4',
		author: 'Birmingham Museums Trust Collection',
		description: 'Rolling countryside rendered in warm, golden light.',
		year: '1861',
		isFeatured: false
	},
	{
		id: 'pt5',
		image: painting5,
		title: 'The Fisherman’s Cottage',
		location: 'D5',
		author: 'Birmingham Museums Trust Collection',
		description: 'A weathered coastal cottage beneath a stormy sky.',
		year: '1879',
		isFeatured: false
	},
	{
		id: 'pt6',
		image: painting6,
		title: 'Reclining Figure',
		location: 'D6',
		author: 'Birmingham Museums Trust Collection',
		description: 'A classical study of form and drapery in soft light.',
		year: '1895',
		isFeatured: false
	},
	{
		id: 'pt7',
		image: painting7,
		title: 'The Harbor at Dusk',
		location: 'D7',
		author: 'Birmingham Museums Trust Collection',
		description: 'Fishing boats rest in harbor as the sun sets behind them.',
		year: '1902',
		isFeatured: true
	},
	{
		id: 'pt8',
		image: painting8,
		title: 'Woman by the Window',
		location: 'D8',
		author: 'Europeana Collection',
		description: 'Quiet domestic light falls across a seated figure.',
		year: '1865',
		isFeatured: false
	},
	{
		id: 'pt9',
		image: painting9,
		title: 'The Old Bridge',
		location: 'D9',
		author: 'Europeana Collection',
		description: 'A stone bridge arches over a slow-moving river.',
		year: '1858',
		isFeatured: true
	},
	{
		id: 'pt10',
		image: painting10,
		title: 'Autumn Orchard',
		location: 'D10',
		author: 'Europeana Collection',
		description: 'Golden autumn leaves scatter across a quiet orchard.',
		year: '1911',
		isFeatured: false
	},
	{
		id: 'pt11',
		image: painting11,
		title: 'Northern Light',
		location: 'D11',
		author: 'Henrik Donnestad',
		description: 'A dramatic sky illuminates a rugged northern landscape.',
		year: '1923',
		isFeatured: false
	}
];

export const mockItems: Item[] = [
	...cyberpunkItems,
	...abstractItems,
	...modernArtItems,
	...paintingItems
];

function pickRandom<T>(arr: T[], count: number): T[] {
	const copy = [...arr];
	const picked: T[] = [];
	while (picked.length < count && copy.length > 0) {
		const index = Math.floor(Math.random() * copy.length);
		picked.push(copy.splice(index, 1)[0]);
	}
	return picked;
}

export const mockCollections: Collection[] = [
	{
		id: 'c-cyberpunk',
		title: 'Neon Futures',
		description: 'Cyberpunk cityscapes drenched in neon light and chrome.',
		items: pickRandom(
			cyberpunkItems.map((i) => i.id),
			5
		)
	},
	{
		id: 'c-abstract',
		title: 'Modern Abstractions',
		description: 'Fluid color and form exploring the boundaries of abstraction.',
		items: pickRandom(
			abstractItems.map((i) => i.id),
			5
		)
	},
	{
		id: 'c-modern-art',
		title: 'Modern Art Marvels',
		description: 'Contemporary works exploring shape, structure, and light.',
		items: pickRandom(
			modernArtItems.map((i) => i.id),
			6
		)
	},
	{
		id: 'c-painting',
		title: 'Classical Paintings',
		description: 'Timeless paintings drawn from museum and private collections.',
		items: pickRandom(
			paintingItems.map((i) => i.id),
			5
		)
	}
];

export const mockLists: Record<string, List[]> = {
	u1: [
		{
			id: 'bookmark',
			title: 'Bookmarks',
			description: 'Saved favorites',
			items: pickRandom(mockItems.map((i) => i.id), 4)
		},
		{
			id: 'l1',
			title: 'Must-See',
			items: pickRandom(mockItems.map((i) => i.id), 3),
			description: 'Artworks everyone should experience.'
		}
	],
	u2: [
		{
			id: 'bookmark',
			title: 'Bookmarks',
			description: 'Saved favorites',
			items: pickRandom(mockItems.map((i) => i.id), 3)
		},
		{
			id: 'l2',
			title: 'Curator Picks',
			items: pickRandom(mockItems.map((i) => i.id), 4),
			description: 'Hand-picked highlights for the gallery.'
		}
	]
};

export interface MockAccount extends User {
	password: string;
}

export const mockUsers: MockAccount[] = [
	{
		uid: 'u1',
		email: 'visitor@demo.com',
		password: 'demo1234',
		displayName: 'Jamie Visitor',
		isCurator: false
	},
	{
		uid: 'u2',
		email: 'curator@demo.com',
		password: 'demo1234',
		displayName: 'Alex Curator',
		isCurator: true
	}
];
