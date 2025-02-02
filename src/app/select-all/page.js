'use client'
import React, { useState } from "react";

const InterviewQuestion2 = () => {
  const [item, setItems] = useState([
    {
      id: 1,
      name: "Item 1",
      isActive: false,
    },
    {
      id: 2,
      name: "Item 2",
      isActive: false,
    },
    {
      id: 3,
      name: "Item 3",
      isActive: false,
    },
    {
      id: 4,
      name: "Item 4",
      isActive: false,
    },
  ]);

  const handleClick = (checked) => {
    const updatedItems = item?.map((ele) => {
      return { ...ele, isActive: checked };
    });
    setItems(updatedItems);
  };

  const handleItemClick = (id) => {
    const updatedItems = item?.map((ele) =>
      ele?.id === id ? { ...ele, isActive: !ele?.isActive } : ele
    );
    setItems(updatedItems);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <label
          htmlFor="selectAll"
          className="inline-flex items-center text-gray-700"
        >
          <input
            id="selectAll"
            type="checkbox"
            name="selectAll"
            onChange={(e) => handleClick(e.target.checked)}
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <span className="ml-2">Select All</span>
        </label>
      </div>

      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {item?.map((ele) => (
            <tr key={ele.id} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2">
                <label
                  htmlFor={`select${ele.id}`}
                  className="flex items-center"
                >
                  <input
                    id={`select${ele.id}`}
                    type="checkbox"
                    name="select"
                    onChange={() => handleItemClick(ele.id)}
                    checked={ele.isActive}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">{ele.name}</span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InterviewQuestion2;
