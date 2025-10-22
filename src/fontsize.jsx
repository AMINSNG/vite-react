import React, { useState } from "react";
import "./fontsize.css";

function fontsize() {
    function fontresize(){


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
        <button >Larger</button>
        <button>Smaller</button>
        <span>Size: <span>20px</span> </span>
      </div>
      <div><p>this is sample click the button to change my size</p></div>
      <div> <a href="">reset to 16px</a></div>
    </div>
  );
}
