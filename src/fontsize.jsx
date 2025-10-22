import React, { useState } from "react";
import "./fontsize.css";

function fontsize({counter = 2,color }) {

  const [Size, setSize] = useState(16);
  function handledecreace() {
    if (Size < 12) {
      alert("size can't be decrease !");
      return;
    }
    setSize((previousSize) => previousSize - counter);
  }
  function handleincreace() {
    if (Size > 38) {
      alert("size can't be increase !");
      return;
    }
    setSize(Size + counter);
  }
  function handlereset() {
    setSize(16);
  }
  return (
    <div classname="main">
      <div>
        <h1>Text size Controler</h1>
        <span>
          click larger to increace the size or smaller to decreace it range
          10-48px
        </span>
      </div>
      <div>
        <button onClick={handledecreace}>Smaller</button>
        <button onClick={handleincreace}>Larger</button>
        <span>
          Size: <span>{Size}px</span>{" "}
        </span>
      </div>
      <div>
        <p style={{ fontSize: Size }}>
          this is sample click the button to change my size
        </p>
      </div>
      <div className="reset-button">
        <button onClick={handlereset}>reset to 16px</button>
      </div>
    </div>
  );
}
export default fontsize;
