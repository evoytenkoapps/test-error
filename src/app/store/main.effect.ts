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
  map,
  mergeMap,
  retry,
  retryWhen,
  shareReplay,
  switchMap
} from 'rxjs/operators';
import { HttpService } from '../service/http.service';
import { of } from 'rxjs';

@Injectable()
export class MainEffect {
  constructor(private actions$: Actions, private httpService: HttpService) {}

  @Effect() initSocket$ = this.actions$.pipe(
    ofType(SEND_DATA),
    map((action: SendData) => action),
    switchMap(action =>
      this.httpService.sendData(action.payload).pipe(
        map(data => new SendDataComplete(action.payload)),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),
            mergeMap(error => of(error))
          )
        )
      )
    )
  );
}
