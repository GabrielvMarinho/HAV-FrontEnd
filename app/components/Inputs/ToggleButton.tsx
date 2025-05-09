"use client";

import { useState } from "react";

export default function ToggleButton(props :{isToggled?: boolean, onChange?: any}) {

  const [isOn, setIsOn] = useState(props.isToggled || false);
  console.log(props.onChange);
  return (
    <button type="button"
      onClick={() => {
        setIsOn(!isOn);
        props.onChange();
      }}
      style={{
        width: "75px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        padding: "4px",
        borderRadius: "9999px",
        backgroundColor: isOn ? "#21a14b" : "#f60203",
        transition: "all 0.3s ease-in-out",
        border: "none",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "24px",
          height: "24px",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          transition: "all 0.3s ease-in-out",
          transform: isOn ? "translateX(0)" : "translateX(-43px)",
          marginLeft: "auto",
        }}
      />
    </button>
  );
}
