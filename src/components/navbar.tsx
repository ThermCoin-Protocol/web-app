import React from 'react';

import VerginaSun from './img/VerginaSun.png';

import Image from 'next/image';
import Link from 'next/link';

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
            className="dropdown-content menu rounded-box mt-7 w-60 border border-black bg-base-100 shadow-xl"
          >
            <li>
              <a className="text-xl">Docs</a>
            </li>
            <li>
              <a
                className="text-xl"
                href="https://github.com/ThermCoin-Protocol"
              >
                Codebase
              </a>
            </li>
            <li>
              <Link href="/">
                <a className="text-xl">Blog</a>
              </Link>
            </li>
            <li>
              <a className="text-xl" href="https://discord.gg/evAR9ng8WR">
                Forum
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="navbar z-20 my-8 flex hidden justify-between text-base-content sm:flex">
        <div className="navbar-start mx-8 p-10 ">
          <Image
            src={VerginaSun}
            alt="Picture of the author"
            width={50}
            height={50}
            className="m-0"
          />
          <span className="px-3 text-xl font-bold">Thermcoin</span>
        </div>
        <div className="hover mx-12 sm:flex">
          <div className="x-10 flex justify-between">
            {['Docs', 'Codebase', 'Blog', 'Forum'].map((item) => (
              <a
                key={item}
                className="before:left-50 btn-ghost btn-sm btn relative bg-base-100 text-lg text-base-content before:absolute before:bottom-0 before:block before:h-[2px] before:w-3/4 before:origin-top-left before:scale-x-0 before:bg-base-content before:transition before:duration-300 before:ease-in-out before:content-[''] hover:bg-base-100 before:hover:scale-x-100"
              >
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
