import React from 'react';
// import AnimatedBackground from './animatedbackground';

export default function Hero() {
  return (
    <div className="sm:mb-40">
      <main>
        <div className="relative px-4 lg:px-10">
          <div className="mx-auto max-w-2xl py-12">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-wide tracking-wider text-primary md:text-6xl lg:text-7xl">
                ThermCoin
              </h1>
              <p className="mt-6 text-3xl leading-8 tracking-wide text-primary">
                Energy Fuels the Future of Money
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-4 text-lg">
                <a
                  href="#"
                  className="btn-md btn rounded-full border-2 border-primary bg-primary text-lg text-base-100 hover:border-primary hover:bg-base-100 hover:text-primary"
                >
                  Downloads
                </a>
                <a
                  href="#"
                  className="before:left-50 group btn-ghost btn-md btn relative text-lg text-primary before:absolute before:bottom-0 before:block before:h-[2px] before:w-4/5 before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition before:duration-300 before:ease-in-out before:content-[''] hover:bg-transparent hover:bg-base-100 before:hover:scale-x-100"
                >
                  Documentation
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <AnimatedBackground /> */}
    </div>
  );
}
