"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import Card from "@/components/card";
import Content from "@/components/content";
import useMediaQuery from "@/hooks/useMediaQuery";
import classNames from "classnames";

const Tab = () => {
  const tablet = useMediaQuery("(max-width: 1024px)");
  const [activeTab, setActiveTab] = useState("1");

  const abs = tablet
    ? "static"
    : "!absolute bottom-0 w-full left-0 translate-y-[100%]";

  return (
    <Tabs defaultValue="1" className="relative">
      <TabsList className="grid gap-4 lg:grid-cols-4">
        <TabsTrigger value="1">
          <Card />
          <div className={classNames(abs)}>
            <TabsContent value="1">
              <Content title="content1" body="kjj" />
            </TabsContent>
          </div>
        </TabsTrigger>
        <TabsTrigger value="2">
          <Card />
          <div className={classNames(abs)}>
            <TabsContent value="2">
              <Content title="content2" />
            </TabsContent>
          </div>
        </TabsTrigger>
        <TabsTrigger value="3">
          <Card />
          <div className={classNames(abs)}>
            <TabsContent value="3">
              <Content title="content3" />
            </TabsContent>
          </div>
        </TabsTrigger>
        <TabsTrigger value="4">
          <Card />
          <div className={classNames(abs)}>
            <TabsContent value="4">
              <Content title="content4" />
            </TabsContent>
          </div>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default Tab;
