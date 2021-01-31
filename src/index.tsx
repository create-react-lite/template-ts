import * as React from "react";
import * as ReactDOM from "react-dom";
import Counter from "./Components/Counter/Counter";
import "./index.css";

const App = () => {
  return (
    <>
      <div>Your create-react-lite application is ready.</div>
      <Counter />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
