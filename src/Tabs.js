import React, { useState } from "react";

const tabs = [
  { id: 1, label: "Tab 1", content: "Content for Tab 1" },
  { id: 2, label: "Tab 2", content: "Content for Tab 2" },
  { id: 3, label: "Tab 3", content: "Content for Tab 3" },
];

export default function TabInterface() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul style={{display: "flex"}}>
        {tabs.map((tab) => (
          <li key={tab.id} onClick={() => handleClick(tab)} style={{marginRight: "10px", cursor: "pointer", listStyle: "none"}}>
            {tab.label}
          </li>
        ))}
      </ul>
      <div>{activeTab.content}</div>
    </div>
  );
}
