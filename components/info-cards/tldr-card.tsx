/* eslint-disable @next/next/no-img-element */
import { InfoCard } from '../info-card';

export const TlDrCard = () => (
  <InfoCard title="TL;DR">
    <div className="flex flex-wrap items-center gap-20 pt-8">
      <div className="flex flex-col gap-2 font-semibold">
        <p className="mb-2 text-green-400">Safe and Stable</p>
        <a
          className="flex items-center justify-between w-48"
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="text-lg">Vue</div>
          <img src="./nuxt-logo.svg" alt="nuxt logo" className="h-7" />
        </a>
        <a
          className="flex items-center justify-between w-48"
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="text-lg">React</div>
          <img src="./nextjs-logo.svg" alt="next logo" className="h-4" />
        </a>
      </div>
      <div className="flex flex-col gap-2 font-semibold">
        <p className="mb-2 text-red-400">Bleeding Edge</p>
        <a
          className="flex items-center justify-between w-48"
          href="https://qwik.builder.io/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="text-lg">Qwik</div>
          <img src="./qwik-logo.svg" alt="nuxt logo" className="h-7" />
        </a>
        <a
          className="flex items-center justify-between w-48"
          href="https://www.solidjs.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="text-lg">Solid</div>
          <img src="./solid-logo.svg" alt="next logo" className="h-6" />
        </a>
      </div>
    </div>
  </InfoCard>
);
