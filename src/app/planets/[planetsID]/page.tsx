"use client";
import ItemDescribe from "@/components/shared/ItemDescribe";
import { fetchPlanets } from "@/toolkit/slices/Planet";
import { AppDispatch, RootState } from "@/toolkit/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import React from "react";
export default function PlanetsID() {
  const dispatch = useDispatch<AppDispatch>();
  // const actualParams = React.use(params);
  const param = useParams(); // ✅ Get params from hook
  const slug = Number(param.planetsID);
  const status = useSelector((state: RootState) => state.planets.status);
  const fetchedData = useSelector((state: RootState) => state.planets.planets);

  useEffect(() => {
    if (status == "idle") {
      console.log("Idle");
      dispatch(fetchPlanets());
    }
  }, [status, dispatch]);

  if (slug > 10 || slug <= 0 || isNaN(slug)) notFound();

  const id = useSelector((state: RootState) => state.planets.id);

  console.log("FetchedData", fetchedData);

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
