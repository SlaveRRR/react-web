import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./providers/contextProvider.tsx";

import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
   onNeedRefresh() {
      if (confirm("New content available. Reload?")) {
         updateSW(true);
      }
   },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
   <BrowserRouter>
      <ContextProvider>
         <App />
      </ContextProvider>
   </BrowserRouter>,
);
