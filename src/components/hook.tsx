import React from 'react';

const features = [
  {
    title: 'Secure and Private',
    description:
      'ThermCoin is a uses the same cryptographic technology as monero, gaurenteeing your privacy.',
  },
  {
    title: 'Low Fees',
    description:
      'ThermCoin has a low transaction fee, allowing you to send money to anyone, anywhere in the world.',
  },
  {
    title: 'Easy to Use',
    description:
      'ThermCoin is easy to use, and can be used to buy goods and services from any merchant.',
  },
];

export default function hook() {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      {features &&
        features.map((feature) => (
          <div className="indicator m-5 w-3/4 self-center">
            {/* <div className="indicator-item indicator-bottom">
          <button className="btn btn-primary">Learn More</button>
        </div>  */}
            <div className="card cursor-pointer border hover:bg-secondary-focus">
              <div className="card-body">
                <h2 className="card-title">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
