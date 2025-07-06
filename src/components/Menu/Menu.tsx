"use client";

import "../../styles/Menu.css";
import Header from "./Header/Header";
import Seacrh from "./Search/Search";
import { useEffect } from "react";
import { useState } from "react";

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
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.6), rgba(0,0,0,1)),  url('/assets/red.jpg')`,
        }}
        className=" w-full h-screen bg-center  main-gradient bg-cover animate-my-float  "
      >
        <Header></Header>
      </div>

      <Seacrh></Seacrh>
    </>
  );
}
