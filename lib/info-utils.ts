import { Stat } from '../data/data-schema';

export const githubStarsBadge = (
  namespace: string,
  { style = 'flat', logo = 'github', label = '', color = 'blue' } = {}
) =>
  `https://img.shields.io/github/stars/${namespace}?label=${label}&style=${style}&logo=${logo}&color=${color}&link=${githubRepo(
    namespace
  )}`;

export const npmDownloadsBadge = (
  packageName: string,
  { style = 'flat', logo = 'npm', label = '', color = 'blue' } = {}
) =>
  `https://img.shields.io/npm/dw/${packageName}?label=${label}&style=${style}&logo=${logo}&color=${color}`;

export const githubApiEndpoint = (namespace: string) =>
  `https://api.github.com/repos/${namespace}`;

export const npmDownloads = (packageName: string) =>
  `https://api.npmjs.org/downloads/point/last-week/${packageName}`;

export const githubRepo = (namespace: string) =>
  `https://github.com/${namespace}`;

export const githubStarsStat = (namespace: string): Stat => ({
  badge: githubStarsBadge(namespace, { style: 'for-the-badge' }),
  link: githubApiEndpoint(namespace),
});

export const npmWeeklyDownloadsStat = (packageName: string): Stat => ({
  badge: npmDownloadsBadge(packageName, { style: 'for-the-badge' }),
  link: npmDownloads(packageName),
});
