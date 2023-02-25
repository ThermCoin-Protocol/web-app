import React from 'react';

const features = [
  {
    title: 'Private and Untraceable',
    description:
      'ThermCoin uses ring signatures and advanced cryptography to provide anonymity by default.',
  },
  {
    title: 'Fair and Equitable Mining',
    description:
      'Thermcoin is distributed to all miners equally, no matter their hash rate, to promote both fairness and decentralization.',
  },
  {
    title: 'Pegged to Energy Production',
    description:
      'The supply of Thermcoin is pegged to total global energy production at a 1:1 ratio, providing a one-of-a-kind tokenomic structure.',
  },
];

export default function hook() {
  return (
    <div className="flex min-h-screen flex-col justify-center text-primary-content">
      {features &&
        features.map((feature) => (
          <div className=" m-5 mt-10 w-11/12 self-center text-lg">
            <div className="card cursor-pointer bg-neutral text-neutral-content hover:bg-accent hover:border-accent">
              <div className="card-body ">
                <h2 className="card-title text-xl">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
