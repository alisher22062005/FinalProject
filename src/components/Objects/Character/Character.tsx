import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CharacterType } from "@/toolkit/slices/Character";
import { useSelector } from "react-redux";

export default function Character({ character }: { character: CharacterType }) {
  // console.log("Charcter: ", character);
  // console.log("Image: ", character.image);
  return (
    <>
      <div className="card bg-base-100 w-[20%] shadow-sm ">
        <figure>
          <img
            className="h-[200px] max-w-[60%] object-cover  rounded-[1rem]"
            src={character.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body pb-[15%] ">
          <div className=" text-white pt-[3%]  font-[Space_Grotesk] font-medium ">
            {character.name}
          </div>
        </div>
      </div>
    </>
  );
}
