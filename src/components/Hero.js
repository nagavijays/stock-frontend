import React from 'react'

export default function Hero() {
  return (
    <section className="text-white-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xl text-indigo-500 tracking-widest font-medium title-font mb-1">Stock Matcher App</h2>
          <h1 className="sm:text-3xl text-xl font-medium title-font mb-4 text-white-900">Discover your ideal investment!</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Stock Matcher is a user-friendly app that simplifies your investment experience.
          Start your journey towards financial success with Stock Matcher today!
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-white-900 font-medium title-font mb-2">Buy / Sell</h2>
            <p className="leading-relaxed text-base mb-4">Buy or sell stocks online.</p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-white-900 font-medium title-font mb-2">Order Status</h2>
            <p className="leading-relaxed text-base mb-4">Monitor stock order status online.</p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-white-900 font-medium title-font mb-2">Authentication</h2>
            <p className="leading-relaxed text-base mb-4">Login/Register user account</p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-white-900 font-medium title-font mb-2">Responsive Layout</h2>
            <p className="leading-relaxed text-base mb-4">Responsive app viewports Laptops/Mobile.</p>
          </div>
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start</button>
      </div>
    </section>
  )
}
