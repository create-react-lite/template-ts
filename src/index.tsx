import * as React from "react";
import * as ReactDOM from "react-dom";
import Counter from "./Components/Counter/Counter";
import "./index.css";

const App = () => {
  return (
    <>
      <div styleName="best">Your create-react-lite application is ready.</div>
      <Counter />
      <p>Mode: {process.env.NODE_ENV}</p>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
