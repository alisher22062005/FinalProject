import "../../../styles/Menu.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/toolkit/store";
import { RootState } from "@/toolkit/store";
import { CharacterType, fetchCharacters } from "@/toolkit/slices/Character";

import ListCharacters from "@/components/Objects/Character/ListCharacters";

export default function Seacrh() {
  const [input, setInput] = useState("");
  const [findCharacter, setFindCharacter] = useState(false);
  const [currentSearch, setCurrentSearch] = useState<CharacterType[]>([]);

  const dispatch = useDispatch<AppDispatch>();
  let match: CharacterType[] = [];

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  const data = useSelector((state: RootState) => state.characters.characters);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      match = data.filter(
        (character) =>
          character.name.toLowerCase() == input.trim().toLowerCase()
      );
      console.log("Match: ", match);
      if (match.length > 0) {
        setCurrentSearch(match);
        setFindCharacter(true);
        console.log(match);
      } else setFindCharacter(false);

      setInput("");
    }
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url("assets/search.jpg") ` }}
        className="h-screen flex items-center justify-center overflow:hidden bg-center bg-cover  mt-[10%]  bg-whites "
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search..."
          className="w-[30%] p-[1%] border placeholder-white text-white z-[2] bg-black mt-[35%]"
        />
      </div>

      <ListCharacters
        findCharacter={findCharacter}
        setFindCharacter={setFindCharacter}
        match={currentSearch}
      ></ListCharacters>
    </>
  );
}
