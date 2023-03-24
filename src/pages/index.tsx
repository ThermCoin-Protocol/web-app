import Hero from '@/components/hero';
import Features from '@/components/features';
import Faq from '@/components/faq';
import Stats from '@/components/stats';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center text-gray-800">
      <Hero/>
      <Stats />
      <Features />
      {/* <Action /> */}
      <Faq />
    </div>
  );
}

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
