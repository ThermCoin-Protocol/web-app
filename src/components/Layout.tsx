import Footer from './footer';
import Navbar from './navbar';
export interface ILayout {
  children: any;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      {/* <Head>
        <title>ThermCoin</title>
      </Head> */}
      <div className="flex min-h-screen flex-col text-gray-800">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
