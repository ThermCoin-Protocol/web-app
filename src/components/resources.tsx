import React from 'react';
import Coin from './img/coin';

export default function Resources() {
  return (
    <div className="m-4 flex flex-col justify-between gap-4 md:flex-row">
      <div className="flex w-full grow flex-col border-2 border-primary">
        <div className="w-full border-b-2 border-primary p-4">
          <h1 className="text-3xl font-bold tracking-wide">For Reference</h1>
        </div>
        <div className="flex grow border-b-2 border-primary text-xl">
          <div className="w-1/2 border-r-2 border-primary p-4 md:w-2/3">
            <p className="">
              Checkout our blog for the latest news and updates.
            </p>
          </div>
          <div className="w-1/2 cursor-pointer bg-base-300 p-4 hover:bg-accent hover:text-base-100 md:w-1/3">
            <p className="mb-4">Blog</p>
          </div>
        </div>
        <div className="flex grow border-primary text-xl">
          <div className="w-1/2 border-r-2 border-primary p-4 md:w-2/3">
            <p className="">Have a question? Check out our FAQ for answers.</p>
          </div>
          <div className="w-1/2 cursor-pointer bg-base-300 p-4 hover:bg-accent hover:text-base-100 md:w-1/3">
            <p className="mb-4">FAQ</p>
          </div>
        </div>
      </div>
      <div className="flex w-full grow flex-col items-center justify-center border-2 border-primary p-4 md:w-1/3">
        <Coin />
      </div>
    </div>
  );
}
