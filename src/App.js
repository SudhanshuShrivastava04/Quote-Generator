import "./App.css";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";

function tweetQuote(quote){
  const tweetText = encodeURIComponent(quote);
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
  window.open(tweetUrl, "_blank");
}
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
  const Quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "The only person you are destined to become is the person you decide to be.",
    "Don't watch the clock; do what it does. Keep going.",
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "The best way to predict the future is to create it."
  ];
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const [quote, setQuote] = useState(0);
  const change = () => {
    const nextQuoteIndex = (quote + 1) % Quotes.length;
    setQuote(nextQuoteIndex);
    const nextColorIndex = (bgColorIndex + 1) % colors.length;
    setBgColorIndex(nextColorIndex);
  };

  return (
    <div className="grid place-items-center w-full h-[100vh]" style={{ background: colors[bgColorIndex], transition: "all 0.8s" }}>
      <div className="w-1/2 flex flex-col items-center gap-4">
        <div className="bg-white w-full p-2 rounded-md shadow-md flex flex-col gap-10 transition-all duration-700">
          <div className="w-full mt-5 flex justify-center">
            <span className="inline w-fit" style={{ color: colors[bgColorIndex], transition: "all 0.8s" }}><ImQuotesLeft /></span>
            <h1 className="text-3xl w-fit inline font-bold font-serif text-center" style={{ color: colors[bgColorIndex], transition: "all 0.8s" }}>{Quotes[quote]}</h1>
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row w-1/6 justify-between">
              <a href="https://github.com/SudhanshuShrivastava04" className="p-2 rounded-md w-1/8 text-xl font-semibold text-white" style={{ backgroundColor: colors[bgColorIndex], transition: "all 0.8s" }}>
                <AiFillGithub className="w-full h-full" />
              </a>
              <button onClick={() => tweetQuote(Quotes[quote])} className="p-4 rounded-md w-1/8 text-xl font-semibold text-white" style={{ backgroundColor: colors[bgColorIndex], transition: "all 0.8s" }}>
                <BsTwitter className="w-full h-full" />
              </button>
            </div>
            <button onClick={change} className="p-4 rounded-md w-1/5 text-xl font-semibold text-white" style={{ backgroundColor: colors[bgColorIndex], transition: "all 0.8s" }}>New</button>
          </div>
        </div>
        <p className="text-white text-lg font-semibold">By Sudhanshu</p>
      </div>
    </div>
  );
}

export default App;
