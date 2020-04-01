import { Action } from "@ngrx/store";

export const SEND_DATA = "SEND_DATA";
export const SEND_DATA_COMPLETE = "SEND_DATA_COMPLETE";
export const SEND_DATA_ERROR = "SEND_DATA_ERROR";

export class SendData implements Action {
  readonly type = SEND_DATA;
  constructor(public payload: number) {}
}

export class SendDataComplete implements Action {
  readonly type = SEND_DATA_COMPLETE;
  constructor(public payload: number) {}
}

export class SendDataError implements Action {
  readonly type = SEND_DATA_ERROR;
  constructor(public payload: number) {}
}

export type Actions = SendData | SendDataComplete | SendDataError;
