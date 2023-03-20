import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Faq from '@/components/faq';
import Stats from '@/components/stats';

export default function TopPageView() {

  return (
    <main className="flex h-screen flex-col items-center text-gray-800">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      {/* <Action /> */}
      <Faq />
      <Footer />
    </main>
  );
}
