"use client";
import Header from "@/components/Menu/Header/Header";
import { useEffect } from "react";
import { useState } from "react";
import Search from "../../components/Menu/Search/Search";
import SmoothWrapper from "@/components/Menu/SmoothScroll/SmoothScroll";

export default function Planets() {
  const image = "assets/search_planets.jpg";
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
      <SmoothWrapper>
        {" "}
        <div
          className=" h-[70vh]  w-full bg-cover bg-center animate-my-float flex items-center justify-center "
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,1)), url('/assets/planets.jpg')`,
          }}
        >
          <div className="text-white text-[3rem] font-bold">Planets</div>
          <Header></Header>
        </div>
        <Search image={image}></Search>
      </SmoothWrapper>
    </>
  );
}
