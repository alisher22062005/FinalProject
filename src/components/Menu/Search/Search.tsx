import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/toolkit/store";
import { RootState } from "@/toolkit/store";
import { CharacterType, fetchCharacters } from "@/toolkit/slices/Character";
import { fetchPlanets, PlanetType } from "@/toolkit/slices/Planet";
import ListItems from "@/components/shared/ListItems";
import Image from "next/image";

export default function Seacrh({ image }: { image?: string }) {
  const [input, setInput] = useState("");
  const [findItem, setFindItem] = useState(false);
  const [currentSearch, setCurrentSearch] = useState<
    (CharacterType | PlanetType)[]
  >([]);
  const [notValidInput, setNotValidInput] = useState("...Search");
  const [notFound, setNotFound] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  let match: (CharacterType | PlanetType)[] = [];

  useEffect(() => {
    if (image) {
      dispatch(fetchPlanets());
    } else {
      dispatch(fetchCharacters());
    }
  }, [dispatch, image]);

  const source: string = image?.startsWith("http")
    ? image
    : "/assets/search.jpg";

  const characters = useSelector(
    (state: RootState) => state.characters.characters
  );
  const planets = useSelector((state: RootState) => state.planets.planets);
  const data = image ? planets : characters;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (input.trim().length == 0) {
        setNotValidInput("...Type some text");
        setNotFound(true);
        return;
      }

      match = data.filter(
        (item) => item.name.toLowerCase() == input.trim().toLowerCase()
      );

      if (match.length > 0) {
        setCurrentSearch(match);
        setFindItem(true);
        setNotFound(true);
        console.log("NotFoubd", notFound);
      } else {
        setFindItem(false);
        setNotFound(false);
        console.log("NotFound: ", notFound);
      }

      setInput("");
      setNotValidInput("...Search");
    }
  };

  return (
    <>
      <div className=" relative h-[100dvh] flex  items-center justify-center overflow:hidden bg-center bg-cover sm: mt-[10%] xs:mt-[5%]  bg-white">
        <Image
          src={source}
          alt="Image"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b  from-black/85 to-black/15"></div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder={notValidInput}
          className={`sm:w-[30%] xs:w-[55%] sm:p-[1%] border text-white xs:p-[2%]  z-[2] ${
            notValidInput == "...Search"
              ? "placeholder-white"
              : "placeholder-[#ba000d]"
          } bg-black mt-[35%]`}
        />
        {!notFound && (
          <div className="text-[#ba000d] sm:text-[1.2rem] flex justify-end sm:w-[30%] xs:w-[50%] fixed sm:mt-[42%] xs:mt-[53%] xs:text-[1rem] font-bold">
            Not Found
          </div>
        )}
      </div>

      <ListItems
        findItem={findItem}
        setFindItem={setFindItem}
        match={currentSearch}
        image={image}
      ></ListItems>
    </>
  );
}
