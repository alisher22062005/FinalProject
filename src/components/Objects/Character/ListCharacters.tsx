import { useSelector } from "react-redux";
import { RootState } from "@/toolkit/store";
import { Pagination } from "@mui/material";
import Character from "./Character";
import { CharacterType } from "@/toolkit/slices/Character";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
export default function ListCharacters({
  findCharacter,
  match,
  setFindCharacter,
}: {
  findCharacter: Boolean;
  match: CharacterType[];
  setFindCharacter: (value: Boolean) => void;
}) {
  const [currentArray, setCurrentArray] = useState<CharacterType[]>();
  const data = useSelector((state: RootState) => state.characters.characters);

  console.log("Match: ", match);

  useEffect(() => {
    setCurrentArray(data.filter((item, index) => index < 6));
    console.log("CurrentArry: ", currentArray);
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
      case 3:
        setCurrentArray(
          data.filter((item, index) => index >= 18 && index < 24)
        );
        break;
      case 4:
        setCurrentArray(
          data.filter((item, index) => index >= 24 && index < 30)
        );
        break;
      case 5:
        setCurrentArray(
          data.filter((item, index) => index >= 30 && index < 36)
        );
        break;
      case 6:
        setCurrentArray(
          data.filter((item, index) => index >= 36 && index < 42)
        );
        break;
      case 7:
        setCurrentArray(
          data.filter((item, index) => index >= 42 && index < 48)
        );
        break;
      case 8:
        setCurrentArray(
          data.filter((item, index) => index >= 48 && index < 54)
        );
        break;
      case 9:
        setCurrentArray(
          data.filter((item, index) => index >= 54 && index < 60)
        );
        break;
      case 10:
        setCurrentArray(
          data.filter((item, index) => index >= 60 && index < 66)
        );
        break;
      case 11:
        setCurrentArray(
          data.filter((item, index) => index >= 66 && index < 72)
        );
        break;
    }
  };
  return (
    <>
      {/* {!currentArray && (
        <div className="flex flex-col gap-[3rem] ml-[10%]  ">
          <div className="text-white flex justify-center mt-[5%]">
            Loading characters...
          </div>
        </div>
      )} */}
      {!findCharacter && (
        <div className="flex flex-col gap-[3rem] ml-[10%]  ">
          <div className="text-white ml-[10%] text-[2rem] font-bold text-[#FFFFFF] font-[Space_Grotesk]">
            Characters
          </div>
          <div className="flex flex-wrap justify-center items-center gap-[10%]">
            {" "}
            {currentArray?.map((item: CharacterType, index) => {
              return <Character key={index} character={item}></Character>;
            })}
          </div>
        </div>
      )}

      {findCharacter && (
        <div className="flex  justify-center items-center gap-[3%]">
          <div className="mt-[24%] ">
            <Button onClick={() => setFindCharacter(false)} variant="contained">
              Back
            </Button>
          </div>
          <div>
            <img
              className="h-[400px] max-w-[100%] rounded-[1rem]"
              src={match[0].image}
            ></img>
          </div>
        </div>
      )}

      <div className="flex   justify-end mr-[5%] pb-[5%]">
        {" "}
        <Pagination
          onChange={(e, value) => handleClick(value)}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white", // 🔥 text color
            },
          }}
          count={11}
          defaultPage={6}
        />{" "}
      </div>
    </>
  );
}
