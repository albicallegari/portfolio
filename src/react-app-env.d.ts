/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly PUBLIC_URL: string;
    }
  }
  
  declare module '*.svg' {
    import * as React from 'react';
  
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  
    const src: string;
    export default src;
  }
  declare module '*variables.scss' {
    const vars: { readonly [key: string]: string };
    export default classes;
  }
  
  declare module '*.riv' {
    const src: string;
    export default src;
  }