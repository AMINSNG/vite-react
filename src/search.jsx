import React, { useState } from "react";
import "./search.css";
import { Input } from "antd";
import { Button, Flex } from "antd";

function Search() {
  return (
    <div className="main">
      <h1>Rick and Morty - Single Card Search</h1>
      <div className="search">
        <Input placeholder="Basic usage" />
        <Button>Serach</Button>
        <Button>Clear</Button>
      </div>
      <div className="card">
        <div>
          <img src="src/assets/IMG_9074.PNG" alt="img" />
        </div>
        <div className="bio">
          <h1>Rick Sanches</h1>
          <div className="span">
            <span>Alive.</span>
            <span>Human.</span>
            <span>Male</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
            officiiskhrrkhgdf.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Search;
