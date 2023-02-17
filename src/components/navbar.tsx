import React from 'react';

const THEMES = [
  'cupcake',
  'bumblebee',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'lofi',
  'pastel',
  'fantasy',
  'cmyk',
  'autumn',
  'business',
  'coffee',
  'winter',
  'night',
];

export default function Navbar() {
  return (
    <div className="navbar fixed z-20 bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow-md text-base-content"
          >
            <li>
              <a href="https://github.com/ThermCoin-Protocol">GitHub</a>
            </li>
            <li>
              <a href="https://discord.gg/evAR9ng8WR">Discord</a>
            </li>
            <li>
              <a>Primer</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn-ghost btn text-4xl normal-case">
          ThermCoin
        </a>
      </div>
      <div className="navbar-end invisible sm:visible text-base-content">
        <select className="select-bordered select w-2/5">
          <option defaultValue="light" selected>
            Theme
          </option>
          {THEMES.map((themeName) => (
            <option key={themeName}>{themeName}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
