import { AppStore } from './store';

export const selectIsConnected = (state: any): boolean => {
  console.log('selectIsConnected', state.data.isConnected);
  return state.data.isConnected;
};
