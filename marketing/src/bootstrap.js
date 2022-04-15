import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
  ReactDOM.render(<h1>Hi There!</h1>, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_marketing_dev_root");
  if (el) mount(el);
}

export { mount };
