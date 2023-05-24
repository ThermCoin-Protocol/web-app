// import AnimatedBackground from '@/components/animatedbackground';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';
import Head from 'next/head';

const items = [
  '- ERC20 Token with variable supply mechanics ✅',
  '- PoW and smart-contract compatible blockchain network + Testnet launch ☑️',
  '- Core mining pool with equitable reward system ☑️',
  '- Integrate chainlink to fetch global energy data and update supply ☑️',
  '- Launch ThermCoin protocol v1 ☑️',
  '- ThermCoin exchange / Fiat on-ramp ☑️',
  '- Bitcoin bridge / tBTC launch ☑️',
];

const Roadmap: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>ThermCoin - Roadmap</title>
        <meta property="title" content="ThermCoin - Roadmap" key="title" />
        <meta
          name="description"
          content="ThermCoin's roadmap outlines the project's goals and plans for the future. Coming soon."
          key="desc"
        />
        <meta property="og:image" content="./logo.png" />
        <link rel="Sun Icon" href="../../VerginaSun.ico" />
      </Head>
      <div className="m-4 flex h-full max-w-4xl flex-grow flex-col items-center justify-center text-gray-800 md:m-10">
        <div className="flex flex-col">
          <h1 className="mb-4 text-4xl font-bold">Roadmap</h1>
          <div className="flex flex-col space-y-4">
            {items.map((item) => (
              <div className="flex flex-row">
                <p className="text-xl font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;

Roadmap.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
