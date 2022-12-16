import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import "./styles/index.scss";

const Home = lazy(() => import("./containers/Home/Home"));
const BubbleChart = lazy(() => import("./containers/BubbleChart/BubbleChart"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.REACT_APP_WEB_BASE_URL || "/"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/bubble-chart"
            element={
              <Suspense>
                <BubbleChart />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
