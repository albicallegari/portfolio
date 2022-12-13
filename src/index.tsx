import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import './styles/index.scss';

const Home = lazy(() => import("./containers/Home/Home"));
const BubbleChart = lazy(() => import("./containers/BubbleChart/BubbleChart"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.REACT_APP_WEB_BASE_URL || "/"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bubble-chart" element={<BubbleChart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
