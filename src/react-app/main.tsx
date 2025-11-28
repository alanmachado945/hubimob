import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/react-app/styles/index.css";
import App from "@/react-app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
