import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  let [clr, setclr] = useState("white");
  let [text, settext] = useState("black");
  return (
    <>
      <div className="w-50 mx-auto bordar border-secondary round-4 d-flex flex-column">
        <h1 className="text center text-warning bg-dark p-3 ">
          Usestate Hook in Functional Component
        </h1>
        <h1 className="text center">Counter:{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            console.log("Count has Increase");
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
              console.log("Count is Decrease");
            }
          }}
        >
          Decrease
        </button>
      </div>
      <br></br>

      <div style={{ backgroundColor: clr, color: text }}>
        <h1>Hello</h1>
        {/* <button onClick={() => setclr("red")}>Red</button> */}
        <button onClick={() => [setclr("lightblue"), settext("black")]}>
          Light Theme
        </button>
        <button onClick={() => [setclr("darkblue"), settext("white")]}>
          Dark Theme
        </button>
      </div>
    </>
  );
};

export default UseStateHook;
