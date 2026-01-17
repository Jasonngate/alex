import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* ---------------------------------
   Cursor Glow Interaction
   (Safe + lightweight)
---------------------------------- */
document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".cursor-glow");
  if (!glow) return;

  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

/* Performance (optional) */
reportWebVitals();
