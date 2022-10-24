import { Framework } from './data-schema';
import {
  githubStarsBadge,
  githubStarsStat,
  npmWeeklyDownloadsStat,
} from '../lib/info-utils';

export const svelte: Framework = {
  name: { value: 'Svelte', link: 'https://svelte.dev/' },
  githubStars: githubStarsStat('sveltejs/svelte'),
  npmWeeklyDownloads: npmWeeklyDownloadsStat('svelte'),

  loved: {
    value: 75,
  },
  usage: {
    value: 20,
  },
  retention: {
    value: 90,
  },

  metaFrameworks: [
    {
      value: 'SvelteKit',
      link: 'https://kit.svelte.dev/',
      badge: githubStarsBadge('sveltejs/kit'),
    },
  ],
  render: { value: 'CSR/SPA, SSG, SSR, PWA' },
  releaseDate: { value: '2019' },
};
