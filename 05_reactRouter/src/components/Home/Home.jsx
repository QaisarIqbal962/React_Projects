import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <aside className="mx-0 sm:mx-4 lg:mx-8 my-6 sm:my-8">
        <div className="bg-white text-black rounded-lg  px-4 sm:px-8 lg:px-10 py-8 sm:py-10 flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* First image - left on desktop, smaller */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-start">
            <img
              className="w-2/3 sm:w-1/2 md:w-full max-w-xs md:max-w-sm h-auto object-contain"
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?ga=GA1.1.1877215758.1691305633&semt=ais_hybrid"
              alt="Programming illustration"
            />
          </div>

          {/* Text content - right on desktop */}
          <div className="w-full md:w-7/12 max-w-xl space-y-5 sm:space-y-7 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Download Now
              <span className="block sm:mt-1 text-2xl sm:text-3xl lg:text-4xl text-gray-700">
                Lorem Ipsum
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto md:mx-0">
              Get started with a clean and modern React layout that looks great
              on both desktop and mobile devices.
            </p>
            <Link
              className="download-cta inline-flex text-white items-center px-5 py-2.5 sm:px-6 sm:py-3 font-medium bg-[#018673] rounded-lg transition-all duration-200 hover:bg-[#016a5c] hover:shadow-lg hover:-translate-y-0.5"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="shrink-0"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              <span className="ml-2">Download now</span>
            </Link>
          </div>
        </div>
      </aside>

      <div className="flex justify-center mt-10 sm:mt-12 lg:mt-16 px-0 sm:px-4">
        <img
          className="w-4/5 sm:w-2/3 lg:w-1/2 max-w-xl rounded-lg  object-cover"
          src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?ga=GA1.1.1877215758.1691305633&semt=ais_hybrid"
          alt="Secondary illustration"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-4xl lg:text-5xl py-8 sm:py-10 font-medium text-gray-900">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
