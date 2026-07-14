# ChromaGallery

An online museum/gallery for browsing curated art collections. Visitors can explore items, collections, and curated lists; curators can add, edit, and organize items and collections.

Built with SvelteKit and TypeScript, styled with Tailwind CSS. Data is currently backed by an in-memory mock layer (see `src/lib/data/mockData.ts`) rather than a live backend.

## Features

- **Animated homepage** with a rotating slideshow hero and cycling flavor-text headline
- **Browse & search** items and collections, with grid/row layouts for items and collections
- **Featured items** curated by staff and highlighted separately
- **Collections & lists** — group items into collections, build personal/curated lists, and bookmark items
- **Drag-and-drop reordering** for lists and featured items (`svelte-dnd-action`)
- **Curator dashboard** — add/edit items and collections, manage featured items, curator-only routes
- **Accounts** — sign up, sign in, password reset, profile settings, account completion flow
- **Responsive, dark-friendly UI** with a shared design system (typography, icons, modals/dialogs, custom backgrounds)

## Developing

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

## Building

```bash
pnpm build
```

Preview the production build with `pnpm preview`.

## Other scripts

- `pnpm check` — type-check with svelte-check
- `pnpm lint` — check formatting and lint
- `pnpm format` — auto-format with Prettier
