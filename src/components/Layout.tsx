import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';
export interface ILayout {
  children: any;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>ThermCoin</title>
      </Head>
      <div className="flex flex-col text-gray-800 min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;