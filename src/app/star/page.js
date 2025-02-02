"use client";
import React, { useState } from "react";
import styles from "./star.module.css";

const StarRating = () => {
  return (
    <div>
      <Star starCount={10} />
    </div>
  );
};

export default StarRating;

const Star = ({ starCount = 5 }) => {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  return (
    <>
      <div>
        {/* {
                new Array(starCount).fill(0).map((ele,i)=>(
                    <span key={i} style={{ fontSize: "3rem" }}>&#9733;</span>
                ))
            } */}
        {[...Array(starCount)].map((_, i) => {
          return (
            <span
              key={i}
              style={{ fontSize: "3rem" }}
              onClick={() => setStarValue(i+1)}
              onMouseEnter={()=>setHoverValue(i+1)}
              onMouseLeave={()=>setHoverValue(0)}
              className={`${styles.star} ${( hoverValue == 0 &&  i < starValue)|| i < hoverValue ? `${styles.gold}` : ""}`}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </>
  );
};
