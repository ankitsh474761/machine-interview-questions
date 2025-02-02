'use client';
import React, { useState } from 'react'
import styles from  './stepper.module.css';
const Stepper = () => {
    const [active,setActive] = useState(1);

    const handleBack=()=>{
        if(active > 1){
            setActive((prev)=>prev-1);
        }
    }
    const handleNext = ()=>{
        if(active < steps.length){
            setActive((prev)=>prev+1);
        }
    }

  return (
    <div>
      {steps?.map((item, index) => (
        <>
          <div className={styles.stepperContainer}>
            <div
              className={`${styles.stepperNumber} ${
                index  < active ? `${styles.activeNo}` : ""
              }`}
            >
              {index + 1}
              {index < steps?.length - 1 && (
                <div
                  className={`${styles.stepperLine} ${
                    index < active-1 ? `${styles.activeLine}` : ""
                  }`}
                ></div>
              )}
            </div>
            <div className={styles.stepperLabel}>{item?.label}</div>
            <div className={`${styles.stepperContent} `}>
              {index + 1 === active && item?.content}
            </div>
          </div>
        </>
      ))}
      <div className="flex gap-4 ml-10">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Stepper

const steps = [
  {
    label: "Personal Info",
    content: <div>Personal Information Content</div>,
  },
  {
    label: "Account Info",
    content: <div>Account Info Content</div>,
  },
  {
    label: "Payment",
    content: <div>Payment Content</div>,
  },
  {
    label: "Confirmation",
    content: <div>Confirmation Content</div>,
  },
  {
    label: "Review",
    content: <div>Review Content</div>,
  },
];