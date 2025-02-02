'use client';
import React, { useState } from "react";

import data from "./fileExplorer.json";

const FileExplorer = () => {
  return (
    <div style={{ padding: "10rem" }}>
      <File data={data} />
    </div>
  );
};

export default FileExplorer;

const File = ({ data }) => {
  const [showChildren, setShowChildren] = useState(false);
  // if we have a folder and it also contains children then we need to show open folder
  // which denotes that it contains children also
  return (
    <>
      <div
        className="border-2 border-l-slate-900 pl-10 cursor-pointer m-5"
        key={Date.now()}
      >
        <h5 className="" onClick={() => setShowChildren(!showChildren)}>
          {data?.type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
        </h5>
        {
          <span onClick={() => setShowChildren(!showChildren)}>
            {data?.name}
          </span>
        }

        {showChildren &&
          data?.children?.map((ele, i) => (
            <>
              <File data={ele} />
            </>
          ))}
      </div>
    </>
  );
};