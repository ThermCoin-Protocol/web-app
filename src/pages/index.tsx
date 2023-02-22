import { useTheme } from 'next-themes';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '@/components/hero';
import Hook from '@/components/hook';
import Action from '@/components/action';
import { useEffect } from 'react';

export default function TopPageView() {
  const { theme, setTheme } = useTheme();

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTheme(event.target.value);
    console.log(theme);
  };

  useEffect(() => {
    setTheme('dark');
  }, []);

  return (
    <main
      className="flex h-screen flex-col items-center"
      onChange={handleChange}
    >
      <Navbar />
      <Hero />
      <Hook />
      <Action />
      <Footer />
    </main>
  );
}
