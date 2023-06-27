import React from "react";
import placeholder from "../assets/Placeholder.png";

const Trending = ({ title, color }) => {
  return (
    <div className="trending ">
      <div className="container">
        <input
          type="text"
          placeholder="search here..."
          className="e-input-group bg-gray-300 dark:bg-[#33373E] dark:text-white"
        />
      </div>
      <div className="happening bg-gray-300 dark:bg-[#33373E] dark:text-white my-4 rounded-2xl px-4 py-4">
        <h3 className="text-black font-bold border-b-1 pb-4 dark:text-gray-400">
          What is happening
        </h3>
        <p className="text-sm pt-4 text-black dark:text-gray-400">
          COVID-19 Last night
        </p>
        <div className="flex flex-row border-b-1 pb-4">
          <p className="text-md text-black dark:text-white font-bold">
            England’s Chief Medical Officer says the UK is at the most dangerous
            time of the pandemic
          </p>
          <img
            src={placeholder}
            alt="react"
            className="h-20 w-20 rounded-sm pl-4 object-cover"
          />
        </div>
        <p className="text-sm pt-4 text-black dark:text-gray-400">
          COVID-19 Last night
        </p>
        <div className="flex flex-row border-b-1 pb-4">
          <p className="text-md text-black font-bold dark:text-white">
            England’s Chief Medical Officer says the UK is at the most dangerous
            time of the pandemic <br />
            <span className="text-sm text-xs">
              Trending with{" "}
              <span className="text-black text-blue-500">#politics</span>
            </span>
          </p>
          <img
            src={placeholder}
            alt="react"
            className="h-20 w-20 rounded-sm pl-4 object-cover"
          />
        </div>
        <p className="text-sm pt-4 text-black dark:text-gray-400">
          COVID-19 Last night
        </p>
        <div className="flex flex-row border-b-1 pb-4">
          <p className="text-md text-black font-bold dark:text-white">
            England’s Chief Medical Officer says the UK is at the most dangerous
            time of the pandemic <br />
            <span className="text-sm text-xs">
              Trending with{" "}
              <span className="text-black text-blue-500">#sports</span>
            </span>
          </p>
          <img
            src={placeholder}
            alt="react"
            className="h-20 w-20 rounded-sm pl-4 object-cover"
          />
        </div>
      </div>
      <div className="happening bg-gray-300 dark:bg-[#33373E] dark:text-white my-4 rounded-2xl px-4 py-4">
        <h3 className="text-black font-bold border-b-1 pb-4 dark:text-gray-400">
          Who to follow
        </h3>
        <div className="flex flex-row border-b-1 pb-4 align-middle justify-between pt-4 items-center">
          <img src="../assets/react.svg" alt="logo" />
          <p className="text-md text-black font-bold">Bessie Cooper</p>
          <button type="button" className="btn border-current  cursor-pointer">
            follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trending;
