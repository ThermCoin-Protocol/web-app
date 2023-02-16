import React from 'react';

export default function Hero() {
  return (
    // Background image set to bg.jpg
    <div className="hero min-h-screen bg-[url('./bg.jpg')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Energy-based Digital Currency</h1>
          <p className="py-6 text-lg">
            ThermCoin solves problems related to energy economics and tackles
            our future of energy and transactions. We are a community of people
            who are passionate about fair and decentralized solutions to the
            problems of our time.
          </p>
          <button className="btn-accent btn">Start Mining</button>
        </div>
      </div>
    </div>
  );
}
