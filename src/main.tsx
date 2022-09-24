import React from "react";

import { createRoot } from "react-dom/client";

import Router from "./Router";
import "./styles/index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
