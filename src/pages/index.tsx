import { useTheme } from "next-themes"
import { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Hero from "@/components/hero";
import Hook from "@/components/hook";


const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
]

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
      <Footer />
    </main>
  )
}

// export default TopPageView;
