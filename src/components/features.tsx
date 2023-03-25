import React from 'react';

export default function Features() {
  return (
    <div className="-mt-40 py-24 sm:py-32 sm:mx-10 md:mx-20 xl:mx-40">
      <div className="mx-2 max-w-full px-6 sm:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          {/* <h2 className="font-semibold leading-7 text-info">Lorem Ipsum</h2> */}
          <p className="mt-2 text-5xl font-bold text-gray-800 md:text-6xl lg:text-7xl tracking-wide">ThermCoin Features</p>
          <p className="text-lg mt-6 leading-8">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl text-lg">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="font-semibold leading-7 text-gray-800">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </div>
                Energy Is Money
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-500">
              ThermCoin measures global daily energy consumption periodically and updates 
              its coin supply to match in a ratio of 100,000Btu to 1 coin, under the principle that
              energy is money. Adjustments to coin supply are propagated throughout the 
              entire ThermCoin monetary system, thus allowing holders to participate in coin 
              inflation and deflation. See our whitepaper for more details.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-800">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
                Cooperative Mining
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-500">
                Each node participates in a single mining pool, with rewards being divided 
                amongst all participants equally. A floor on proof of work done ensures that every
                node contributes meaningfully. ThermCoin uses the CryptoNight hashing 
                algorithm, which discourages stacking of computing power and concentration of 
                mining rewards into the hands of a few.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-800">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                Open Source
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-500">
                ThermCoin is open source and available on GitHub. We welcome contributions
                from the community and are committed to transparency.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-800">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                    />
                  </svg>
                </div>
                Advanced Security
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-500">
                ThermCoin uses a novel approach to security, utilizing a Proof of Work
                algorithm that is resistant to ASIC mining. This allows ThermCoin to be
                mined by anyone with a computer, and prevents the concentration of mining
                power into the hands of a few.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
