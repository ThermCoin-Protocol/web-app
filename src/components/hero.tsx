import React from 'react';
import AnimatedBackground from './animatedbackground';

export default function Hero() {
  return (
    <div className="sm:mb-40">
      <main>
        <div className="relative px-4 lg:px-10">
          <div className="mx-auto max-w-2xl py-24 md:py-12">
            <div className="lg:text-center">
              <h1 className="text-5xl font-bold tracking-wide text-gray-800 md:text-6xl lg:text-7xl">
                The Future's Energy-Based Digital Currency
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-800 ">
                ThermCoin solves problems related to energy economics and
                tackles our future of energy and transactions. We are a
                community of people who are passionate about fair and
                decentralized solutions to the problems of our time.
              </p>
              {/* <div className="mt-10 flex items-center gap-x-6 lg:justify-center">
                <a
                  href="#"
                  className="btn-md btn rounded-full border-2 border-gray-800 bg-gray-800 text-white hover:border-gray-800 hover:bg-base-100 hover:text-gray-800"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-md font-semibold leading-6 text-gray-900"
                >
                  LEARN MORE <span aria-hidden="true">→</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </main>
      <AnimatedBackground />
    </div>
  );
}
