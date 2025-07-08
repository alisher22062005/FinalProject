"use client";
import Header from "@/components/Menu/Header/Header";
import { useEffect } from "react";
import { useState } from "react";
import Search from "../../components/Menu/Search/Search";
import SmoothWrapper from "@/components/Menu/SmoothScroll/SmoothScroll";
import Image from "next/image";
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
        <div className=" relative h-[70vh]  w-full bg-cover bg-center animate-my-float flex items-center justify-center">
          <Image
            className="object-cover object-center"
            src="/assets/planets.jpg"
            alt="Image"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t  from-black/65 to-black/65"></div>
          <div className="text-white text-[3rem] font-bold z-10">Planets</div>
          <Header></Header>
        </div>
        <Search image={image}></Search>
      </SmoothWrapper>
    </>
  );
}
