import React, { useState } from "react";

export const RandomColorGenerator = () => {
  const [clr, setClr] = useState("#831818"); // Initial color
  const [hex, setHex] = useState(true); // State to toggle between HEX and RGB

  // Function to generate a random HEX color
  const generateHexColor = () => {
    let temp = "#";
    for (let i = 0; i < 6; i++) {
      const randomHex = Math.floor(Math.random() * 16).toString(16); // Generate hex digit (0-9, a-f)
      temp += randomHex;
    }
    setClr(temp);
  };

  // Function to generate a random RGB color
  const generateRGBColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const temp = `rgb(${r}, ${g}, ${b})`;
    setClr(temp);
  };

  // Switch to HEX mode and generate a new HEX color
  const selectHex = () => {
    setHex(true);
    generateHexColor();
  };

  // Switch to RGB mode and generate a new RGB color
  const selectRGB = () => {
    setHex(false);
    generateRGBColor();
  };

  return (
    <div style={{ backgroundColor: clr }} className="min-h-screen text-white">
      <div className="text-center p-5 text-2xl font-bold">
        Current Color: {clr}
      </div>
      <div className="text-center">
        <button
          onClick={hex ? generateHexColor : generateRGBColor}
          className="bg-black cursor-pointer text-white p-5 m-5 border-2 rounded-xl"
        >
          Generate Random Color
        </button>
      </div>
      <div className="m-5 p-5 flex flex-row gap-4 justify-center">
        <button
          onClick={selectHex}
          className={`cursor-pointer text-white p-5 m-5 border-2 rounded-xl ${
            hex ? "bg-green-600" : "bg-black"
          }`}
        >
          Generate HEX Color
        </button>
        <button
          onClick={selectRGB}
          className={`cursor-pointer text-white p-5 m-5 border-2 rounded-xl ${
            !hex ? "bg-green-600" : "bg-black"
          }`}
        >
          Generate RGB Color
        </button>
      </div>
    </div>
  );
};
