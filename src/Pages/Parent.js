import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";
import GrandChild from "./GrandChild";

const Parent = () => {
    const {count, setCount} = useContext(COUNTER_CONTEXT);
  return (
    <div className="App my-32">
    <Child/>
      <h2 className="text-2xl">Parent- {count}</h2>
      <button
        className="btn btn-warning mr-2"
        onClick={() => setCount((prvState) => prvState-1)}
      >
        Decrise
      </button>
      <button
        className="btn btn-error"
        onClick={() => setCount((prvState) => prvState + 1)}
      >
        Increase
      </button>
      <GrandChild/>
    </div>
  );
};

export default Parent;
