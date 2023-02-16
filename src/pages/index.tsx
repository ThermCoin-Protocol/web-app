import { useTheme } from "next-themes"
import { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Hero from "@/components/hero";
import Hook from "@/components/hook";
import Action from "@/components/action";

export default function TopPageView() {
  const { theme, setTheme } = useTheme();

  // useEffect(() => {
  //   setTheme(THEMES[0]);
  // }, []);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTheme(event.target.value);
  }

  return (
    <main
      className="flex flex-col items-center h-screen"
      onChange={handleChange}
    >
      <Navbar />
      <Hero />
      <Hook />
      <Action />
      <Footer />
    </main>
  )
}

// export default TopPageView;
