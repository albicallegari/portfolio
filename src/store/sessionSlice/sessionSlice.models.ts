/* eslint-disable @typescript-eslint/no-explicit-any */
import { PersistConfig as BasePersistConfig } from 'redux-persist';
export interface ThemeSessionState {
  theme: 'dark' | 'light';
  introDisplayed: boolean;
}

export interface PersistConfig extends Omit<BasePersistConfig<ThemeSessionState>, 'serialize'> {
  serialize?: boolean | ((data: unknown) => string);
  deserialize?: boolean | (<T>(outbound: string) => T);
}
