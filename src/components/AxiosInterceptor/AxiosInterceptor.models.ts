import { Store } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";

export type AxiosInterceptorProps = PropsWithChildren<{
    store: Store;
  }>;