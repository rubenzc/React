import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

ReactDOM.render(<App />, document.getElementById("app"));

const Index = () => {
  return (
    <div className="full-screen">
      <div>
        <h1>
          React Page {" "}
        </h1>
        <br />
        <a
          className="button-line"
          href="https://github.com/deityhub"
          target="_blank"
        >
          Know more
        </a>
      </div>
    </div>
  );
};

export default Index;