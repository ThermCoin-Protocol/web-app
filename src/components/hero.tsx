import React from 'react';
import Image from 'next/image';
import VerginaSun from './VerginaSun.png';

export default function Hero() {
  return (
    // Background image set to bg.jpg
    <div className="text-base-content sm:-my-10 border-b border-base-content pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-2 sm:m-20 m-8">
        <div className="col-span-1 sm:col-span-3 sm:-my-5 mb-2">
          <h1 className="lg:text-5xl text-4xl tracking-wide font-bold">
            The Future's Energy-Based Digital Currency
          </h1>
        </div>
        <div className="col-span-1 sm:col-span-2 sm:-my-20 mb-2 mb-10 sm:mb-0">
          <p className="text-md lg:text-lg sm:w-2/3">
            ThermCoin solves problems related to energy economics and tackles
            our future of energy and transactions. We are a community of people
            who are passionate about fair and decentralized solutions to the
            problems of our time.
          </p>
        </div>
        <div className="hidden sm:block circle col-span-1 sm:row-span-2 justify-self-center -my-5 mb-2">
          <Image
            src={VerginaSun}
            alt="Picture of the author"
            width={200}
            height={200}
            className="vergina-sun"
          />
        </div>
        <div className="col-span-1 sm:col-span-3 sm:mb-20 mb-10">
          <button className="btn-md lg:btn-lg btn m-2 text-white border-2 bg-black border-black rounded-full hover:bg-base-100 hover:text-black hover:border-black">
            Start Mining
          </button>
          <button className="btn-md lg:btn-lg btn m-2 text-white border-2 bg-black border-black rounded-full hover:bg-base-100 hover:text-black hover:border-black">
            Read the whitepaper
          </button>
        </div>
        <div className="circle col-span-1 sm:hidden justify-self-center -my-5 mb-2">
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
  );
}
