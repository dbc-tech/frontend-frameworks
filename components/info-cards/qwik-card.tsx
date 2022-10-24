/* eslint-disable react/no-unescaped-entities */
import { List } from 'components/list';
import { ExternalLink } from 'components/external-link';
import { InfoCard } from 'components/info-card';
import { Why, WhyNot } from 'components/text';

export const QwikCard = () => {
  return (
    <InfoCard title="Qwik">
      <List>
        <li>
          Qwik is a very new library from{' '}
          <ExternalLink href="https://www.builder.io/">Builder.io</ExternalLink>{' '}
          and its main focus is to improve the performance and user experience
          through a mechanism called "Resumability", which is basically download
          and run the JS code only when it is needed.
        </li>
        <li>
          It uses JSX and React-like component definition, with minimum special
          syntax which makes it easy to adopt. It also provides some simple and
          intuitive mechanisms to implement reactivity, and granular
          lazy-loading.
        </li>
        <li>
          QwikCity, its meta-framework, mainly provides the file-base routing.
        </li>
      </List>

      <Why />
      <List>
        <li>
          It should result in a very good overall{' '}
          <ExternalLink href="https://web.dev/vitals/">Web Vitals</ExternalLink>{' '}
          score , which means better user experience, even for complex
          applications.
        </li>
        <li>
          Resumability and fine-grained sub-component lazy loading seems to be a
          great approach for the performance improvement of today's
          ever-expanding modern web applications.
        </li>
      </List>

      <WhyNot />
      <List>
        <li>It is fairy new and it has a small community.</li>
      </List>
    </InfoCard>
  );
};
