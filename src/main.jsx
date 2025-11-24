import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/300.css";
import './style.css'

import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </StrictMode>,
);
