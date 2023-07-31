import "./App.css";
import React, { useState } from "react";

const backgroundColors = [
  "#E57373",
  "#BA68C8",
  "#64B5F6",
  "#FFD54F",
  "#81C784",
  "#FF8A65",
  "#F06292",
  "#7986CB",
  "#4DB6AC",
  "#FFB74D",
  "#A1887F",
  "#90A4AE",
  "#FFAB91",
  "#9575CD",
  "#4DD0E1",
  "#FFCC80",
  "#AED581",
  "#DCE775",
  "#BCAAA4",
  "#E1BEE7",
];
function App() {
  const [selectedColor, setSelectedColor] = useState(0);
  const handleChangeColor = () => {
    const nextColor = (selectedColor + 1) % selectedColor.length;
    setSelectedColor(nextColor);
  };

  return (
    <div
      className="grid place-items-center w-full h-[100vh]"
      style={{ backgroundColor: backgroundColors[selectedColor] }}
    >
      <div className="w-1/2 flex flex-col items-center gap-3">
        <div className="flex flex-col w-full p-10 bg-white rounded-md">
          <button onClick={handleChangeColor}>New</button>
        </div>
        <p className="text-center text-white font-normal text-lg">
          By Sudhanshu
        </p>
      </div>
    </div>
  );
}

export default App;
