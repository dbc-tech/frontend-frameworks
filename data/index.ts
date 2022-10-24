import { angular } from './angular';
import { qwik } from './qwik';
import { react } from './react';
import { solid } from './solid';
import { svelte } from './svelte';
import { vue } from './vue';

export const getData = async () => {
  // Note: github/npm apis hasa very low rate-limit for unauthenticated requests, so some recent data are used

  react.githubStars.value = 197_000;
  vue.githubStars.value = 200_000;
  angular.githubStars.value = 84_400;
  svelte.githubStars.value = 62_800;
  solid.githubStars.value = 22_900;
  qwik.githubStars.value = 12_200;

  react.npmWeeklyDownloads.value = 17_758_196;
  vue.npmWeeklyDownloads.value = 3_773_746;
  angular.npmWeeklyDownloads.value = 568_575;
  svelte.npmWeeklyDownloads.value = 402_386;
  solid.npmWeeklyDownloads.value = 45_224;
  qwik.npmWeeklyDownloads.value = 6_503;

  return [react, vue, angular, svelte, solid, qwik];
};
