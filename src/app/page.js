"use client";
// import Image from "next/image";

import Card from "@/components/card";
import Accordian from "@/components/accordian";
import Tab from "@/components/tab";
import { Horse, Heart, Cube } from "@phosphor-icons/react";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(0);
  return (
    <>
      <div className="container mx-auto">
        <Tab />
      </div>
    </>
  );
}
