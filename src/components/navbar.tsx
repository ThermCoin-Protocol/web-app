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
  const navbarNarrow = () => {
    return (
      <div>
        <div className="dropdown sm:invisible visible dropdown-end">
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
            className="dropdown-content menu rounded-box mt-7 w-40 bg-primary-content shadow-xl text-neutral"
          >
            <li>
              <a className="text-lg" href="https://github.com/ThermCoin-Protocol">GitHub</a>
            </li>
            <li>
              <a className='text-lg' href="https://discord.gg/evAR9ng8WR">Discord</a>
            </li>
            <li>
              <a className='text-lg' >Primer</a>
            </li>
            <li>
              <a className='text-lg' >Blog</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }


  return (
    <>
      <div className="hidden sm:flex navbar fixed z-20 bg-neutral text-primary-content flex justify-between">
        <div className="p-4 mx-2 navbar-start">
          <span className="text-4xl font-bold">
            ThermCoin
          </span>
        </div>
        <div className="mx-2 sm:flex hover">
          <div className="flex justify-between">
            {['Discord', 'GitHub', 'Primer', 'Blog'].map((item) => (
              <a className="btn btn-md rounded-btn text-xl text-primary-content hover:text-info hover:bg-neutral hover:border-neutral">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex sm:hidden navbar fixed z-20 bg-neutral text-primary-content flex justify-between">
        <div className="p-4 mx-2 navbar-start">
          <span className="text-4xl font-bold">
            ThermCoin
          </span>
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
