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
          key="title" />
        <meta
          name="description"
          content="ThermCoin's roadmap outlines the project's goals and plans for the future. Coming soon."
          key="desc" />
        <link rel="Sun Icon" href="../../VerginaSun.ico" />
      </Head>
      <div className="flex flex-col text-gray-800 m-4 md:m-10 flex-grow h-full justify-center">
        <div className="flex flex-col items-center text-gray-800 justify-center">
          <h1 className="text-5xl font-bold tracking-wide text-gray-800 md:text-6xl lg:text-7xl">
            Coming Soon
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-800 text-center md:text-2xl lg:text-3xl">
            ThermCoin's roadmap outlines the project's goals and plans for the future.
          </p>
          <AnimatedBackground />
        </div>
      </div>
    </>
  );
}

export default Roadmap;

Roadmap.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
