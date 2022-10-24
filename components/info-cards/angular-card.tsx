/* eslint-disable react/no-unescaped-entities */
import { ExternalLink } from 'components/external-link';
import { InfoCard } from 'components/info-card';
import { List } from 'components/list';
import { Why, WhyNot } from 'components/text';

export const AngularCard = () => {
  return (
    <InfoCard title="Angular">
      <List>
        <li>
          Angular is the most prescriptive and self-contained framework among
          the list, as it takes an all-in-one approach while allows for
          plugin-based extension.
        </li>
        <li>
          Being prescriptive, eliminates or at least reduces the effort to find
          the "right" approach for different things, but at the same time it
          hinders the process of rapid improvements.
        </li>
        <li>
          The learning curve is steep, as the developer requires to learn those
          prescriptions which might not makes sense to them at times. This might
          be one of the reasons why it is among the lease favorite frameworks.
        </li>
        <li>
          An argument can be made for Angular in our team, as we use{' '}
          <ExternalLink href="https://nestjs.com/">Nest.js</ExternalLink> which
          is heavily inspired by Angular and many similar patterns can be found.
        </li>
      </List>

      <Why />
      <List>
        <li>
          It provides out-of-the-box solutions for most aspects of the web
          development.
        </li>
        <li>
          It is appealing to the backend developer with Nest.js experience.
        </li>
      </List>

      <WhyNot />
      <List>
        <li>
          Its very prescriptive approach results in less flexibility and
          adoption of things outside of the Angular world could become tricky.
        </li>
        <li>Steep learning curve.</li>
        <li>
          Two-way data binding could lead to many difficulties if it's not used
          correctly.
        </li>
      </List>
    </InfoCard>
  );
};
