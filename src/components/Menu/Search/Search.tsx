import "../../../styles/Menu.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/toolkit/store";
import { RootState } from "@/toolkit/store";
import { CharacterType, fetchCharacters } from "@/toolkit/slices/Character";
import { fetchPlanets, PlanetType } from "@/toolkit/slices/Planet";
import ListItems from "@/components/shared/ListItems";

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

  const source = image ?? "assets/search.jpg";

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
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5), rgba(0,0,0,0.9)),url("${source}") `,
        }}
        className="h-screen flex  items-center justify-center overflow:hidden bg-center bg-cover sm: mt-[10%] xs:mt-[5%]  bg-white "
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder={notValidInput}
          className={`sm:w-[30%] xs:w-[55%] p-[1%] border text-white  z-[2] ${
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
