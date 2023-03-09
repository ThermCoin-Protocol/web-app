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
                Anim pariatur cliche reprehenderit?
              </p>
              <p className=" text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                autem numquam dolore molestias aperiam culpa alias veritatis
                architecto eos, molestiae vitae ex eligendi libero eveniet
                dolorem, doloremque rem aliquid perferendis.
              </p>
            </div>
            <div className="my-10 rounded-3xl p-10 transition-all sm:hover:scale-105 sm:hover:bg-[#FFFFFF] sm:hover:shadow-xl">
              <p className="mb-4 font-bold">
                Non cupidatat skateboard dolor brunch?
              </p>
              <p className=" text-gray-500">
                Distinctio corporis, iure facere ducimus quos consectetur ipsa
                ut magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed
                fugit iusto minus et suscipit? Minima sunt at nulla tenetur,
                numquam unde quod modi magnam ab deserunt ipsam sint aliquid
                dolores libero repellendus cupiditate mollitia quidem dolorem
                odit
              </p>
            </div>
            <div className="my-10 rounded-3xl p-10 transition-all sm:hover:scale-105 sm:hover:bg-[#FFFFFF] sm:hover:shadow-xl">
              <p className="mb-4 font-bold">
                Praesentium voluptatibus temporibus consequatur non aspernatur?
              </p>
              <p className="text-gray-500">
                Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                deserunt ipsam sint aliquid dolores libero repellendus
                cupiditate mollitia quidem dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
