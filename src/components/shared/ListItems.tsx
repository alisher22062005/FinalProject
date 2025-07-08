import { useSelector } from "react-redux";
import { RootState } from "@/toolkit/store";
import { Pagination } from "@mui/material";
import Item from "./Item";
import { CharacterType } from "@/toolkit/slices/Character";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { PlanetType } from "@/toolkit/slices/Planet";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/toolkit/store";
import { fetchCharacters } from "@/toolkit/slices/Character";
import { fetchPlanets } from "@/toolkit/slices/Planet";
export default function ListItems({
  findItem,
  match,
  setFindItem,
  image,
}: {
  findItem: boolean;
  match: (CharacterType | PlanetType)[];
  setFindItem: (value: boolean) => void;
  image?: string;
}) {
  const [currentArray, setCurrentArray] =
    useState<(CharacterType | PlanetType)[]>();

  const statusCharacter = useSelector(
    (state: RootState) => state.characters.status
  );
  const statusPlanets = useSelector((state: RootState) => state.planets.status);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (statusCharacter == "idle") dispatch(fetchCharacters());
    if (statusPlanets == "idle") dispatch(fetchPlanets());
  }, []);

  const characters = useSelector(
    (state: RootState) => state.characters.characters
  );
  const planets = useSelector((state: RootState) => state.planets.planets);
  const data = image ? planets : characters;

  useEffect(() => {
    setCurrentArray(data.filter((item, index) => index < 6));
  }, [data]);

  const handleClick = (value: number) => {
    console.log(value);
    switch (value) {
      case 1:
        setCurrentArray(data.filter((item, index) => index < 6));
        break;
      case 2:
        setCurrentArray(data.filter((item, index) => index >= 6 && index < 12));
        break;
      case 3:
        setCurrentArray(
          data.filter((item, index) => index >= 12 && index < 18)
        );
        break;
      case 4:
        setCurrentArray(
          data.filter((item, index) => index >= 18 && index < 24)
        );
        break;
      case 5:
        setCurrentArray(
          data.filter((item, index) => index >= 24 && index < 30)
        );
        break;
      case 6:
        setCurrentArray(
          data.filter((item, index) => index >= 30 && index < 36)
        );
        break;
      case 7:
        setCurrentArray(
          data.filter((item, index) => index >= 36 && index < 42)
        );
        break;
      case 8:
        setCurrentArray(
          data.filter((item, index) => index >= 42 && index < 48)
        );
        break;
      case 9:
        setCurrentArray(
          data.filter((item, index) => index >= 48 && index < 54)
        );
        break;
      case 10:
        setCurrentArray(
          data.filter((item, index) => index >= 54 && index < 60)
        );
        break;
      case 11:
        setCurrentArray(
          data.filter((item, index) => index >= 60 && index < 66)
        );
        break;
    }
  };
  return (
    <>
      {!findItem && (
        <div className="flex flex-col gap-[3rem] ml-[10%] pb-[5%]  ">
          <div className="text-white sm:ml-[10%] xs:ml-[4%] text-[2rem] font-bold text-[#FFFFFF] font-[Space_Grotesk]">
            {!image ? <span>Characters</span> : <span>Planets</span>}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-[10%] ">
            {" "}
            {currentArray?.map((item, index) => {
              return <Item key={index} item={item} data={data}></Item>;
            })}
          </div>
        </div>
      )}

      {findItem && (
        <div className="flex  xs:justify-center xs:items-center gap-[3%] sm:flex-row xs:flex-col">
          <div className="flex xs:justify-center sm:w-[20%] xs:w-[60%]">
            <div className=" relative h-[400px] w-full">
              {" "}
              <Image
                alt="Image"
                className={` rounded-[1rem]  object-top object-cover ${
                  image
                    ? "sm:w-[300px] xs:w-[250px]"
                    : "sm:max-w-[100%] xs:w-[80%]"
                }`}
                src={match[0].image || "/assets/no_image.webp"}
                fill
                priority
              />
            </div>
          </div>
          <div className="sm:mt-[24%] xs:mt-[10%] ">
            <Button onClick={() => setFindItem(false)} variant="contained">
              Back
            </Button>
          </div>
        </div>
      )}

      {!findItem && !image && (
        <div className="flex   sm:justify-center mr-[5%] pb-[5%] xs:w-[100%] xs:justify-center">
          {" "}
          <Pagination
            onChange={(e, value) => handleClick(value)}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",
              },
            }}
            count={11}
            defaultPage={6}
          />{" "}
        </div>
      )}

      {findItem && <div className="pb-[5%] w-full"></div>}
    </>
  );
}
