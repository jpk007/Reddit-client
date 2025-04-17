import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "virtual:uno.css";
import { App } from "./views/app/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
