import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import { App } from "./App";

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
