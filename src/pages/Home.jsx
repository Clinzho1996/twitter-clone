import React from "react";
import { Feeds, Trending } from "../components";
import "../App.css";

const Home = () => {
  return (
    <div className="flex">
      <div className="flex-1 px-10 w-70%">
        <Feeds />
      </div>
      <div className="flex-1 mr-6 border-l-1 px-8 ">
        <Trending />
      </div>
    </div>
  );
};

export default Home;
