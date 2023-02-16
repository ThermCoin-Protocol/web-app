import React from "react";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-secondary">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold">A digital currency backed by energy</h1>
          <p className="py-6 text-lg">
            ThermCoin solves problems related to energy
            economics and tackles our future of energy and transactions.
            We are a community of people who are passionate about fair and
            decentralized solutions to the problems of our time.
          </p>
          <button className="btn btn-accent">Start Mining</button>
        </div>
      </div>
    </div>
  )
}
