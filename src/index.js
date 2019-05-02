import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
