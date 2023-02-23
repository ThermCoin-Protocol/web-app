import React from 'react';

import VerginaSun from './VerginaSun.png';

import Image from 'next/image';

// const THEMES = [
//   'cupcake',
//   'bumblebee',
//   'corporate',
//   'synthwave',
//   'retro',
//   'cyberpunk',
//   'lofi',
//   'pastel',
//   'fantasy',
//   'cmyk',
//   'autumn',
//   'business',
//   'coffee',
//   'winter',
//   'night',
// ];

export default function Navbar() {
  const navbarNarrow = () => {
    return (
      <div>
        <div className="dropdown-end dropdown visible sm:invisible">
          <label tabIndex={0} className="btn-ghost btn-circle btn mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box mt-7 w-40 bg-primary-content text-neutral shadow-xl"
          >
            <li>
              <a
                className="text-lg"
                href="https://github.com/ThermCoin-Protocol"
              >
                GitHub
              </a>
            </li>
            <li>
              <a className="text-lg" href="https://discord.gg/evAR9ng8WR">
                Discord
              </a>
            </li>
            <li>
              <a className="text-lg">Primer</a>
            </li>
            <li>
              <a className="text-lg">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="navbar z-20 my-8 flex hidden justify-between text-primary-content sm:flex">
        <div className="navbar-start mx-8 p-10">
          <Image
            src={VerginaSun}
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <span className="px-3 text-xl font-bold tracking-wide">
            Thermcoin
          </span>
        </div>
        <div className="hover mx-12 sm:flex">
          <div className="x-10 flex justify-between">
            {['Discord', 'GitHub', 'Docs', 'Blog'].map((item) => (
              <a className="btn-ghost btn-md btn bg-base-100 text-xl tracking-wide text-base-content hover:bg-neutral hover:text-secondary">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="navbar z-20 mx-8 flex justify-between text-base-content sm:hidden">
        <div className="navbar-start mx-2 p-4">
          <span className="text-xl font-bold tracking-wide">Thermcoin</span>
        </div>
        {navbarNarrow()}
      </div>
    </>

    // <div className="navbar fixed z-20 bg-neutral text-neutral-content">

    //   {/* <div className="navbar-end invisible sm:visible text-base-content">
    //     <select className="select-bordered select w-2/5">
    //       <option defaultValue="light" selected>
    //         Theme
    //       </option>
    //       {THEMES.map((themeName) => (
    //         <option key={themeName}>{themeName}</option>
    //       ))}
    //     </select>
    //   </div> */}
    // </div>
  );
}
