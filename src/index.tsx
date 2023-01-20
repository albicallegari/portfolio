import AxiosInterceptor from "./components/AxiosInterceptor/AxiosInterceptor";
import Bloodsucker from "./containers/Bloodsucker/Bloodsucker";
import { Routes, Route, HashRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./styles/index.scss";
import store from "./store";

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
      <HashRouter>
        <AxiosInterceptor store={store}>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/about-alberto"
              element={
                <Suspense>
                  <AboutAlberto />
                </Suspense>
              }
            />
            <Route
              path="/about-code"
              element={
                <Suspense>
                  <Code />
                </Suspense>
              }
            />
            <Route
              path="/bloodsucker"
              element={
                <Suspense>
                  <Bloodsucker />
                </Suspense>
              }
            />
          </Routes>
        </AxiosInterceptor>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
