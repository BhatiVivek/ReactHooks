import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
import NewApp from "./ReducerWithContext/index";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <NewApp />
  </StrictMode>
);
