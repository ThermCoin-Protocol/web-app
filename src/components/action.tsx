import React from "react";

export default function Action() {
  return (
    <div className="flex flex-col min-h-screen w-full justify-center bg-neutral items-center">
      <div className="stats bg-primary-focus w-5/6 lg:w-1/2 text-primary-content m-10 flex flex-col sm:flex-row">

        <div className="stat">
          <div className="stat-title text-lg">Run a node</div>
          <div className="stat-value">212 nodes</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success mr-1">Learn More</button>
            <button className="btn btn-sm btn-success">The Pool</button>
          </div>
        </div>
        
        <div className="stat">
          <div className="stat-title text-lg">Use the network</div>
          <div className="stat-value">BTUC 1,229</div>
          <div className="stat-actions">
            <button className="btn btn-sm mr-1">Learn More</button> 
            <button className="btn btn-sm">Buy</button>
          </div>
        </div>
        
      </div>
      <div className="w-5/6 lg:w-1/2 mx-2 text-primary-content">
        <div tabIndex={0} className="collapse collapse-arrow border-2 border-primary-content mb-2">
          <div className="collapse-title text-xl font-medium">
            Running a node
          </div>
          <div className="collapse-content"> 
            <p>To participate in the thermcoin blockchain network, you must run a node.</p>
            <p>Running a node is easy and free. You can run a node on your home computer, or you can rent a server from a hosting provider.</p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow border-2 border-primary-content">
          <div className="collapse-title text-xl font-medium">
            Using the network
          </div>
          <div className="collapse-content"> 
            <p>ThermCoin users can transact between each other freely.</p>
            <p>Gas fees are required fore transactions and are in our native coin.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
