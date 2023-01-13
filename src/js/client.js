import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./pages/App";

// React v18でのレンダリング
const container = document.getElementById('app');
// const root = ReactDOM.createRoot(container)
const root = createRoot(container);

root.render(
  <App/>
);
