"use client";

import Header from "./Header/Header";
import Seacrh from "./Search/Search";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { AppDispatch, RootState } from "@/toolkit/store";
import { fetchPlanets } from "@/toolkit/slices/Planet";
import { fetchCharacters } from "@/toolkit/slices/Character";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Menu() {
  const [loading, setLoading] = useState(true);
  const statusPlanets = useSelector((state: RootState) => state.planets.status);
  const statusCharacter = useSelector(
    (state: RootState) => state.characters.status
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (statusCharacter == "idle") dispatch(fetchCharacters());
    if (statusPlanets == "idle") dispatch(fetchPlanets());
  }, [dispatch, statusPlanets, statusCharacter]);

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
        <div className="absolute inset-0 bg-gradient-to-t  sm:from-black/80 sm:to-black/85 xs:from-black/80 xs:to-black/65"></div>
        <Header></Header>
      </div>

      <Seacrh></Seacrh>
    </>
  );
}
