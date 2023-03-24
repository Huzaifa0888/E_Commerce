import React from 'react'

function signup() {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-full lg:px-8">
      <h2 className="text-5xl text-center font-bold tracking-tight text-gray-900 pb-10">
        Sign up now & get 10% off
      </h2>
      <h2 className="text-md text-center font-medium tracking-tight text-gray-900 pb-10">
        Be the first to get the latest news about trends, promotions, and much
        more!
      </h2>

      <div className="flex justify-center pb-10">
        <input
          type="email"
          className=" border-2 w-[38%] h-14 rounded-sm border-gray-200"
          placeholder="Your Email Address"
        />
        <button className="border font-bold text-white bg-black px-16 ml-5">
          JOIN
        </button>
      </div>
    </div>
  );
}

export default signup



