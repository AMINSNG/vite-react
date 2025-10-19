import React, { useState } from "react";
import "./themeswitch.css";
import { Button } from "antd";

function Themeswitch() {
  const [toggle, SetToggle] = useState("light");
  function togglehandler() {
    // if (toggle === "light") {
    //   SetToggle("Darkmode");
    // } else {
    //   SetToggle("light");
    // }
    SetToggle(toggle === "light" ? "dark" : "light")
  }
  return (
    <div className={`themecontainer ${toggle === "light" ? "light" : "dark"}`}>
      <h2>Theme setting</h2>
      <div>
        <span>{toggle === "light" ? "light mode" : "Darkmode"}</span>
        <button onClick={togglehandler}>change</button>
      </div>
    </div>
  );
}

export default Themeswitch;
