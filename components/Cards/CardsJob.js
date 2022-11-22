import React from "react";

// components

export default function CardSettings() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Backend Developer
            </h6>
            {/* <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Settings
            </button> */}
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Assessment Questions
            </h6>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Technical
            </h6>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4 mb-4">
                <h3 className="text-lg font-bold">What is example?</h3>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  lorem urna, luctus quis facilisis eu, vestibulum vel dui.
                  Donec elementum purus in maximus posuere. Nullam purus magna,
                  aliquam et tincidunt ac, faucibus id turpis. Maecenas dapibus
                  quis dolor quis gravida. Sed vestibulum egestas magna, ut
                  malesuada nibh sodales ut. Sed sed varius nunc, a mattis
                  velit. Suspendisse finibus odio vulputate felis laoreet mattis
                </p>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Answer
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="This is your answer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4 mb-4">
                <h3 className="text-lg font-bold">What is example?</h3>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  lorem urna, luctus quis facilisis eu, vestibulum vel dui.
                  Donec elementum purus in maximus posuere. Nullam purus magna,
                  aliquam et tincidunt ac, faucibus id turpis. Maecenas dapibus
                  quis dolor quis gravida. Sed vestibulum egestas magna, ut
                  malesuada nibh sodales ut. Sed sed varius nunc, a mattis
                  velit. Suspendisse finibus odio vulputate felis laoreet mattis
                </p>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Answer
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="This is your answer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4 mb-4">
                <h3 className="text-lg font-bold">What is example?</h3>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  lorem urna, luctus quis facilisis eu, vestibulum vel dui.
                  Donec elementum purus in maximus posuere. Nullam purus magna,
                  aliquam et tincidunt ac, faucibus id turpis. Maecenas dapibus
                  quis dolor quis gravida. Sed vestibulum egestas magna, ut
                  malesuada nibh sodales ut. Sed sed varius nunc, a mattis
                  velit. Suspendisse finibus odio vulputate felis laoreet mattis
                </p>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Answer
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="This is your answer"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              General
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 mb-4">
                <h3 className="text-lg font-bold">What is example?</h3>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  lorem urna, luctus quis facilisis eu, vestibulum vel dui.
                  Donec elementum purus in maximus posuere. Nullam purus magna,
                  aliquam et tincidunt ac, faucibus id turpis. Maecenas dapibus
                  quis dolor quis gravida. Sed vestibulum egestas magna, ut
                  malesuada nibh sodales ut. Sed sed varius nunc, a mattis
                  velit. Suspendisse finibus odio vulputate felis laoreet mattis
                </p>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Answer
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="This is your answer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4 mb-4">
                <h3 className="text-lg font-bold">What is example?</h3>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  lorem urna, luctus quis facilisis eu, vestibulum vel dui.
                  Donec elementum purus in maximus posuere. Nullam purus magna,
                  aliquam et tincidunt ac, faucibus id turpis. Maecenas dapibus
                  quis dolor quis gravida. Sed vestibulum egestas magna, ut
                  malesuada nibh sodales ut. Sed sed varius nunc, a mattis
                  velit. Suspendisse finibus odio vulputate felis laoreet mattis
                </p>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Answer
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="This is your answer"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-12/12 px-4 mb-4">
                <button className="w-full bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"> 
                    Add question +
                </button>
              </div>
            
          </form>
        </div>
      </div>
    </>
  );
}
