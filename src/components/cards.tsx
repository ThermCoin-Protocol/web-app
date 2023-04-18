import React from 'react';
import Link from 'next/link';
import { RiFilePaper2Fill } from 'react-icons/ri';
import { BsFillPinMapFill } from 'react-icons/bs';

export default function Cards() {
  return (
    <div className="grid w-screen justify-items-center border-t border-gray-800 bg-base-100 px-4 md:px-10">
      <div className="-my-10 grid w-full flex-col pb-40">
        <div className="text-lg">
          <div className="rounded-3xl border border-gray-800 bg-base-100 text-gray-800">
            <div className="m-12 flex flex-col justify-around lg:flex-row">
              <a
                href="/whitepaper.pdf"
                download
                className="flex cursor-pointer flex-col justify-between rounded-3xl border border-base-100 transition-all hover:scale-105 sm:p-10 sm:hover:border-black sm:hover:bg-[#FFFFFF] sm:hover:shadow-xl lg:w-2/5"
              >
                <div className="mb-20">
                  <h2 className="text-3xl">What is ThermCoin?</h2>
                  <p className="text-lg">
                    Read our whitepaper to learn more about how it works.
                  </p>
                </div>
                <div className="flex">
                  <p className="text-lg">Download PDF</p>
                  <RiFilePaper2Fill className="ml-4 text-3xl" />
                </div>
              </a>
              <div className="invisible m-5 border-l border-black lg:visible"></div>
              <Link href="/roadmap">
                <div className="flex cursor-pointer flex-col justify-between rounded-3xl border border-base-100 py-10 transition-all hover:scale-105 sm:p-10 sm:hover:border-black sm:hover:bg-[#FFFFFF] sm:hover:shadow-xl lg:w-2/5">
                  <div className="mb-20">
                    <h2 className="text-3xl">Curious about our plans?</h2>
                    <p className="text-lg">
                      Check out our roadmap to see what's coming next.
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-lg">Learn More</p>
                    <BsFillPinMapFill className="ml-4 text-3xl" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
