import { Framework } from './data-schema';
import {
  githubStarsBadge,
  githubStarsStat, npmWeeklyDownloadsStat
} from '../lib/info-utils';

export const react: Framework = {
  name: { value: 'React', link: 'https://reactjs.org/' },
  githubStars: githubStarsStat('facebook/react'),
  npmWeeklyDownloads: npmWeeklyDownloadsStat('react'),

  loved: {
    value: 68,
  },
  usage: {
    value: 80,
  },
  retention: {
    value: 84,
  },

  metaFrameworks: [
    {
      value: 'Next.js',
      link: 'https://nextjs.org/',
      badge: githubStarsBadge('vercel/next.js'),
    },
    {
      value: 'Remix',
      link: 'https://remix.run/',
      badge: githubStarsBadge('remix-run/remix'),
    },
  ],
  usedBy: { value: 'Meta, Netflix, Uber, Airbnb' },
  render: { value: 'CSR/SPA, SSG, SSR, ISG, PWA' },
  releaseDate: { value: '2013' },
};
