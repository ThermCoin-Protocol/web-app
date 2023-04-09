import React from 'react';

import VerginaSun from './img/VerginaSun.png';

import Image from 'next/image';
import Link from 'next/link';

export interface INavbar {}

const Navbar: React.FC<INavbar> = () => {
  const navbarNarrow = () => {
    return (
      <div>
        <div className="dropdown-end dropdown visible md:invisible">
          <label tabIndex={0} className="btn-ghost btn">
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
            className="dropdown-content menu rounded-box mt-7 w-60 border border-gray-800 bg-base-100 shadow-xl"
          >
            <li>
              <a className="text-xl">Whitepaper</a>
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
              <Link href="/blog">
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
      <div className="navbar z-20 hidden p-10 text-gray-800 md:flex">
        <Link href="/">
          <div className="navbar-start flex-shrink-0 hover:cursor-pointer">
            <Image
              src={VerginaSun}
              alt="Picture of the author"
              width={50}
              height={50}
              className="m-0"
            />
            <span className="pl-3 text-xl font-bold">ThermCoin</span>
          </div>
        </Link>
        <div className="navbar-end sm:flex">
          <div className="flex justify-between">
            <a 
              href='/whitepaper.pdf'
              className="before:left-50 btn-ghost btn relative text-lg text-gray-800 before:absolute before:bottom-0 before:block before:h-[2px] before:w-3/4 before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition before:duration-300 before:ease-in-out before:content-[''] hover:bg-transparent hover:bg-base-100 before:hover:scale-x-100"
              download
            >
              Whitepaper
            </a>
            {[{title: 'Codebase', link: 'https://github.com/ThermCoin-Protocol'}, {title: 'Blog', link: '/blog'}, {title: 'Forum', link: 'https://discord.gg/evAR9ng8WR'}].map((item) => (
              <a
                key={item.title}
                className="before:left-50 btn-ghost btn relative text-lg text-gray-800 before:absolute before:bottom-0 before:block before:h-[2px] before:w-3/4 before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition before:duration-300 before:ease-in-out before:content-[''] hover:bg-transparent hover:bg-base-100 before:hover:scale-x-100"
                href={item.link}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="navbar z-20 text-gray-800 md:hidden p-4">
        <div className="navbar-start">
          <Image
            src={VerginaSun}
            alt="Picture of the author"
            width={50}
            height={50}
            className="flex-shrink-0"
          />
          <Link href="/">
            <span className="pl-3 text-xl font-bold tracking-wide">ThermCoin</span>
          </Link>
        </div>
        <div className="navbar-end">{navbarNarrow()}</div>
      </div>
    </>
  );
}

export default Navbar;
