import "./App.css";
import React, { useState } from "react";

function App() {
  const colors = [
    "#F8B195", // Sandy Brown
    "#F67280", // Light Coral
    "#C06C84", // Thistle
    "#6C5B7B", // Royal Purple
    "#355C7D", // Dark Slate Blue
    "#99B898", // Opal
    "#FECEAB", // Pale Orange
    "#FF847C", // Salmon Pink
    "#E84A5F", // Watermelon
    "#2A363B", // Gunmetal
    "#F9EBEA", // Misty Rose
    "#D4E6F1", // Alice Blue
    "#ABB7B7", // Platinum
    "#6C757D", // Slate Gray
    "#F2D7EE", // Lavender Pink
    "#FFD9C4", // Peach Puff
    "#B4CCB9", // Light Moss Green
    "#F3E0E0", // Almond
    "#5E6472", // Raisin Black
    "#AAB2B4"  // Pastel Gray
  ];

  const [bgColorIndex, setBgColorIndex] = useState(0);

  const changeColor = () => {
    const nextColorIndex = (bgColorIndex + 1) % colors.length;
    setBgColorIndex(nextColorIndex);
  };

  return (
    <div className="grid place-items-center w-full h-[100vh]" style={{ backgroundColor: colors[bgColorIndex], transition: "all 0.5s" }}>
      <div className="w-1/2 flex flex-col items-center gap-4">
        <div className="bg-white w-full p-2 rounded-md shadow-md flex flex-col">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row w-1/5 justify-between">
              <button onClick={changeColor} className="p-4 rounded-md w-1/8 text-xl font-semibold text-white" style={{ backgroundColor: colors[bgColorIndex], transition: "all 0.5s" }}>New</button>
              <button onClick={changeColor} className="p-4 rounded-md w-1/8 text-xl font-semibold text-white" style={{ backgroundColor: colors[bgColorIndex], transition: "all 0.5s" }}>New</button>
            </div>
            <button onClick={changeColor} className="p-4 rounded-md w-1/5 text-xl font-semibold text-white" style={{ backgroundColor: colors[bgColorIndex], transition: "all 0.5s" }}>New</button>
          </div>
        </div>
        <p className="text-white text-lg font-semibold">By Sudhanshu</p>
      </div>
    </div>
  );
}

export default App;
