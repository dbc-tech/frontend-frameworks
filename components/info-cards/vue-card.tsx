/* eslint-disable react/no-unescaped-entities */
import { ExternalLink } from 'components/external-link';
import { InfoCard } from 'components/info-card';
import { List } from 'components/list';
import { Why, WhyNot } from 'components/text';

export const VueCard = () => {
  return (
    <InfoCard title="Vue">
      <List>
        <li>
          Vue is also among the most popular frameworks, offering a progressive
          adoption with official libraries for most frontend development tasks.
        </li>
        <li>
          It enjoys a large community and is being actively maintained and
          developed which creates a pleasant developer experience.
        </li>
        <li>
          The learning curve is shallow based on many developers opinion,
          although I'm not really onboard with too many "magical" attributes and
          syntax.
        </li>
        <li>
          It offers two-way data binding, which has become very popular, but it
          has its own{' '}
          <ExternalLink href="https://chriszempel.com/posts/twowaydb/">
            disadvantages
          </ExternalLink>
        </li>
        <li>
          Similar to Next.js, Vue has two big players in meta-frameworks land:{' '}
          <List>
            <li>
              <ExternalLink href="https://nuxtjs.org/">Nuxt.js</ExternalLink>{' '}
              which offers many of features that Next.js does for React.
            </li>
            <li>
              <ExternalLink href="https://quasar.dev/">Quasar</ExternalLink>{' '}
              which even has a Material-UI-like UI components library and
              supports mobile and desktop.
            </li>
          </List>
        </li>
      </List>
      
      <Why />
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

      <WhyNot />
      <List>
        <li>
          Compared to React, there is smaller number of plugins and libraries.
        </li>
        <li>There are a bit of magic and special syntax to learn and use.</li>
        <li>Two-way data binding dilemma</li>
      </List>
    </InfoCard>
  );
};
