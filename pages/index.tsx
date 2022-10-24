/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { DataTable } from 'components/data-table/data-table';
import { MethodCard } from 'components/info-cards/method-card';
import { OthersCard } from 'components/info-cards/others-card';
import { PrologueCard } from 'components/info-cards/prologue-card';
import { QwikCard } from 'components/info-cards/qwik-card';
import { SolidCard } from 'components/info-cards/solid-card';
import { TlDrCard } from 'components/info-cards/tldr-card';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useQuery } from 'react-query';
import { AngularCard } from '../components/info-cards/angular-card';
import { ReactCard } from '../components/info-cards/react-card';
import { SvelteCard } from '../components/info-cards/svelte-card';
import { VueCard } from '../components/info-cards/vue-card';
import { getData } from '../data';

const Home: NextPage = () => {
  const { data, status, error } = useQuery('data', getData);

  if (status === 'error')
    return (
      <div className="flex items-center justify-center w-screen h-screen align-middle">
        {error instanceof Error ? error.message : 'Oops!'}
      </div>
    );

  if (status === 'loading' || data == null)
    return (
      <div className="flex items-center justify-center w-screen h-screen align-middle">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-start p-10">
      <Head>
        <title>Frontend Frameworks</title>
      </Head>
      <h1 className="pt-16 pb-4 text-4xl font-bold leading-tight text-center">
        Frontend
        <br /> Frameworks & Libraries
      </h1>

      <h2 className="pb-16 text-lg text-center">
        A simplified comparison of the most popular Typescript frontend
        frameworks and libraries
      </h2>

      <DataTable data={data} />

      <TlDrCard />

      <PrologueCard />

      <MethodCard />

      <AngularCard />

      <ReactCard />

      <VueCard />

      <SvelteCard />

      <SolidCard />

      <QwikCard />

      <OthersCard />
    </div>
  );
};

export default Home;
