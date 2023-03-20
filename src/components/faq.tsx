export default function Faq() {
  return (
    <div>
    <div className="border-t border-gray-800 bg-base-100 mx-10 sm:mx-20">
      </div>
    <div className="pt-20 sm:mx-10 md:mx-20 xl:mx-40">
      <div className="mb-32 text-gray-800">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="mx-10 mb-0 self-center justify-self-center md:mb-0">
            <h2 className="mb-6 text-5xl font-bold text-gray-800 md:text-6xl lg:text-7xl tracking-wide">Frequently Asked Questions</h2>

            <p className="text-gray-500">
              Didn't find your answer in the FAQ? <br />
              <a
                href="#!"
                className="text-blue-600 transition duration-300 hover:text-blue-700 focus:text-blue-700 active:text-blue-800"
              >
                Contact our dev team
              </a>
              .
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <div className="my-10 rounded-3xl p-10 transition-all sm:hover:scale-105 sm:hover:bg-[#FFFFFF] sm:hover:shadow-xl">
              <p className="mb-4 font-bold">
                When will the ThermCoin mainnet go online?
              </p>
              <p className=" text-gray-500">
                As soon as our roadmap is released, we will have a clearer idea
                of when the mainnet will go online. Stay updated by getting involved
                in our community. Join our Discord server and read our blog.
              </p>
            </div>
            <div className="my-10 rounded-3xl p-10 transition-all sm:hover:scale-105 sm:hover:bg-[#FFFFFF] sm:hover:shadow-xl">
              <p className="mb-4 font-bold">
                How can I start participate?
              </p>
              <p className=" text-gray-500">
                You can start participating in the ThermCoin ecosystem by
                joining our Discord server and reading our blog. We will be
                releasing more information about the mainnet launch soon.
                Soon you will be able to run a node to earn rewards
                and participate in the ThermCoin ecosystem.
              </p>
            </div>
            <div className="my-10 rounded-3xl p-10 transition-all sm:hover:scale-105 sm:hover:bg-[#FFFFFF] sm:hover:shadow-xl">
              <p className="mb-4 font-bold">
                How are miner nodes rewarded?
              </p>
              <p className="text-gray-500">
                Miner nodes will be rewarded with ThermCoin through the mining pool.
                The mining pool is the mechanism that will be used to distribute
                rewards to miner nodes. More details about the mechanics can be found
                in the ThermCoin whitepaper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
