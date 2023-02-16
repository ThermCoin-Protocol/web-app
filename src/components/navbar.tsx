import React from 'react'

const THEMES = [
  "cupcake",
  "bumblebee",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "lofi",
  "pastel",
  "fantasy",
  "cmyk",
  "autumn",
  "business",
  "coffee",
  "winter",
]

export default function Navbar() {
    
  return (
    <div className="navbar bg-info fixed z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href='https://github.com/ThermCoin-Protocol'>GitHub</a></li>
            <li><a href='https://discord.gg/evAR9ng8WR'>Discord</a></li>
            <li><a>Primer</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-4xl text-nuetral">Therm Coin</a>
      </div>
      <div className="navbar-end invisible sm:visible">
        <select className="select select-bordered w-2/5">
          <option defaultValue='light' selected>
            theme
          </option>
          {THEMES.map((themeName) => (
            <option key={themeName}>{themeName}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

