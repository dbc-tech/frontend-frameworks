/* eslint-disable react/no-unescaped-entities */
import { ExternalLink } from 'components/external-link';
import { InfoCard } from 'components/info-card';
import { List } from 'components/list';
import { Why, WhyNot } from 'components/text';

export const SvelteCard = () => {
  return (
    <InfoCard title="Svelte">
      <List>
        <li>
          Svelte has been among the most loved frameworks in the Stack Overflow
          Surveys both in{' '}
          <ExternalLink href="https://survey.stackoverflow.co/2022/#section-most-loved-dreaded-and-wanted-web-frameworks-and-technologies">
            2022
          </ExternalLink>{' '}
          and{' '}
          <ExternalLink href="https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks">
            2021
          </ExternalLink>
        </li>
        <li>
          It does not use a virtual DOM to apply the state update to th UI,
          rather it directly changes the real DOM. It removes the VDOM diff
          operation, and wires up the DOM update logic at the build time,
          freeing up some browser resources during the runtime.
        </li>
        <li>
          One of its main focus point is to improve DX by writing less code.
          This is mainly achieved by different special syntax for reactive
          declarations. Although this results in less code and it may be{' '}
          <ExternalLink href="https://imfeld.dev/writing/how_svelte_makes_two_way_binding_safe">
            safe
          </ExternalLink>
          , but might not be very appealing, as things are a bit
          hidden/implicit, and developers should remember and correctly use some
          Svelte-specific syntax/magic.
        </li>
        <li>
          The learning curve is somehow similar to Vue, special syntax must be
          learned both for script and markup. It is a component centric
          framework, so it's easy to adopt for React and Vue developers.
        </li>
        <li>
          Its meta-framework,{' '}
          <ExternalLink href="https://kit.svelte.dev/">SvelteKit</ExternalLink>,
          provides the usual features like SSR and routing, similar to Next.js
          and Nuxt.js.
        </li>
      </List>
      <List>
        <li>It has a large community and it is used in many applications.</li>
        <li>
          Its learning curve is perceived to be smooth, and DX is great. So the
          process of adoption should be fast.
        </li>
        <li>
          It is flexible and progressive, which means means it is easily
          extensible and can be utilized gradually.
        </li>
      </List>

      <Why />
      <List>
        <li>It is one of the most loved framework so DX should be really great.</li>
        <li>You definitely write less code (less boilerplate)</li>
        <li>Better performance compared to libraries that use VDOM.</li>
      </List>

      <WhyNot />
      <List>
        <li>The separation of script and markup, and special syntax could be discouraging.</li>
        <li>As a new framework, it is expected to have less libraries/plugins.</li>
        <li>Two-way data binding dilemma.</li>
      </List>
    </InfoCard>
  );
};
