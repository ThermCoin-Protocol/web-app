import React from 'react';

export default function Stats() {
  return (
    <div className="grid -my-10 flex-col w-11/12 pb-40">
      <div className="self-center text-lg">
        <div className="rounded-3xl bg-base-100 border border-base-content text-neutral-content">
          <div className="grid grid-cols-2 grid-rows-3 lg:grid-rows-2 lg:grid-cols-3 justify-center p-10">
            <h1 className="lg:py-10 text-3xl sm:text-4xl lg:text-5xl sm:m-2 md:m-5 col-span-2 rows-span-1 lg:row-span-2 lg:col-span-1">Protocol Stats</h1>
            <div className="sm:m-2 md:m-5 lg:py-10">
              <h1 className="md:text-md text-sm">Active Nodes</h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">1,427</h2>
            </div>
            <div className="lg:py-10 sm:m-2 md:m-5">
              <h1 className="md:text-md text-sm">Total BTUC Supply</h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">10,289</h2>
            </div>
            <div className="lg:py-10 sm:m-2 md:m-5">
              <h1 className="md:text-md text-sm">Total Transactions</h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">287,367</h2>
            </div>
            <div className="lg:py-10 sm:m-2 md:m-5">
              <h1 className="md:text-md text-sm">Hashrate</h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">1.2 GH/s</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}