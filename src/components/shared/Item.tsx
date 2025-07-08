import { CharacterType } from "@/toolkit/slices/Character";
import { useRouter } from "next/navigation";
import { FilmType } from "@/toolkit/slices/Film";
import { PlanetType } from "@/toolkit/slices/Planet";
import Image from "next/image";
export default function Item({
  item,
  data,
}: // key,
{
  item: CharacterType | FilmType | PlanetType;
  data: CharacterType[] | PlanetType[] | FilmType[];
}) {
  const router = useRouter();

  function navigateTo() {
    if (item.id) router.push(`/characters/${item.id}`);
    else {
      if ("climate" in item) {
        let index = 0;
        data.filter((i, ind) => {
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
          <div className="relative sm:h-[200px] xs:h-[100px] max-w-[60%]   xs:flex">
            {" "}
            <Image
              onClick={navigateTo}
              className="object-cover rounded-[1rem] object-top "
              fill
              src={item.image?.trim() ? item.image : "/assets/no_image.webp"}
              alt={item.name || item.title}
            />
          </div>
        </figure>
        <div className="card-body pb-[15%]">
          <div className="text-white pt-[3%] w-[90%] font-[Space_Grotesk] font-medium truncate">
            {item.name || item.title}
          </div>
        </div>
      </div>
    </>
  );
}
