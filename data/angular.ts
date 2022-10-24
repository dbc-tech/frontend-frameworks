import { Framework } from './data-schema';
import {
  githubStarsBadge,
  githubStarsStat,
  npmWeeklyDownloadsStat,
} from '../lib/info-utils';

export const angular: Framework = {
  name: { value: 'Angular', link: 'https://angular.io/' },
  githubStars: githubStarsStat('angular/angular'),
  npmWeeklyDownloads: npmWeeklyDownloadsStat('angular'),

  loved: {
    value: 52,
  },
  usage: {
    value: 54,
  },
  retention: {
    value: 45,
  },

  metaFrameworks: [
    {
      value: 'Analog.js',
      link: 'https://analogjs.org/',
      badge: githubStarsBadge('analogjs/analog'),
    },
  ],
  usedBy: { value: 'Google, Microsoft' },
  render: { value: 'CSR/SPA, SSG, SSR, PWA' },
  releaseDate: { value: '2010' },
};
