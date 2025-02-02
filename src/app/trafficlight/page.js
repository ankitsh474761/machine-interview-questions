"use client";
import React, { useEffect, useState } from "react";
import styles from  "./traffic.module.css";
const TrafficLight = () => {
  const [color, setColor] = useState(["red", "green", "yellow"]);
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIsActive((prev) => (prev + 1) % color.length);
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      {color?.map((_, i) => (
        <div
          className={`${styles.circleContainer} ${
            i === isActive ? styles[color[isActive]] : "gray"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default TrafficLight;

// here index of map will be used to differ each element
