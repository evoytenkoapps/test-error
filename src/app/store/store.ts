export interface MyData<T> {
  data: T;
  status: MyStatus;
}

export enum MyStatus {
  PENDING = "PENDING",
  LOADING = "LOADING",
  LOADED = "LOADED",
  FAILED = "FAILED",
  CANCEL = "CANCEL",
  SENDING = "SENDING",
  SENDED = "SENDED"
}

export interface MyDataState {
  [id: number]: { status: MyStatus };
}

export interface AppStore {
  data: MyDataState;
}
