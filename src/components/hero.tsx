import React from 'react';
import Image from 'next/image';
import VerginaSun from './img/VerginaSun.png';
import AnimatedBackground from './animatedbackground';

export default function Hero() {
  return (
    <div className="min-h-screen">
      <div className="text-base-content">
        <div className="pt-10 md:pt-0 flex flex-col m-8 md:m-20">
          <div className="col-span-1 mb-10">
            <h1 className="text-4xl tracking-wide sm:text-5xl md:text-6xl xl:text-7xl">
              The Future's Energy-Based <br/>Digital Currency
            </h1>
          </div>
          
          <div className="bg-base-100 rounded-3xl p-5 border-2 border-black bg-opacity-90 mb-10 sm:mb-48 md:w-3/5">
            <p className="text-md lg:text-xl">
              ThermCoin solves problems related to energy economics and tackles
              our future of energy and transactions. We are a community of
              people who are passionate about fair and decentralized solutions
              to the problems of our time.
            </p>
          </div>
          {/* <div className="circle invisible col-span-1 -my-5 mb-2 hidden justify-self-center sm:row-span-2 sm:block">
            <Image
              src={VerginaSun}
              alt="Picture of the author"
              width={200}
              height={200}
              className="vergina-sun"
            />
          </div> */}
          <div className="col-span-1 mb-10 mb-20 sm:-my-20">
            <button className="btn-md mr-4 btn my-0 mb-3 rounded-full border-2 border-black bg-black text-white hover:border-black hover:bg-base-100 hover:text-black lg:btn-lg">
              Start Mining
            </button>
            
            <button className="btn-md btn my-0 rounded-full border-2 border-black bg-black text-white hover:border-black hover:bg-base-100 hover:text-black lg:btn-lg">
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
