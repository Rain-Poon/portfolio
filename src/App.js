import React, { useState } from "react";
import "./App.css";
import hand from "./hand.png";
import mars from "./robot_arm.png";
import drone from "./drone.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton } from "@mui/material";
import ResponsiveAppBar from "./navbar";

const images = [
  {
    src: mars,
    text: "Mars",
  },
  {
    src: drone,
    text: "Drone",
  },
  {
    src: hand,
    text: "Hand Sculpting",
  },
];

function App() {
  const [currentImage, setCurrentImage] = useState(images[0].src);

  const handleClick = () => {
    const currentIndex = images.findIndex((image) => image.src === currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex].src);
  };

  return (
    <div className="App">
      <ResponsiveAppBar />
      <div className="image-container">
        <img src={currentImage} alt="full-screen" className="full-screen-image" />
        <div className="overlay">
          <h2 className="text">
            {images.find((image) => image.src === currentImage)?.text}
          </h2>
        </div>
      </div>
      <IconButton aria-label="arrow" size="large" onClick={handleClick}>
        <KeyboardArrowDownIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
}

export default App;
