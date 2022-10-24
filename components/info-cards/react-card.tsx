/* eslint-disable react/no-unescaped-entities */
import { ExternalLink } from 'components/external-link';
import { InfoCard } from 'components/info-card';
import { List } from 'components/list';
import { Why, WhyNot } from 'components/text';

export const ReactCard = () => {
  return (
    <InfoCard title="React">
      <List>
        <li>
          React is one of the most popular frontend framework/library and it has
          a large community and ecosystem.
        </li>
        <li>
          It is actively developed by both enterprise (Meta) and open source
          community which results in very fast improvement and lost of
          innovation.
        </li>
        <li>
          <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink> is the
          most popular React meta-framework that supports Typescript. It has
          many enterprise out of the box, where you can progressively adopt:
          <List>
            <li>
              Hybrid SSG and SSR on top of individual support for all rendering
              mechanism.
            </li>
            <li>Optimized for Edge deployment.</li>
            <li>Image optimization.</li>
            <li>Internationalized Routing.</li>
            <li>
              Rich documentation and support for deployment to different cloud
              providers including their in-house platform{' '}
              <ExternalLink href="https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=banner&utm_campaign=next-website">
                Vercel
              </ExternalLink>
              .
            </li>
          </List>
        </li>
        <li>
          React is a progressive and minimal library and developers can choose
          to adopt as much as they need.{' '}
          <ExternalLink href="https://create-react-app.dev/">
            Create React App
          </ExternalLink>{' '}
          can be a easy and simple choice for SPA and PWA development while
          Next.js makes it easy to do SSR and SSG. On the other hand{' '}
          <ExternalLink href="https://remix.run/">Remix</ExternalLink> using
          Nested Routes to achieve parallel layout fetch and greatly improve
          page load time.
        </li>
        <li>
          The learning curve varies based on the needs and which meta-framework
          to go with, but rich documentation and huge community helps to
          minimize the effort.
        </li>
        <li>
          The other benefit of React is that a react developer can instantly
          start developing native mobile apps using{' '}
          <ExternalLink href="https://reactnative.dev/">
            React Native
          </ExternalLink>
          .
        </li>
      </List>

      <Why />
      <List>
        <li>
          React is on the top of the list in terms of community size, usage, and
          retention. So it would be rare to get stuck!
        </li>
        <li>
          It is progressive and flexible so it can be picked up at the required
          level.
        </li>
        <li>
          The JSX syntax is intuitive and makes the development easier and more
          close to native app development.
        </li>
        <li>
          Next.js is a feature-rich and reliable meta-framework that has been
          inspiring other frameworks.
        </li>
      </List>

      <WhyNot />
      <List>
        <li>
          The application size can get large compared to other frameworks.
        </li>
        <li>
          It might be slower in some areas compared to other modern new
          frameworks.
        </li>
      </List>
    </InfoCard>
  );
};
