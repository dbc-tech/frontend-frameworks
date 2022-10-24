/* eslint-disable react/no-unescaped-entities */
import { ExternalLink } from 'components/external-link';
import { InfoCard } from 'components/info-card';
import { List } from 'components/list';
import { Why, WhyNot } from 'components/text';

export const SolidCard = () => {
  return (
    <InfoCard title="Solid">
      <List>
        <li>
          Solid is on the top of the Retention criterion in{' '}
          <ExternalLink href="https://2021.stateofjs.com/en-US/libraries/front-end-frameworks">
            2021StateOfJS
          </ExternalLink>
          . Even though, it is fairly new, there has been a very positive
          reaction among frontend developers community.
        </li>
        <li>
          It is a declarative frontend library, where the data's behavior is
          tied to its declaration. There is no virtual DOM to diff, and real DOM
          is updated based on the declarative reactivity model.
        </li>
        <li>
          Similar to React and Vue, Solid is component-centric, and uses JSX and
          the similar functional component structure, so it's easy to use for
          React and Vue developers. There are some small JSX enhancements that
          makes using Solid more pleasant.
        </li>
        <li>
          It is one of the{' '}
          <ExternalLink href="https://krausest.github.io/js-framework-benchmark/2022/table_chrome_102.0.5005.61.html">
            fastest
          </ExternalLink>{' '}
          modern frontend libraries.
        </li>
        <li>
          There is also a meta-framework on offer (still in beta), called{' '}
          <ExternalLink href="https://start.solidjs.com/getting-started/what-is-solidstart">
            SolidStart
          </ExternalLink>{' '}
          , which offers all the usual features.
        </li>
      </List>

      <Why />
      <List>
        <li>It has the highest retention which means DX is great.</li>
        <li>It is among the fastest frameworks.</li>
        <li>
          The bundle size is smaller compared to the current popular frameworks.
        </li>
        <li>
          Thing are explicit and simple, which makes sense, and is pleasant to
          work with.
        </li>
      </List>

      <WhyNot />
      <List>
        <li>
          As a new framework, it is expected to have less libraries/plugins and
          less community support.
        </li>
      </List>
    </InfoCard>
  );
};
