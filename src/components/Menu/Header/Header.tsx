"use client";
import "../../../styles/Menu.css";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();

  const [currenButton, setCurrentButton] = useState("");

  useEffect(() => {
    if (currenButton) localStorage.setItem("currentButton", currenButton);
  }, [currenButton]);

  useEffect(() => {
    const b = localStorage.getItem("currentButton");
    if (b) setCurrentButton(b);
    else setCurrentButton("Characters");
  }, []);

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
    <div className="fixed top-1  sm:ml-[10%] w-[100%]  flex  h-[13vh] sm:gap-[10%] xs:gap-[0%]  text-[1.2rem] xs:ml-[0px]  ">
      <div className="w-[20%] flex items-center  xs:hidden sm:block">
        {" "}
        <img
          className="xs:object-cover xs:object-center h-[100%] img-color"
          src="/assets/star_wars.png"
        ></img>
      </div>

      <div className="flex  text-white sm:w-[30%] sm:gap-[8%] xs:gap-[6%] items-center xs:w-full xs:justify-center  ">
        <div>
          <button
            className={`${
              currenButton == "About" ? "text-[yellow]" : "text-white"
            }`}
            onClick={handleClickAbout}
          >
            About
          </button>
        </div>
        <div>
          <button
            className={`${
              currenButton == "Films" ? "text-[yellow]" : "text-white"
            }`}
            onClick={handleClickFillms}
          >
            Films
          </button>
        </div>
        <div>
          <button
            className={`${
              currenButton == "Planets" ? "text-[yellow]" : "text-white"
            }`}
            onClick={handleClickPlanets}
          >
            Planets
          </button>
        </div>
        <div>
          <button
            className={`${
              currenButton == "Characters" ? "text-[yellow]" : "text-white"
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
