"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/toolkit/store";
import { useEffect } from "react";
import { fetchFilms } from "@/toolkit/slices/Film";
import { useSelector } from "react-redux";
import { RootState } from "@/toolkit/store";
import Image from "next/image";
import Header from "@/components/Menu/Header/Header";
import Item from "@/components/shared/Item";
import SmoothWrapper from "@/components/Menu/SmoothScroll/SmoothScroll";
export default function Films() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.films.status);
  const data = useSelector((state: RootState) => state.films.films);
  const arrayFilms = data.slice(0, 6);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200); // simulate delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchFilms());
    }
  }, [dispatch, status]);

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
        <div className="relative h-[70vh] bg-cover bg-center overflow:hidden animate-my-float flex justify-center items-center">
          <Image
            src="/assets/star_wars_films.jpg"
            alt="Image"
            fill
            className="object-cover object-center "
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t  from-black/100 to-black/55"></div>
          <Header></Header>
          <div className="text-white sm:text-[3rem] xs:text-[2rem] font-bold z-10">
            Films & TV Shows
          </div>
        </div>
        <div className="pt-[15%] flex flex-wrap gap-[10%] items-center justify-center w-full ml-[5%] pb-[5%] ">
          {arrayFilms.map((film, index) => {
            return <Item key={index} item={film} data={arrayFilms}></Item>;
          })}
        </div>
      </SmoothWrapper>
    </>
  );
}
