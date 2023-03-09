import React from 'react';
import Image from 'next/image';
import VerginaSun from './img/VerginaSun.png';
import AnimatedBackground from './animatedbackground';

export default function Hero() {
  return (
    <div className="sm:mb-32">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-24 md:py-12">
            <div className="hidden sm:mb-8 sm:flex lg:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-800 ring-1 ring-gray-800/30 hover:ring-gray-800">
                Announcing our next round of funding.{' '}
                <a href="#" className="font-semibold">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="lg:text-center">
              <h1 className="text-5xl font-bold text-gray-800 md:text-6xl lg:text-7xl tracking-wide">
                The Future's Energy-Based Digital Currency
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-800 ">
              ThermCoin solves problems related to energy economics and tackles
              our future of energy and transactions. We are a community of
              people who are passionate about fair and decentralized solutions
              to the problems of our time.
              </p>
              <div className="mt-10 flex items-center lg:justify-center gap-x-6">
                <a
                  href="#"
                  className="btn-md btn rounded-full border-2 border-gray-800 bg-gray-800 text-white hover:border-gray-800 hover:bg-base-100 hover:text-black"
                >
                  Get started
                </a>
                <a href="#" className="text-md font-semibold leading-6 text-gray-900">
                  LEARN MORE <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="text-base-content">
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
         <div className="circle invisible col-span-1 -my-5 mb-2 hidden justify-self-center sm:row-span-2 sm:block">
            <Image
              src={VerginaSun}
              alt="Picture of the author"
              width={200}
              height={200}
              className="vergina-sun"
            />
          </div>
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
      </div> */}
      <AnimatedBackground />
    </div>
  );
}
