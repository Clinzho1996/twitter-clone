import React from "react";
import {
  RiBarChart2Line,
  RiCalendar2Line,
  RiEmojiStickerLine,
  RiFileGifLine,
  RiThumbDownLine,
} from "react-icons/ri";
import placeholder from "../assets/react.svg";
import image from "../assets/Placehpolder.png";

const Feeds = () => {
  return (
    <div className="scroll">
      <div className="flex flex-row border-b-1 py-4">
        <div>
          <img src={placeholder} className="w-10 h-10 mr-2 rounded-full" />
        </div>
        <div>
          <input
            type="text"
            style={{ height: "100px", alignItems: "flex-start" }}
            placeholder="search here..."
            className="e-input-group bg-gray-300 dark:bg-[#33373E] dark:text-white w-[600px] ml-2"
          />
          <div className="flex flex-row justify-between pt-2">
            <div className="flex flex-row space-x-2 ">
              <RiThumbDownLine className="text-dark dark:text-blue-700" />
              <RiFileGifLine className="text-dark dark:text-blue-700" />
              <RiBarChart2Line className="text-dark dark:text-blue-700" />
              <RiEmojiStickerLine className="text-dark dark:text-blue-700" />
              <RiCalendar2Line className="text-dark dark:text-blue-700" />
            </div>
            <div>
              <button className="bg-dark bg-blue-700 px-6 py-1 rounded-sm text-dark dark:text-gray-400 w-200">
                tweet
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col border-b-1 py-4">
        <div className="flex flex-row">
          <div>
            <img src={placeholder} />
          </div>
          <div className="pl-4">
            <p className="text-black dark:text-gray-400 text-sm">
              Devon Lane <span>@johndoe</span>
            </p>
            <p className="text-black dark:text-white ">Tom is in a big hurry</p>
          </div>
        </div>
        <div className="pt-4">
          <img
            src={image}
            className="w-full h-300 items-center rounded-sm object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col border-b-1 py-4">
        <div className="flex flex-row">
          <div>
            <img src={placeholder} />
          </div>
          <div className="pl-4">
            <p className="text-black dark:text-gray-400 text-sm">
              Devon Lane <span>@johndoe</span>
            </p>
            <p className="text-black dark:text-white ">Tom is in a big hurry</p>
          </div>
        </div>
        <div className="pt-4">
          <img
            src={image}
            className="w-full h-300 items-center rounded-sm object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Feeds;
