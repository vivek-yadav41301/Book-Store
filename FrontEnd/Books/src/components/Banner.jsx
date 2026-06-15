import React from "react";
import banner from "../assets/banner.png";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>{" "}
            </h1>
            <p className="text-xl">
              Welcome to our bookstore — your one-stop destination for inspiring
              stories, learning, and adventure. Explore books from every genre
              at affordable prices.
            </p>
            <label className="input validator join-item bg-transparent border border-gray-300 dark:border-gray-600">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>

              <input
                type="email"
                placeholder="Email"
                className="bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none"
                required
              />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2 flex justify-center items-center dark:bg-slate-900">
          <img
            src={banner}
            className="w-140 h-140 bg-transparent"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
 banner