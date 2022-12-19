import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import "./styles/index.scss";

const Home = lazy(() => import("./containers/Home/Home"));
const AboutAlberto = lazy(
  () => import("./containers/AboutAlberto/AboutAlberto")
);
const Code = lazy(() => import("./containers/Code/Code"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.REACT_APP_WEB_BASE_URL || "/"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-alberto" element={<Suspense><AboutAlberto /></Suspense>} />
          <Route path="/about-code" element={<Suspense><Code /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
