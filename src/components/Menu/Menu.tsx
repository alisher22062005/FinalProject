"use client";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "../../styles/Menu.css";
import Header from "./Header/Header";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Seacrh from "./Search/Search";
import { useEffect } from "react";
export default function Menu() {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.6), rgba(0,0,0,1)),  url('/assets/red.jpg')`,
        }}
        className="w-full h-screen bg-center  main-gradient bg-cover animate-my-float  "
      >
        <Header></Header>
      </div>

      <Seacrh></Seacrh>
    </>
  );
}
