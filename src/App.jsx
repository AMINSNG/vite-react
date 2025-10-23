import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Training from "./training";
// import Themeswitch from "./themeswitch";
// import Fontsize from "./fontsize";
import Search from "./search";

function App() {
  const [count, setCount] = useState(0);

  const handleOnClick = (nmber) => {
    setCount((count) => count + nmber);
  };

  return (
    <div>
      <Search />
    </div>
    // <div>
    //   <Fontsize  counter={10}   />
    // </div>
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     {/* <button onClick={() => setCount((count) => count + 1)}> */}
    //     {/* <button onClick={handleOnClick}> */}
    //     <button onClick={()=>handleOnClick(1)}>

    //       count is {count}
    //     </button>
    //     <button style={{marginLeft:4}}  onClick={() => setCount(0)} >
    //       reset
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     salam
    //   </p>
    // </>
  );
}

export default App;
