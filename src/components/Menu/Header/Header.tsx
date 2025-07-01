import "../../../styles/Menu.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function Header() {
  return (
    <div className=" fixed top-1  ml-[10%] w-full  flex  h-[13vh] gap-[10%]  text-[1.2rem]  ">
      <div className="w-[20%] flex items-center">
        {" "}
        <img
          className="object-cover object-center h-[100%] img-color"
          src="/assets/star_wars.png"
        ></img>
      </div>

      <div className="flex  text-white w-[30%] gap-[8%] items-center ">
        <div>About</div>
        <div>Films</div>
        <div>Planets</div>
        <div>Characters</div>
      </div>

      <div className="text-white flex items-center w-[20%] ">
        <SearchRoundedIcon fontSize="large" />
      </div>
    </div>
  );
}
