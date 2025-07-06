import Menu from "@/components/Menu/Menu";
import About from "./about/page";
import Planets from "./planets/page";
import Films from "./films/page";
import SmoothWrapper from "@/components/Menu/SmoothScroll/SmoothScroll";
export default function Home() {
  return (
    <>
      <SmoothWrapper>
        <Menu></Menu>
      </SmoothWrapper>
    </>
  );
}
