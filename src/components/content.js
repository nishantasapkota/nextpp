"use client";

import React from "react";

import Accordian from "./accordian";

const Content = ({ title, body }) => {
  return (
    <div className="text-left gap-11  py-12 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2  bg-yellow-500 rounded-3xl">
      <div className="">
        <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
        <p className="mt-4 text-base text-gray-600">
          {body}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error, beatae?
        </p>
        <button className="border-2 rounded-full border-black border-solid mt-8 py-5 px-11 text-lg font-semibold text-white uppercase transition-colors duration-200 transform bg-red-600 rounded-lg shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
          Discover Product
        </button>
      </div>
      <div>
        <Accordian />
      </div>
    </div>
  );
};

export default Content;
