import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import { routes } from "./routes";
import "./index.css";

const App: React.FC = () => (
  <HashRouter>
    {routes.map(({ path, component }) => (
      <Route key={path} path={path} component={component} />
    ))}
    <div styleName="testClass">
      Your create-react-lite application is ready.
    </div>
  </HashRouter>
);

ReactDOM.render(<App />, document.querySelector("#root"));
