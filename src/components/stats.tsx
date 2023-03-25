import React from 'react';

export default function Stats() {
  return (
    <div className="m-0 w-screen justify-items-center border-t border-gray-800 bg-base-100 grid">
      <div className="mx-2 -my-10 grid w-11/12 flex-col pb-40">
        <div className="text-lg">
          <div className="rounded-3xl border border-gray-800 bg-base-100 text-gray-800">
            <div className="grid grid-cols-2 grid-rows-3 justify-center p-10 lg:grid-cols-3 lg:grid-rows-2">
              <h1 className="rows-span-1 col-span-2 sm:m-2 md:m-5 lg:col-span-1 lg:row-span-2 lg:py-10 text-2xl sm:text-3xl lg:text-4xl">
                Protocol Stats
              </h1>
              <div className="sm:m-2 md:m-5 lg:py-10">
                <h1 className="md:text-md text-sm">Active Nodes</h1>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl">1,427</h2>
              </div>
              <div className="sm:m-2 md:m-5 lg:py-10">
                <h1 className="md:text-md text-sm">Total BTUC Supply</h1>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl">10,289</h2>
              </div>
              <div className="sm:m-2 md:m-5 lg:py-10">
                <h1 className="md:text-md text-sm">Total Transactions</h1>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl">287,367</h2>
              </div>
              <div className="sm:m-2 md:m-5 lg:py-10">
                <h1 className="md:text-md text-sm">Hashrate</h1>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl">1.2 GH/s</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
