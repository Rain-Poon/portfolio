import "./skills.css";
import { useState } from "react";
import { initialTabs as tabs } from "./ingredients.ts";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import ResponsiveAppBar from "./navbar";

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const list = [
    "Python",
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
    "ReactJS",
    "Linux",
    "Shell Script",
    "C#",
    "React Native",
    "SQL",
    "Java",
    "Django",
    "Flask",
    "REST API",
    "MongoDB",
    "Swift",
  ];
  const gameDevelopmenetLst = [
    "Unity",
    "Unreal Engine",
    "Blender",
    "ZBrush",
    "Substance Painter",
    "Nomad",
  ];
  const languageList = ["Cantonese", "English", "Mandarin"];

  let square;

  if (selectedTab.label === "Programming") {
    square = (
      <div className="square">
        {list.map((item) => (
          <div
            key={item}
            className="item"
            style={{ marginRight: 20, marginLeft: 20 }}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    );
  } else if (selectedTab.label === "Game Development") {
    square = (
      <div className="square">
        {gameDevelopmenetLst.map((item) => (
          <div
            key={item}
            className="item"
            style={{ marginRight: 20, marginLeft: 20 }}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    );
  } else {
    square = (
      <div className="square">
        {languageList.map((item) => (
          <div
            key={item}
            className="item"
            style={{ marginRight: 20, marginLeft: 20 }}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      
      <div className="skill">
      <ResponsiveAppBar />
        <div className="window">
          <nav>
            <ul>
              {tabs.map((item) => (
                <li
                  key={item.label}
                  className={item === selectedTab ? "selected" : ""}
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.icon} ${item.label}`}
                  {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* {selectedTab ? selectedTab.icon : "😋"} */}
                {square}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
}
