'use client'

import React, { useState } from "react";
import styles from  "./toaster.module.css";

const InterviewQuestion5 = () => {
  const [list, setList] = useState([]);

  const handleAdd = (type, msg) => {
    const id = new Date().getTime();
    const newToast = { id, type, msg };
    setList([...list, newToast]);
    setTimeout(() => {
      handleClose(id);
    }, 5000);
  };
  const handleClose = (id) => {
    // const filteredArr = list?.filter((ele,i)=> ele?.id !== id);
    setList((prev) => {
      const filteredArr = prev?.filter((ele, i) => ele?.id !== id);
      return filteredArr;
    });
  };
  return (
    <div className={styles.toastContainer}>
      <div className={styles.toast}>
        {list?.map((toast, i) => (
          <div key={toast.id} className={`${styles.toastItem} ${styles[toast.type]}`}>
            {toast.msg} <span onClick={() => handleClose(toast.id)}>❌</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => handleAdd("success", "Succ Added")}>
          Success Toast
        </button>

        <button onClick={() => handleAdd("info", "Info Added")}>
          Info Toast
        </button>
        <button onClick={() => handleAdd("warning", "Warning Added")}>
          Warning Toast
        </button>

        <button onClick={() => handleAdd("error", "Error Added")}>
          Error Toast
        </button>
      </div>
    </div>
  );
};

export default InterviewQuestion5;
