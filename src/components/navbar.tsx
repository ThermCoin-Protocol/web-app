

import React from 'react'
import { useTheme } from 'next-themes'

const THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];

export default function Navbar() {
    
  return (
    <div className="navbar bg-base-300 border-2 border-base-300 fixed z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>GitHub</a></li>
            <li><a>Discord</a></li>
            <li><a>Primer</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-3xl">Therm<div className="text-error">Coin</div></a>
      </div>
      <div className="navbar-end">
        <select className="select select-bordered w-1/5">
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

