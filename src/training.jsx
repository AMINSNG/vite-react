import React, { useEffect, useState } from "react";
import { AiFillApple } from "react-icons/ai";

function Training() {
  const users = ["amin", "ali", "mohammad"];
  const [index, Setindex] = useState(0);
  function createrandom() {
    const randomnumber = Math.floor(Math.random() * users.length);
    console.log(randomnumber);
    Setindex(randomnumber);
  }
  return (
    <div className={users[index] === "ali" ? "activname" : "notactive"}>
      <div>{users[index]}</div>
      <button onClick={createrandom}>
        show random text <AiFillApple/>
      </button>
    </div>
  );
}

export default Training;
