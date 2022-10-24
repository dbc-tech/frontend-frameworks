import { Framework } from './data-schema';
import {
  githubStarsBadge,
  githubStarsStat, npmWeeklyDownloadsStat
} from '../lib/info-utils';

export const solid: Framework = {
  name: { value: 'Solid', link: 'https://www.solidjs.com/' },
  githubStars: githubStarsStat('solidjs/solid'),
  npmWeeklyDownloads: npmWeeklyDownloadsStat('solid-js'),

  usage: {
    value: 3,
  },
  retention: {
    value: 90,
  },

  metaFrameworks: [
    {
      value: 'SolidStart',
      link: 'https://start.solidjs.com/',
      badge: githubStarsBadge('solidjs/solid-start'),
    },
  ],

  render: { value: 'CSR/SPA, SSG, SSR, PWA' },
  releaseDate: { value: '2021' },
};
