"use client";

import "../../styles/Menu.css";
import Header from "./Header/Header";
import Seacrh from "./Search/Search";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
export default function Menu() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200); // simulate delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }
  return (
    <>
      <div className="relative w-full h-screen bg-center  main-gradient bg-cover animate-my-float">
        <Image
          src="/assets/red.jpg"
          alt="Image"
          fill
          className=" object-center object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t  from-black/80 to-black/85"></div>
        <Header></Header>
      </div>

      <Seacrh></Seacrh>
    </>
  );
}
