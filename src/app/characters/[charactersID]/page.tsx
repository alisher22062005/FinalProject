"use client";
import ItemDescribe from "@/components/shared/ItemDescribe";
// import { fetchPlanets, PlanetType } from "@/toolkit/slices/Planet";
import { AppDispatch, RootState } from "@/toolkit/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { notFound } from "next/navigation";
import { fetchCharacters } from "@/toolkit/slices/Character";
import { useParams } from "next/navigation";
import React from "react";

export default function CharactersID({}) {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams(); // ✅ Get params from hook
  const slug = Number(params.charactersID);
  const status = useSelector((state: RootState) => state.characters.status);
  const fetchedData = useSelector(
    (state: RootState) => state.characters.characters
  );

  useEffect(() => {
    if (status == "idle") {
      console.log("Idle");
      dispatch(fetchCharacters());
    }
  }, [status, dispatch]);

  if (slug > 88 || slug <= 0 || isNaN(slug)) notFound();

  const id = useSelector((state: RootState) => state.characters.id);

  console.log("FetchedData", fetchedData);
  console.log("Slug: ", slug);

  return (
    <>
      <ItemDescribe
        fetchedData={fetchedData}
        id={id}
        slug={slug}
      ></ItemDescribe>
    </>
  );
}
