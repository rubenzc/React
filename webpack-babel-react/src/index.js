// Import resources
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// Render main app
ReactDOM.render(<App />, document.getElementById("app"));

const Index = () => {
  return (
    <h1>Welcome!</h1>
  );
};

export default Index;