import useGlobalLoader from "../../hooks/useGlobalLoader/useGlobalLoader";
import { AxiosInterceptorProps } from "./AxiosInterceptor.models";
import axios from "axios";

const AxiosInterceptor = ({
  store,
  children,
}: AxiosInterceptorProps): JSX.Element => {
  const { showLoader, hideLoader } = useGlobalLoader();

  // Add a request interceptor
  axios.interceptors.request.use(
    (config) => {
      const token = undefined; // get it from cookie or LocalStorage
      if (token && config.headers) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      showLoader();
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      hideLoader();
      return response;
    },
    (error) => {
    //   const originalRequest = error.config;

    //   if (
    //     error.response.status === 401 &&
    //     originalRequest.url === "http://127.0.0.1:3000/v1/auth/token"
    //   ) {
    //     router.push("/login");
    //     return Promise.reject(error);
    //   }

    //   if (error.response.status === 401 && !originalRequest._retry) {
    //     originalRequest._retry = true;
    //     const refreshToken = localStorageService.getRefreshToken();
    //     return axios
    //       .post("/auth/token", {
    //         refresh_token: refreshToken,
    //       })
    //       .then((res) => {
    //         if (res.status === 201) {
    //           localStorageService.setToken(res.data);
    //           axios.defaults.headers.common["Authorization"] =
    //             "Bearer " + localStorageService.getAccessToken();
    //           return axios(originalRequest);
    //         }
    //       });
    //   }
      return Promise.reject(error);
    }
  );
  return children as JSX.Element;
};

export default AxiosInterceptor;
