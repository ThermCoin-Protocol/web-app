import React from 'react';

export default function Stats() {
  return (
    <div className="flex sm:-my-20 flex-col w-full">
      <div className="self-center text-lg">
        <div className="card rounded-3xl cursor-pointer bg-base-100 border-2 border-base-content text-neutral-content hover:bg-accent hover:border-accent">
          <div className="card-body">
            <div className="flex flex-col justify-around sm:flex-row">
              <h1 className="text-3xl m-5">Protocol Stats</h1>
              <div className="flex flex-col m-5">
                <h1 className="text-md">Active Nodes</h1>
                <h2 className="text-3xl">1,427</h2>
              </div>
              <div className="flex flex-col m-5">
                <h1 className="text-md">Supply</h1>
                <h2 className="text-3xl">10,289</h2>
              </div>
              <div className="flex flex-col m-5">
                <h1 className="text-md">Transactions</h1>
                <h2 className="text-3xl">287,367</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}