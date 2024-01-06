"use client";

import { ArrowDown } from "@phosphor-icons/react";

const Card = () => {
  return (
    <>
      <div className="border rounded-md overflow-hidden relative group cursor-pointer">
        <div className="p-6 pb-0">
          <div className="flex">
            <h5 className="text-xl leading-6 font-semibold grow line-clamp-2">
              Card Title
            </h5>
            <img src="/card-1.svg" alt="" />
          </div>
          <p className="text-base font-medium mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            beatae?
          </p>
        </div>
        <button className=" relative   mt-2.5 ">
          <span className=" bg-slate-500 h-full flex gap-4 items-center w-full h-full group-hover:bg-yellow-500 px-6 z-50 relative py-4 rounded-tr-3xl group-hover:translate-y-[-6px]">
            Discover <ArrowDown />
          </span>
          <span className=" px-6 top-[6px] left-[0px] absolute w-[105%] h-full py-4 gap-4 items-center bg-blue-500 hidden group-hover:block rounded-tr-3xl"></span>
        </button>
      </div>
    </>
  );
};

export default Card;
