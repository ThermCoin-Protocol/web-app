import React from 'react';

export default function Stats() {
  return (
    <div className="m-0 w-screen place-content-center border-t border-black bg-base-100">
      <div className="mx-10 -my-10 grid w-11/12 flex-col pb-40">
        <div className="self-center text-lg">
          <div className="rounded-3xl border border-base-content bg-base-100 text-base-content">
            <div className="grid grid-cols-2 grid-rows-3 justify-center p-10 lg:grid-cols-3 lg:grid-rows-2">
              <h1 className="rows-span-1 col-span-2 text-3xl sm:m-2 sm:text-4xl md:m-5 lg:col-span-1 lg:row-span-2 lg:py-10 lg:text-5xl">
                Protocol Stats
              </h1>
              <div className="sm:m-2 md:m-5 lg:py-10">
                <h1 className="md:text-md text-sm">Active Nodes</h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl">1,427</h2>
              </div>
              <div className="sm:m-2 md:m-5 lg:py-10">
                <h1 className="md:text-md text-sm">Total BTUC Supply</h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl">10,289</h2>
              </div>
              <div className="sm:m-2 md:m-5 lg:py-10">
                <h1 className="md:text-md text-sm">Total Transactions</h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl">287,367</h2>
              </div>
              <div className="sm:m-2 md:m-5 lg:py-10">
                <h1 className="md:text-md text-sm">Hashrate</h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl">1.2 GH/s</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
