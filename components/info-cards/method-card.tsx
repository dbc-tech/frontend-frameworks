/* eslint-disable react/no-unescaped-entities */
import { ExternalLink } from 'components/external-link';
import { List } from 'components/list';
import { InfoCard } from '../info-card';

export const MethodCard = () => (
  <InfoCard title='Method'>
    <p>
      Based on the primary criteria and community experience (
      <ExternalLink href="https://2021.stateofjs.com/en-US/libraries/front-end-frameworks">
        2021StateOfJS
      </ExternalLink>{' '}
      and{' '}
      <ExternalLink href="https://survey.stackoverflow.co/2022/#section-most-loved-dreaded-and-wanted-web-frameworks-and-technologies">
        Stack Overflow 2022 Survey
      </ExternalLink>
      ), I selected six frontend frameworks (and their main meta-frameworks).
      They are shown in the table above.
    </p>
    <div>
      The main focus of most of them, recently, has been to:
      <List>
        <li>
          Improve the{' '}
          <ExternalLink href="https://web.dev/vitals/">
            Core Web Vitals
          </ExternalLink>{' '}
          as an indicator of better User Experience.{' '}
        </li>
        <li>
          Improve Developer Experience (faster builds, easier data binding, less
          code, etc.)
        </li>
      </List>
    </div>
    <p>
      <ExternalLink href="https://reactjs.org/">React</ExternalLink>,{' '}
      <ExternalLink href="https://reactjs.org/">Vue</ExternalLink>, and{' '}
      <ExternalLink href="https://reactjs.org/">Angular</ExternalLink> and their
      ecosystem are the most mature frameworks. Applications of different scale
      and complexity have been created using them and used by millions. On the
      other hand, a whole set of new frameworks has come to the picture, using
      some innovative approach as to how to build, bind data, and render.{' '}
      <ExternalLink href="https://qwik.builder.io/">Qwik</ExternalLink> ,{' '}
      <ExternalLink href="https://svelte.dev/">Svelte</ExternalLink>, and{' '}
      <ExternalLink href="https://www.solidjs.com/">Solid</ExternalLink> are in
      this category.
    </p>
    <div>
      I did the evaluation in two steps:
      <List>
        <li>
          Create and run the sample app based on the "Get Started" section of
          the documentation for each framework and its main meta-framework(s)
          where applicable, to get a general understanding of how it works, the
          syntax, and DX.
        </li>
        <li>
          Understand each framework benefits and issues by grasping other
          developers opinion and experience, and reading about its ecosystem.
        </li>
      </List>
    </div>
  </InfoCard>
);
