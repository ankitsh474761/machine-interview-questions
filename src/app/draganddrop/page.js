"use client";
import { useRef, useState } from "react";

export default function DragndDrop() {
  const [data, setData] = useState(dataJson);
  const dragItem = useRef();
  const dragContainer = useRef();

  const handleDragStart = (e, item, container) => {
    dragItem.current = item;
    dragContainer.current = container;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetContainer) => {
    // i need to remember reference of the node which node is moved nd from which container
    // that will be used when it will be placed in another container so that it can be remove from previous container
    //  nd can be placed in new container
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    setData((prev) => {
      const newData = { ...prev };
      newData[sourceContainer] = newData[sourceContainer].filter(
        (i) => i !== item
      );
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
  };
  return (
    <div className="flex justify-around mt-4">
      {Object.keys(data).map((container, index) => {
        return (
          <div
            key={index}
            onDrop={(e) => handleDrop(e, container)}
            //  by default html elements don't allow another elements to placed over them
            // to prevent this functionality we need to prevent the default behaviour
            onDragOver={handleDragOver}
            style={{
              background: "#f0f0f0",
              padding: "1rem",
              width: 250,
              minHeight: 300,
            }}
          >
            <h2>{container}</h2>
            {data[container].map((item, idx) => {
              return (
                <div
                  key={idx}
                  onDragStart={(e) => handleDragStart(e, item, container)}
                  onDragEnd={handleDragEnd}
                  draggable
                  style={{
                    userSelect: "none",
                    padding: 16,
                    margin: "0 0 8px 0",
                    backgroundColor: "white",
                    cursor: "move",
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}


export const dataJson = {
  "Todo": [
    "desing ui mockups",
    "setup mockup project repository",
    "Write unit test",
    "integrate payment gateway",
  ],
  "In Progress": ["Develop Authentication Flow", "Implement Responsive Design"],
  "Completed": [
    "Setup CI/CD pipeline",
    "Conduct code reviews",
    "Deploy initial version to staging",
  ],
};
