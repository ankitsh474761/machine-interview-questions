'use client';
import React, { useState } from "react";

const InterviewQuestion = () => {
  const [items, setItems] = useState([
    { id: 1, type: "box1", isActive: false, title: "my country name is india" },
    {
      id: 2,
      type: "box1",
      isActive: false,
      title: "my country name is australia",
    },
    { id: 3, type: "box1", isActive: false, title: "my country name is sa" },
    { id: 4, type: "box1", isActive: false, title: "my country name is nz" },
    {
      id: 5,
      type: "box1",
      isActive: false,
      title: "my country name is england",
    },
  ]);

  const handleClick = (id) => {
    const updatedItems = items?.map((ele) =>
      ele.id === id ? { ...ele, isActive: !ele.isActive } : ele
    );
    setItems(updatedItems);
  };

  const handleBoxChangeLToR = () => {
    const updatedItems = items?.map((ele) =>
      ele.isActive === true ? { ...ele, type: "box2", isActive: false } : ele
    );
    setItems(updatedItems);
  };

  const handleBoxChangeRToL = () => {
    const updatedItems = items?.map((ele) =>
      ele.isActive === true ? { ...ele, isActive: false, type: "box1" } : ele
    );
    setItems(updatedItems);
  };

  return (
    <div className="flex justify-between p-6">
      <div className="w-1/3 p-4 bg-gray-100">
        {items
          .filter((ele) => ele.type === "box1")
          .map((item) => (
            <div
              key={item.id}
              className="mb-4 p-4 bg-white border rounded-md shadow-md cursor-pointer"
              onClick={() => handleClick(item.id)}
            >
              <h2 className={item.isActive ? "text-blue-500 font-bold" : ""}>
                {item.title}
              </h2>
            </div>
          ))}
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <button
          onClick={handleBoxChangeLToR}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Left to Right
        </button>
        <button
          onClick={handleBoxChangeRToL}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
        >
          Right to Left
        </button>
      </div>
      <div className="w-1/3 p-4 bg-gray-100">
        {items
          .filter((ele) => ele.type === "box2")
          .map((item) => (
            <div
              key={item.id}
              className="mb-4 p-4 bg-white border rounded-md shadow-md cursor-pointer"
              onClick={() => handleClick(item.id)}
            >
              <h2 className={item.isActive ? "text-blue-500 font-bold" : ""}>
                {item.title}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InterviewQuestion;
