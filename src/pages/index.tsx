// import Layout from '@/components/layout'

// export default function IndexPage() {
//   return (
//     <Layout title="Home | Next.js + TypeScript Example">
//       <main>
//         <div className='flex min-h-screen flex-col items-center justify-center text-center'>
//           <h1 className="text-2xl">Hello Next.js 👋</h1>
//           <p className='mt-2 text-gray-800'>
//             A starter for Next.js, Tailwind CSS, and TypeScript
//           </p>
//         </div>
//       </main>
//     </Layout>
//   )
// }

import { useTheme } from "next-themes"
// import { VFC } from "react"

// import { UserTable } from "@/components/model/User/UserTable"

// import { Spacer } from "@/components/ui/Spacer"

// import { mockUserList } from "@/mocks/User"

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

const TopPageView: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTheme(event.target.value)
  }

  return (
    <main
      className="flex flex-col items-center p-4 h-screen"
      onChange={handleChange}
    >
      <div className="navbar bg-base-100 border">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      <select className="w-full max-w-xs select select-bordered mt-10">
        <option disabled selected>
          Pick your favorite theme
        </option>
        {THEMES.map((themeName) => (
          <option key={themeName}>{themeName}</option>
        ))}
      </select>
      <div className="text-center prose mt-4">
        <h1>Play with daisyUI on Next.js!</h1>
        <h2>
          current theme is
          <span className="pl-2 text-primary">{theme}</span>
        </h2>
        <button className="btn btn-secondary mt-4">Button</button>
      </div>
      <div className="card max-w-96 bg-base-100 mt-4 border-2">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default TopPageView;
