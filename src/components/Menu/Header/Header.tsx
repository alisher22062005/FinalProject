"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Header() {
  const router = useRouter();

  const [currentButton, setCurrentButton] = useState("");

  useEffect(() => {
    if (currentButton) localStorage.setItem("currentButton", currentButton);
  }, [currentButton]);

  useEffect(() => {
    const b = localStorage.getItem("currentButton");
    if (b) {
      setCurrentButton(b);
      if (b === "Characters") {
        router.push("/");
      } else {
        router.push(`/${b.toLowerCase()}`);
      }
    } else {
      setCurrentButton("Characters");
      router.push("/");
    }
  }, [router]);

  function handleClickAbout() {
    setCurrentButton("About");
    router.push("/about");
  }

  function handleClickFillms() {
    setCurrentButton("Films");
    router.push("/films");
  }
  function handleClickPlanets() {
    setCurrentButton("Planets");
    router.push("/planets");
  }

  function handleClickCharacters() {
    setCurrentButton("Characters");
    router.push("/");
  }

  return (
    <div className="fixed  top-0 left-0  sm:ml-[10%] w-[100%]  flex  h-[13vh] sm:gap-[10%] xs:gap-[0%]  text-[1.2rem] xs:ml-[0px]  ">
      <div className="w-[20%] flex items-center  xs:hidden sm:block">
        {" "}
        <div className=" relative h-[100px] w-[150px] ">
          {" "}
          <Image
            className="relative xs:object-cover xs:object-center overflow:hidden   "
            src="/assets/star_wars.png"
            alt="Image"
            fill
          />
        </div>
      </div>

      <div className="flex  text-white sm:w-[30%] sm:gap-[8%] xs:gap-[6%] items-center xs:w-full xs:justify-center  ">
        <div>
          <button
            className={`${
              currentButton == "About" ? "text-[yellow]" : "text-white"
            }`}
            onClick={handleClickAbout}
          >
            About
          </button>
        </div>
        <div>
          <button
            className={`${
              currentButton == "Films" ? "text-[yellow]" : "text-white"
            }`}
            onClick={handleClickFillms}
          >
            Films
          </button>
        </div>
        <div>
          <button
            className={`${
              currentButton == "Planets" ? "text-[yellow]" : "text-white"
            }`}
            onClick={handleClickPlanets}
          >
            Planets
          </button>
        </div>
        <div>
          <button
            className={`${
              currentButton == "Characters" ? "text-[yellow]" : "text-white"
            }`}
            onClick={handleClickCharacters}
          >
            Characters
          </button>
        </div>
      </div>
    </div>
  );
}
