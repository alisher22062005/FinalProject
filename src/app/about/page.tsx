"use client";
import Header from "@/components/Menu/Header/Header";
import img1 from "../../../public/assets/star_wars_about.webp";
import SmoothWrapper from "@/components/Menu/SmoothScroll/SmoothScroll";
import { useState } from "react";
import { useEffect } from "react";
export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200); // simulate delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }
  return (
    <>
      <SmoothWrapper>
        {" "}
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.6), rgba(0,0,0,1)), url('/assets/star_wars_about.webp')`,
          }}
          className=" h-[70vh] w-[100%] bg-center bg-cover overflow:hidden animate-my-float flex items-center justify-center "
        >
          {/* <Header></Header> */}

          <Header></Header>
          <div className="text-white sm:text-[3rem] xs:text-[2rem] font-bold">
            What is Star Wars?
          </div>
        </div>
        <div className=" text-white pt-[10%] flex items-center justify-center w-full pb-[10%]">
          <div className="sm:max-w-[50%] xs:max-w-[80%] flex flex-col gap-[1.5rem] text-[#9CABBA] text-[1.2rem]">
            {" "}
            <div>
              <span className="font-black text-white">Star Wars </span>
              is one of the most iconic and influential science fiction
              franchises in cinematic history. Created by George Lucas, it
              debuted in 1977 with Episode IV: A New Hope. The story is set in a
              galaxy far, far away and explores the conflict between the Jedi
              and the Sith. Central to the saga is the battle between the light
              and dark sides of the Force. The Force is a mystical energy that
              gives Jedi and Sith their supernatural powers.
            </div>
            <div>
              The original trilogy follows the journey of Luke Skywalker, a farm
              boy who becomes a Jedi Knight. Alongside Princess Leia, Han Solo,
              and others, he fights against the evil Galactic Empire. Darth
              Vader, once a Jedi named Anakin Skywalker, becomes one of the most
              feared villains in film history. The prequel trilogy explores
              Anakin’s tragic fall to the dark side. Meanwhile, the sequel
              trilogy focuses on Rey, a new Force-sensitive hero, and the rise
              of the First Order. Beyond the films, Star Wars has expanded into
              books, TV shows, comics, and video games. Popular series like The
              Mandalorian, Obi-Wan Kenobi, and The Clone Wars have deepened the
              universe. Iconic characters such as Yoda, R2-D2, and Chewbacca
              have become beloved by fans worldwide. The franchise blends
              science fiction with mythology, politics, and personal drama.
              Lightsaber duels, space battles, and epic storylines define its
              legacy.
            </div>
            <div>
              John Williams’ musical score is also a cornerstone of its success,
              instantly recognizable to many. Star Wars explores timeless themes
              like redemption, identity, and hope. Its cultural impact spans
              generations and continues to grow. The phrase “May the Force be
              with you” has become a part of popular culture. With upcoming
              projects and a dedicated fanbase, Star Wars remains as relevant
              today as it was decades ago.
            </div>
          </div>
        </div>
      </SmoothWrapper>
    </>
  );
}
