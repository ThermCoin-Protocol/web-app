import React from 'react';
// import Link from 'next/link';
import Wave from './img/wave';
import { RiFilePaper2Fill } from 'react-icons/ri';
import { BsFillPinMapFill } from 'react-icons/bs';
import { MdOutlineChromeReaderMode } from 'react-icons/md';
import Hole from './img/hole';
import Globe from './img/globe';

export default function Cards() {
  return (
    <div className="m-4 mb-0 grid grid-cols-1 gap-4 text-primary lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center border-2 border-primary">
        <div className="flex w-full items-center justify-center border-b-2 border-primary p-4">
          <Wave strokeWidth={4} />
        </div>
        <div className="w-full border-b-2 border-primary p-4 text-3xl font-bold">
          What is ThermCoin?
        </div>
        <div className="grow p-4 text-xl">
          <p className="mb-4">
            ThermCoin is a cryptocurrency that is mined by using your computer's
            processing power to help solve complex mathematical equations. The
            more processing power you have, the more ThermCoin you can mine.
          </p>
          <p>
            ThermCoin is a decentralized currency, meaning that it is not
            controlled by any one person or entity. It is also a deflationary
            currency, meaning that the supply of ThermCoin will decrease over
            time.
          </p>
        </div>
        <div className="hover:primary flex w-full cursor-pointer flex-col items-center justify-center border-t-2 border-primary bg-base-100 p-4 text-xl transition-all hover:bg-accent hover:text-base-100">
          <div className="flex items-center">
            Download Whitepaper
            <RiFilePaper2Fill className="ml-4 text-xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center border-2 border-primary">
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col border-r-0 border-b-2 border-primary sm:w-2/3 sm:border-b-0 sm:border-r-2">
              <div className="w-full border-b-2 border-primary p-4 text-3xl font-bold">
                Our Plans
              </div>
              <div className="p-4 text-xl">
                <p className="mb-10">
                  We are currently working on a web wallet that will allow you
                  to store your ThermCoin in a secure location. We are also
                  working on a mobile wallet that will allow you to store your
                  ThermCoin on your phone.
                </p>
              </div>
            </div>
            <div className="align-center flex h-full w-3/4 items-center self-center bg-base-100 p-2 sm:w-1/3">
              <Hole strokeWidth={5} />
            </div>
          </div>
          <div className="flex w-full cursor-pointer flex-col items-center justify-center border-t-2 border-primary bg-base-100 p-4 text-xl transition-all hover:bg-accent hover:text-base-100">
            <div className="flex items-center">
              Checkout our Roadmap
              <BsFillPinMapFill className="ml-4 text-xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-primary">
          <div className="flex flex-col sm:flex-row">
            <div className="flex items-center justify-center border-b-2 border-primary border-primary p-4 text-3xl font-bold sm:w-1/3 sm:border-r-2 sm:border-b-0">
              <Globe strokeWidth={2} />
            </div>
            <div className="flex flex-col sm:w-2/3">
              <div className="w-full border-b-2 border-primary p-4 text-3xl font-bold">
                Learn More
              </div>
              <div className="p-4 text-xl">
                <p className="mb-10">
                  If you would like to learn more, head over to our
                  documentation page. There you will find information on how to
                  get started, setting up your wallet, running a node, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full cursor-pointer flex-col items-center justify-center border-t-2 border-primary bg-base-100 p-4 text-xl transition-all hover:bg-accent hover:text-primary hover:text-base-100">
            <div className="flex items-center">
              Get started today
              <MdOutlineChromeReaderMode className="ml-4 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
