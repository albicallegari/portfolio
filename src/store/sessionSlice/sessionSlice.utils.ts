import { KEY_PREFIX } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistConfig } from './sessionSlice.models';
export const serialize = <T>(inboundState: T): string => JSON.stringify(inboundState);
export const deserialize = <T>(outboundState: string): T => JSON.parse(outboundState);
export const SESSION_STORAGE_KEY = 'CALLE_SESSION_DATA';
export { KEY_PREFIX, storage };

// This seems somehow hacky, because
// - serialize option is only a boolean but a function also is accepted
// - deserialize option works the same as serialize but is undocumented
// - keyPrefix is about to be removed, but we need it to perform change
export const baseConfig: PersistConfig = {
  storage,
  serialize,
  deserialize,
  keyPrefix: KEY_PREFIX,
  key: SESSION_STORAGE_KEY,
};
