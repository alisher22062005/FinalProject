"use client";

import { PlanetType } from "@/toolkit/slices/Planet";
import { CharacterType } from "@/toolkit/slices/Character";
import { useRouter } from "next/navigation";

export default function ItemDescribe({
  fetchedData,
  slug,
  id,
}: {
  fetchedData: PlanetType[] | CharacterType[];
  slug: number;
  id: number;
}) {
  let item;
  const router = useRouter();

  if (id == 1) item = fetchedData.filter((item) => item.id == slug);
  else item = fetchedData.filter((i, index) => index + 1 == slug);

  function isPlanet(item: PlanetType | CharacterType): item is PlanetType {
    return typeof (item as PlanetType).climate === "string";
  }

  function isCharacter(
    item: CharacterType | PlanetType
  ): item is CharacterType {
    return typeof (item as CharacterType).gender === "string";
  }

  const selectedItem = item[0];
  console.log("SelectedItem: ", selectedItem);
  return (
    <>
      <div
        onClick={() => router.back()}
        className=" h-screen flex justify-center flex-col text-white w-full gap-[2rem] font-[Space_Grotesk] sm:p-[25%] xs:p-[10%] "
      >
        <div className="w-[100%] flex justify-center  ">
          <img
            // src="/assets/default.jpg"
            src={id != 1 ? "/assets/default.jpg" : selectedItem?.image}
            alt="Image"
            className="h-[330px] sm:w-[40%] xs:w-[100%] bg-center bg-cover rounded-[1rem] "
          ></img>
        </div>
        <div>
          <div className="flex flex-col w-[90%] justify-start sm:ml-[10%] xs:ml-[3%] gap-[2rem]  ">
            <div className="flex text-[2rem] font-bold  ">Description</div>
            {/* planets */}
            {id == 3 && item.length > 0 && isPlanet(selectedItem) && (
              <div className="flex flex-col font-medium text-[1.3rem] pb-[5%] ">
                <div className="p-[2%] flex flex-row sm:gap-[20%] xs:gap-[50%] border-t-white border-b-white border-[3px] border-[#1C2126] sm:w-[80%] xs:w-[100%]">
                  <div className="w-[5%]  text-[#A1ABB5] ">Name</div>
                  <div>{selectedItem.name}</div>
                </div>
                <div className="p-[2%] flex flex-row  sm:gap-[20%] xs:gap-[50%]  border-b-white border-[3px] border-[#1C2126] sm:w-[80%] xs:w-[100%]">
                  <div className="w-[5%]  text-[#A1ABB5]">Climate</div>
                  <div className="sm:w-[80%]  ">{selectedItem.climate}</div>
                </div>
                <div className="p-[2%] flex flex-row  sm:gap-[20%] xs:gap-[50%] border-b-white border-[3px] border-[#1C2126] sm:w-[80%] xs:w-[100%] ">
                  <div className="w-[5%]  text-[#A1ABB5]">Population</div>
                  <div>{selectedItem.population}</div>
                </div>
              </div>
            )}
            {/* characters */}
            {id == 1 && item.length > 0 && isCharacter(selectedItem) && (
              <div className="flex flex-col font-medium text-[1.3rem] pb-[5%]">
                <div className="p-[2%] flex flex-row gap-[20%] border-t-white border-b-white border-[3px] border-[#1C2126] sm:w-[80%] xs:w-[100%]">
                  <div className="w-[5%]  text-[#A1ABB5] ">Name</div>
                  <div>{selectedItem.name}</div>
                </div>
                <div className="p-[2%] flex flex-row  gap-[20%]  border-b-white border-[3px] border-[#1C2126] sm:w-[80%] xs:w-[100%]">
                  <div className="w-[5%] text-[#A1ABB5]">Gender</div>
                  <div className="w-[80%] ">{selectedItem.gender}</div>
                </div>
                <div className="p-[2%] flex flex-row  gap-[20%] border-b-white border-[3px] border-[#1C2126] sm:w-[80%] xs:w-[100%] ">
                  <div className="w-[5%]  text-[#A1ABB5]">Heigth</div>
                  <div>{selectedItem.height}</div>
                </div>
                <div className="p-[2%] flex flex-row  gap-[20%] border-b-white border-[3px] border-[#1C2126] sm:w-[80%] xs:w-[100%]  ">
                  <div className="w-[5%]  text-[#A1ABB5]">Born</div>
                  <div>{selectedItem.born}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
