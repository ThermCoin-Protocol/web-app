import AnimatedBackground from '@/components/animatedbackground';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';
import Head from 'next/head';

const Roadmap: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>ThermCoin - Roadmap</title>
        <meta
          property="title"
          content="ThermCoin - The Future's Energy Based Digital Currency"
          key="title"
        />
        <meta
          name="description"
          content="ThermCoin's roadmap outlines the project's goals and plans for the future. Coming soon."
          key="desc"
        />
        <link rel="Sun Icon" href="../../VerginaSun.ico" />
      </Head>
      <div className="m-4 flex h-full flex-grow flex-col justify-center text-gray-800 md:m-10">
        <div className="flex flex-col items-center justify-center text-gray-800">
          <h1 className="text-5xl font-bold tracking-wide text-gray-800 md:text-6xl lg:text-7xl">
            Coming Soon
          </h1>
          <p className="mt-6 text-center text-xl leading-8 text-gray-800 md:text-2xl lg:text-3xl">
            ThermCoin's roadmap outlines the project's goals and plans for the
            future.
          </p>
          <AnimatedBackground />
        </div>
      </div>
    </>
  );
};

export default Roadmap;

Roadmap.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
