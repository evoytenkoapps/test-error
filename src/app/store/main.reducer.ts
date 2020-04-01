import { AppStore, MyDataState, MyStatus } from './store';
import { CHANGE_SOCKET, SendData } from './actions';

export function mainReducer(
  state: AppStore = { data: {}, isConnected: true },
  action: any
): AppStore {
  switch (action.type) {
    case 'SEND_DATA':
      state.data[action.payload] = { status: MyStatus.SENDING };
      return state;
      break;
    case 'CHANGE_SOCKET':
      state.isConnected = !state.isConnected;
      return state;
      break;
    default:
      return state;
  }
}
