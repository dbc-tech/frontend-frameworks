/* eslint-disable react/no-unescaped-entities */
import { ExternalLink } from 'components/external-link';
import { List } from 'components/list';
import { InfoCard } from 'components/info-card';

export const PrologueCard = () => (
  <InfoCard title="Prologue">
    <p>
      There might be different <strong>definitions of Frontend</strong>. The
      modern cloud computing and serverless technologies have changed the way a
      web application can be deployed and served, which has resulted in many
      frameworks and build systems steer towards providing a full stack
      development toolchain. Here, a Frontend framework is a software library
      that covers some (significant) portion of the <strong>full stack</strong>{' '}
      spectrum.
    </p>

    <p>
      Most frontend frameworks, intentionally, only provide a core functionality
      which is around rendering the application state to the DOM efficiently.
      This leads to great flexibility and rapid improvement, especially in
      open-source context.
    </p>
    <p>
      However, some teams might not need/want that much flexibility and prefer a
      more wholesome solution. This is where a <strong>meta-framework</strong>,
      which addresses some common concerns such as building, deployment, and
      routing, can help. Here, for each library/framework, the evaluation is
      done with their main meta-framework in mind.
    </p>

    <div>
      Our primary expectations are that the selected frontend framework:
      <List>
        <li>
          Supports <strong>TypeScript</strong>
        </li>
        <li>Is open source, and is actively developed</li>
        <li>
          Is easy to learn for developers with limited JavaScript experience
        </li>
        <li>Supports the main rendering mechanisms (CSR, SSG, SSR) and PWA</li>
        <li>
          Is <strong>extensible</strong> through plugins and modules
        </li>
        <li>Is easily testable through unit & e2e tests</li>
      </List>
    </div>

    <p>
      As JavaScript ecosystem is rapidly improving, and web development getting
      more exciting and complex, we also want to use established{' '}
      <strong>bleeding edge technologies</strong>, so we can enjoy the best
      performance and developer experience.
    </p>
    <p>
      Aside from the framework(s), there has been an emerging novel approach,
      called{' '}
      <strong>
        <ExternalLink href="https://micro-frontends.org/">
          Micro-Frontend
        </ExternalLink>
      </strong>{' '}
      which allows teams to utilize different stacks to develop their own "part"
      of a web application and it may entail the entire full stack. Although
      this is not our main concern at the moment, it might be helpful to get
      adopted in our future web applications.
    </p>
  </InfoCard>
);
