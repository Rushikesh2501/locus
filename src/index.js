import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Optional: Restore correct path after redirect from 404.html
const redirectPath = sessionStorage.redirect;
if (redirectPath) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirectPath);
}

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);
