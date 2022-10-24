import { Framework } from './data-schema';
import {
  githubStarsBadge,
  githubStarsStat, npmWeeklyDownloadsStat
} from '../lib/info-utils';

export const qwik: Framework = {
  name: { value: 'Qwik', link: 'https://qwik.builder.io/' },
  githubStars: githubStarsStat('BuilderIO/qwik'),
  npmWeeklyDownloads: npmWeeklyDownloadsStat('@builder.io/qwik'),

  metaFrameworks: [
    {
      value: 'QwikCity',
      link: 'https://qwik.builder.io/qwikcity/overview/',
      badge: githubStarsBadge('BuilderIO/qwik'),
    },
  ],
  
  render: { value: 'CSR/SPA, SSG, SSR, PWA' },
  releaseDate: { value: '2021' },
};
