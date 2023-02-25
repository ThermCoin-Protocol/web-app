import React from 'react';
import Image from 'next/image';
import VerginaSun from './VerginaSun.png';

export default function Hero() {
  return (
    // Background image set to bg.jpg
    <div className=" hero -my-10 min-h-screen text-base-content border-b-2 border-base-content">
      <div className="hero-content flex-col lg:flex-row">
        <div className="max-w-2xl m-4">
          <h1 className="text-4xl font-black">
            The Future's Energy-Based Digital Currency
          </h1>
          <p className="py-6 text-lg">
            ThermCoin solves problems related to energy economics and tackles
            our future of energy and transactions. We are a community of people
            who are passionate about fair and decentralized solutions to the
            problems of our time.
          </p>
          <button className="btn-lg btn m-2 text-white border-2 bg-black border-black rounded-full hover:bg-base-100 hover:text-black hover:border-black">
            Start Mining
          </button>
          <button className="btn-lg btn m-2 text-white border-2 bg-black border-black rounded-full hover:bg-base-100 hover:text-black hover:border-black">
            Read the whitepaper
          </button>
        </div>
        <div className="circle m-5">
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
