import { AppStore, MyDataState, MyStatus } from "./store";
import { SendData } from "./actions";

export function mainReducer(
  state: AppStore = { data: {} },
  action: SendData
): AppStore {
  switch (action.type) {
    case "SEND_DATA":
      state.data[action.payload] = { status: MyStatus.SENDING };
      return state;
      break;
    default:
      return state;
  }
}
