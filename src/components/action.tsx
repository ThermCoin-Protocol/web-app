import React from 'react';

export default function Action() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-neutral">
      <div className="stats m-10 flex w-5/6 flex-col bg-primary-focus text-primary-content sm:flex-row lg:w-1/2">
        <div className="stat">
          <div className="stat-title text-lg">Run a node</div>
          <div className="stat-value">212 nodes</div>
          <div className="stat-actions">
            <button className="btn-success btn-sm btn mr-1">Learn More</button>
            <button className="btn-success btn-sm btn">The Pool</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-lg">Use the network</div>
          <div className="stat-value">BTUC 1,229</div>
          <div className="stat-actions">
            <button className="btn-sm btn mr-1">Learn More</button>
            <button className="btn-sm btn">Buy</button>
          </div>
        </div>
      </div>
      <div className="mx-2 w-5/6 text-primary-content lg:w-1/2">
        <div
          tabIndex={0}
          className="collapse-arrow collapse mb-2 border-2 border-primary-content"
        >
          <div className="collapse-title text-xl font-medium">
            Running a node
          </div>
          <div className="collapse-content">
            <p>
              To participate in the thermcoin blockchain network, you must run a
              node.
            </p>
            <p>
              Running a node is easy and free. You can run a node on your home
              computer, or you can rent a server from a hosting provider.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse-arrow collapse border-2 border-primary-content"
        >
          <div className="collapse-title text-xl font-medium">
            Using the network
          </div>
          <div className="collapse-content">
            <p>ThermCoin users can transact between each other freely.</p>
            <p>
              Gas fees are required fore transactions and are in our native
              coin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
