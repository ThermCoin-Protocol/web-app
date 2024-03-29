import React from 'react';
import Wave from './img/wave';
import { RiFilePaper2Fill } from 'react-icons/ri';
import { BsFillPinMapFill } from 'react-icons/bs';
import { MdOutlineChromeReaderMode } from 'react-icons/md';
import Hole from './img/hole';
import Globe from './img/globe';
import Link from 'next/link';

export default function Cards() {
  return (
    <div className="m-4 mb-0 grid grid-cols-1 gap-4 text-primary lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center rounded-md border-2 border-primary">
        <div className="flex w-full items-center justify-center border-b-2 border-primary p-4">
          <Wave strokeWidth={4} />
        </div>
        <div className="w-full border-b-2 border-primary p-4 text-3xl font-bold tracking-wider">
          What is Thermcoin?
        </div>
        <div className="grow p-4 text-xl">
          <p>
            As energy is the most fundamental commodity in the world, we believe
            that it is the best asset to base a currency on. The Thermcoin
            protocol is a decentralized, open-source, and community-driven
            project that aims to create a new digital currency that is based on
            the principles of energy economics.
          </p>
          <p className="mt-4">
            To learn more about the Thermcoin protocol, please read the
            whitepaper.
          </p>
        </div>
        <a
          href="/whitepaper.pdf"
          download
          className="hover:primary flex w-full cursor-pointer flex-col items-center justify-center rounded-b-md border-t-2 border-primary bg-base-100 p-4 text-xl transition-all hover:rounded-b-none hover:bg-primary hover:text-base-100"
        >
          <div className="flex items-center tracking-wider">
            Download the Whitepaper
            <RiFilePaper2Fill className="ml-4 text-xl" />
          </div>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center rounded-md rounded-md border-2 border-primary">
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col border-r-0 border-b-2 border-primary sm:w-2/3 sm:border-b-0 sm:border-r-2">
              <div className="w-full border-b-2 border-primary p-4 text-3xl font-bold tracking-wider">
                Our Plans
              </div>
              <div className="p-4 text-xl">
                <p className="mb-10">
                  We are currently working on a number of projects to help
                  improve the Thermcoin ecosystem. To learn more about our
                  current focus, see where we are headed, and celebrate our
                  successes, check out our roadmap.
                </p>
              </div>
            </div>
            <div className="align-center flex h-full w-3/4 items-center self-center rounded-md bg-base-100 p-2 sm:w-1/3">
              <Hole strokeWidth={5} />
            </div>
          </div>
          <Link href="/docs/roadmap">
            <div className="flex w-full cursor-pointer flex-col items-center justify-center rounded-b-md border-t-2 border-primary bg-base-100 p-4 text-xl transition-all hover:rounded-b-none hover:bg-primary hover:text-base-100">
              <div className="flex items-center tracking-wider">
                Checkout our roadmap
                <BsFillPinMapFill className="ml-4 text-xl" />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center rounded-md border-2 border-primary">
          <div className="flex flex-col sm:flex-row">
            <div className="flex items-center justify-center border-b-2 border-primary border-primary p-4 text-3xl font-bold sm:w-1/3 sm:border-r-2 sm:border-b-0">
              <Globe strokeWidth={2} />
            </div>
            <div className="flex flex-col sm:w-2/3">
              <div className="w-full border-b-2 border-primary p-4 text-3xl font-bold tracking-wider">
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
          <Link href="/docs/getting-started">
            <div className="flex w-full cursor-pointer flex-col items-center justify-center rounded-b-md border-t-2 border-primary bg-base-100 p-4 text-xl transition-all hover:rounded-b-none hover:bg-primary hover:text-base-100">
              <div className="flex items-center tracking-wider">
                Get started today
                <MdOutlineChromeReaderMode className="ml-4 text-xl" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
