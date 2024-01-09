"use client";

import Card from "@/components/card";
import Content from "@/components/content";
import useMediaQuery from "@/hooks/useMediaQuery";
import classNames from "classnames";
import { useState } from "react";

const Tab = () => {
  const tablet = useMediaQuery("(max-width: 1024px)");
  const [activeTab, setActiveTab] = useState([true, false, false, false]);

  const abs = tablet
    ? "static"
    : "!absolute bottom-0 w-full left-0 translate-y-[100%]";

  return (
    <div className="relative">
      <div className="grid gap-4 lg:grid-cols-4">
        <div
          onClick={() => {
            setActiveTab([true, false, false, false]);
          }}
        >
          <Card active={activeTab[0]} />
          {activeTab[0] && (
            <div className={classNames(abs)}>
              <div>
                <Content title="content1" body="kjj" />
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => {
            setActiveTab([false, true, false, false]);
          }}
        >
          <Card active={activeTab[1]} />
          {activeTab[1] && (
            <div className={classNames(abs)}>
              <div>
                <Content title="content2" body="kjj" />
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => {
            setActiveTab([false, false, true, false]);
          }}
        >
          <Card active={activeTab[2]} />
          {activeTab[2] && (
            <div className={classNames(abs)}>
              <div>
                <Content title="content3" body="kjj" />
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => {
            setActiveTab([false, false, false, true]);
          }}
        >
          <Card active={activeTab[3]} />
          {activeTab[3] && (
            <div className={classNames(abs)}>
              <div>
                <Content title="content4" body="kjj" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab;
