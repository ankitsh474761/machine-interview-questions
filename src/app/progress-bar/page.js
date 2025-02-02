'use client';
import React, { useEffect, useState } from "react";
import styles from  "./progressbar.module.css";
const ProgessBar = () => {
  const [translateVal, setTranslateVal] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
        setTranslateVal((prev) => {
          if (prev < 100) return prev + 10;
        });
        if (translateVal === 100) clearInterval(timer);
      
      return translateVal;
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const handleRunClick = () => {
    setIsRunning(!isRunning);
    setTranslateVal(0);
  };

  return (
    <div className={styles.progress}>
      {isRunning && (
        <div className={styles.progressContainer}>
          <div
            className={styles.progressItem}
            style={{ transform: `translate(${translateVal - 100}%)` }}
          ></div>
        </div>
      )}

      <button onClick={handleRunClick}>run</button>
    </div>
  );
};

export default ProgessBar;
