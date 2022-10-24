import { Framework } from './data-schema';
import {
  githubApiEndpoint,
  githubStarsBadge,
  npmDownloads,
  npmDownloadsBadge,
} from '../lib/info-utils';

export const vue: Framework = {
  name: { value: 'Vue', link: 'https://vuejs.org/' },
  githubStars: {
    badge: githubStarsBadge('vuejs/vue', { style: 'for-the-badge' }),
    link: githubApiEndpoint('vuejs/vue'),
    value: 0,
  },
  npmWeeklyDownloads: {
    badge: npmDownloadsBadge('vue', { style: 'for-the-badge' }),
    link: npmDownloads('vue'),
    value: 0,
  },

  loved: {
    value: 63,
  },
  usage: {
    value: 51,
  },
  retention: {
    value: 80,
  },

  metaFrameworks: [
    {
      value: 'Nuxt.js',
      link: 'https://nuxtjs.org/',
      badge: githubStarsBadge('nuxt/nuxt.js'),
    },
    {
      value: 'Quasar',
      link: 'https://quasar.dev/',
      badge: githubStarsBadge('quasarframework/quasar'),
    },
  ],
  usedBy: { value: 'Alibaba, Grammarly, GitLab' },
  render: { value: 'CSR/SPA, SSG, SSR, PWA' },
  releaseDate: { value: '2014' },
};
