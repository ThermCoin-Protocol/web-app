import Hero from '@/components/hero';
import Features from '@/components/features';
import Faq from '@/components/faq';
// import Stats from '@/components/stats';
import Cards from '@/components/cards';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';
import Head from 'next/head';
import Resources from '@/components/resources';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>ThermCoin</title>
        <meta
          property="title"
          content="ThermCoin - The Future's Energy Based Digital Currency"
          key="title"
        />
        <meta
          name="description"
          content="The ThermCoin protocol is a decentralized, open-source, and community-driven project that aims to create a new digital currency that is based on energy economics."
          key="desc"
        />
        <meta property="og:image" content="./logo.png" />
        <link rel="Sun Icon" href="../../VerginaSun.ico" />
      </Head>
      <div className="flex flex-col text-primary">
        <Hero />
        <Cards />
        <Resources />
        {/* <Stats /> */}
        {/* <Features /> */}
        {/* <Action /> */}
        {/* <Faq /> */}
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
