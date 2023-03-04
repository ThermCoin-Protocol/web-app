import React from 'react';
import Image from 'next/image';
import VerginaSun from './VerginaSun.png';
import AnimatedBackground from './animatedbackground';

export default function Hero() {
  return (
    <div className="">
      <div className="border-b border-base-content pb-10 text-base-content sm:-my-10">
        <div className="m-8 grid grid-cols-1 grid-rows-2 sm:m-20 sm:grid-cols-3">
          <div className="col-span-1 mb-2 sm:col-span-3 sm:-my-5">
            <h1 className="p-3 text-4xl font-bold tracking-wide lg:text-5xl">
              The Future's Energy-Based Digital Currency
            </h1>
          </div>
          <div className="col-span-1 mb-2 mb-10 sm:col-span-2 sm:-my-20 sm:mb-0">
            <p className="text-md p-3 sm:w-2/3 lg:text-xl">
              ThermCoin solves problems related to energy economics and tackles
              our future of energy and transactions. We are a community of
              people who are passionate about fair and decentralized solutions
              to the problems of our time.
            </p>
          </div>
          <div className="circle invisible col-span-1 -my-5 mb-2 hidden justify-self-center sm:row-span-2 sm:block">
            <Image
              src={VerginaSun}
              alt="Picture of the author"
              width={200}
              height={200}
              className="vergina-sun"
            />
          </div>
          <div className="col-span-1 mb-10 sm:col-span-3 sm:mb-20">
            <button className="btn-md btn my-0 mx-2 rounded-full border-2 border-black bg-black text-white hover:border-black hover:bg-base-100 hover:text-black lg:btn-lg">
              Start Mining
            </button>
            <button className="btn-md btn my-0 mx-2 rounded-full border-2 border-black bg-black text-white hover:border-black hover:bg-base-100 hover:text-black lg:btn-lg">
              Read the whitepaper
            </button>
          </div>
          <div className="circle col-span-1 -my-5 mb-2 hidden justify-self-center">
            <Image
              src={VerginaSun}
              alt="Picture of the author"
              width={200}
              height={200}
              className="vergina-sun"
            />
          </div>
        </div>
      </div>
      <AnimatedBackground />
    </div>
  );
}
//h-screen w-screen
