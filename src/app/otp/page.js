"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from  "./otp.module.css";

const Otp = () => {
  return (
    <div>
      <OtpInput inputCount={5} />
    </div>
  );
};

export default Otp;

const OtpInput = ({ inputCount = 3 }) => {
  const [otpFields, setOtpFields] = useState([...Array(inputCount).fill("")]);
  const ref = useRef([]);
  const handleOtpValueKeyDown = (e, index) => {
    const key = e.key;

    if(index > 0 && key === "ArrowLeft")
        ref.current[index - 1].focus();

    if(index + 1 < otpFields.length && key === "ArrowRight")
      ref.current[index + 1].focus();

    const otpFieldsCopy = [...otpFields];

    if (key === "Backspace") {
    //   console.log("back");
      otpFieldsCopy[index] = "";
      setOtpFields(otpFieldsCopy);
      if (index > 0) ref.current[index - 1].focus();
      return;
    }

    if (isNaN(key)) return;

    //     Immutability and React's State Management
    // React uses the concept of immutability to track changes in state and re-render components efficiently. When you mutate (modify) the state directly, React may not be able to detect the change and trigger a re-render. This is because React optimizes rendering by comparing previous and new state values (via a process called "reconciliation"). If you modify the state directly, React cannot detect the change because the reference to the state object has not changed.

    otpFieldsCopy[index] = key;
    if (index + 1 < otpFields.length) 
        ref.current[index + 1].focus();
    setOtpFields(otpFieldsCopy);
  };

  useEffect(()=>{
    ref.current[0].focus();
  },[])
  return (
    <>
      <div className={styles.container}>
        {otpFields?.map((value, index) => (
          <>
            <input
             className={styles.otpInput}
              ref={(currentInput) => (ref.current[index] = currentInput)}
              key={index}
              type="text"
              name="otp"
              value={value}
              onKeyDown={(e) => handleOtpValueKeyDown(e, index)}
            />
          </>
        ))}
      </div>
    </>
  );
};
