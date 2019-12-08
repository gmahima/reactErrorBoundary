import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./errorBoundary";

import "./styles.css";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Child />
      </div>
    </ErrorBoundary>
  );
}
class Child {
  render() {}
} //error causing child
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
