import React from 'react';
import { RiFilePaper2Fill } from 'react-icons/ri';
import { BsFillPinMapFill } from 'react-icons/bs';

export default function Cards() {
  return (
    <div className="m-0 w-screen justify-items-center border-t border-gray-800 bg-base-100 grid">
      <div className="mx-2 -my-10 grid w-11/12 flex-col pb-40">
        <div className="text-lg">
          <div className="rounded-3xl border border-gray-800 bg-base-100 text-gray-800">
            <div className="m-12 flex flex-col lg:flex-row justify-around">
              <div className="flex flex-col rounded-3xl sm:p-10 lg:w-2/5 justify-between transition-all hover:scale-105 sm:hover:bg-[#FFFFFF] sm:hover:border-black border border-base-100 sm:hover:shadow-xl cursor-pointer">
                <div className='mb-20'>
                  <h2 className='text-3xl'>What is ThermCoin?</h2>
                  <p className='text-lg'>Read our whitepaper to learn more about how it works.</p>
                </div>
                <div className='flex'>
                  <p className='text-lg'>Download PDF</p>
                  <RiFilePaper2Fill className='text-3xl ml-4' />
                </div>
              </div>
              <div className="border-l border-black m-5 invisible lg:visible"></div>
              <div className="flex flex-col rounded-3xl py-10 sm:p-10 lg:w-2/5 justify-between transition-all hover:scale-105 sm:hover:bg-[#FFFFFF] sm:hover:border-black border border-base-100 sm:hover:shadow-xl cursor-pointer">
                <div className='mb-20'>
                  <h2 className='text-3xl'>Curious about our plans?</h2>
                  <p className='text-lg'>Check out our roadmap to see what's coming next.</p>
                </div>
                <div className='flex'>
                  <p className='text-lg'>Learn More</p>
                  <BsFillPinMapFill className='text-3xl ml-4' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}