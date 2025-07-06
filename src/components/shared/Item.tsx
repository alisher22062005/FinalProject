import { CharacterType } from "@/toolkit/slices/Character";
import { useRouter } from "next/navigation";
import { FilmType } from "@/toolkit/slices/Film";
import { PlanetType } from "@/toolkit/slices/Planet";

export default function Item({
  item,
  data,
}: // key,
{
  item: CharacterType | FilmType | PlanetType;
  data: CharacterType[] | PlanetType[] | FilmType[];
  // key: number;
}) {
  // console.log("ItemItem: ", item);
  // console.log("DATA: ", data);
  const router = useRouter();

  function navigateTo() {
    if (item.id) router.push(`/characters/${item.id}`);
    else {
      if ("climate" in item) {
        let index = 0;
        const i = data.filter((i, ind) => {
          if (i == item) index = ind;
        });
        router.push(`/planets/${index + 1}`);
        console.log(index);
      }
    }
  }

  return (
    <>
      <div className="card bg-base-100 sm:w-[20%] shadow-sm xs:w-[40%] ">
        <figure>
          <img
            onClick={navigateTo}
            className="sm:h-[200px] xs:h-[100px] max-w-[60%] object-cover  rounded-[1rem] xs:flex"
            // src={item.image || "assets/no_image.webp"}
            src={item.image?.trim() ? item.image : "/assets/no_image.webp"}
            alt={item.name || item.title}
          />
        </figure>
        <div className="card-body pb-[15%]">
          <div className="text-white pt-[3%] w-full font-[Space_Grotesk] font-medium truncate">
            {item.name || item.title}
          </div>
        </div>
      </div>
    </>
  );
}
