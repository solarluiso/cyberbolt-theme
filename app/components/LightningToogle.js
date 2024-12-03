"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

const LightningToggle = () => {
  const isGreen = useSelector((state) => state.theme.isGreen);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex justify-center items-center w-screen h-screen ${
        isGreen ? "bg-green-500" : "bg-pink-500"
      }`}
    >
      <button
        className="p-4 text-4xl text-white bg-black rounded-full"
        onClick={() => dispatch(toggleTheme())}
      >
        ⚡
      </button>
    </div>
  );
};

export default LightningToggle;
