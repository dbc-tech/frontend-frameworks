/* eslint-disable react/no-unescaped-entities */
import { ExternalLink } from '../external-link';
import { InfoCard } from '../info-card';

export const OthersCard = () => {
  return (
    <InfoCard title="Others">
      <p>
        There are other frameworks, such as{' '}
        <ExternalLink href="https://lit.dev/">Lit</ExternalLink>,{' '}
        <ExternalLink href="https://alpinejs.dev/">Alpine</ExternalLink>, and{' '}
        <ExternalLink href="https://preactjs.com/">Preact</ExternalLink> that
        are not included in this evaluation, mainly due to the fact they are not
        mature enough or their ecosystem do not addresses all of our criteria.
      </p>
      <p>
        There has also been a new breed of frameworks/libraries that focus more
        on building and delivery of web applications and allow for using other
        frontend libraries. In{' '}
        <ExternalLink href="https://astro.build/">Astro</ExternalLink>, for
        instance, you can use any supported UI framework (React, Svelte, Vue,
        etc.) to render islands (which are basically the interactive components
        within an HTML page) in the browser, which is done using partial
        hydration, somehow similar to Qwik, but less granular. The other one is{' '}
        <ExternalLink href="https://stenciljs.com/">Stencil</ExternalLink> which
        focuses on creating portable UI components based on{' '}
        <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">
          Web Components
        </ExternalLink>{' '}
        standard.
      </p>
    </InfoCard>
  );
};
