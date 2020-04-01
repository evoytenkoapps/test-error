import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStore } from '../../store/store';
import { ChangeSocket, SEND_DATA, SendData } from '../../store/actions';
import { selectIsConnected } from '../../store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public isConnectd$: Observable<boolean>;
  private counter: number = 1;

  constructor(private store: Store<AppStore>) {}

  ngOnInit() {
    this.isConnectd$ = this.store.pipe(select(selectIsConnected));
  }

  public onSend() {
    this.store.dispatch(new SendData(this.counter));
    this.counter++;
  }

  public onConnect() {
    this.store.dispatch(new ChangeSocket());
  }
}
