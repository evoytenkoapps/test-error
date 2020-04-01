import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  SEND_DATA,
  SendData,
  SendDataComplete,
  SendDataError
} from './actions';
import {
  catchError,
  delay,
  filter,
  map,
  mergeMap,
  retry,
  retryWhen,
  shareReplay,
  switchMap,
  withLatestFrom
} from 'rxjs/operators';
import { HttpService } from '../service/http.service';
import { of } from 'rxjs';
import { AppStore } from './store';
import { select, Store } from '@ngrx/store';
import { selectIsConnected } from './selectors';

@Injectable()
export class MainEffect {
  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private store: Store<AppStore>
  ) {}

  @Effect() initSocket$ = this.actions$.pipe(
    ofType(SEND_DATA),
    map((action: SendData) => action),
    switchMap(action =>
      this.httpService.sendData(action.payload).pipe(
        map(data => new SendDataComplete(action.payload)),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),
            withLatestFrom(this.store.pipe(select(selectIsConnected))),
            filter(([data, isConnected]) => isConnected === true),
            mergeMap(error => of(error))
          )
        )
      )
    )
  );
}
