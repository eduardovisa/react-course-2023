import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return <h2>Mi primer componente</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
