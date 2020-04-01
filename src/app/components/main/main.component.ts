import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppStore } from "../../store/store";
import { SEND_DATA, SendData } from "../../store/actions";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  private counter: number = 1;

  constructor(private store: Store<AppStore>) {}

  ngOnInit() {}

  public onSend() {
    this.store.dispatch(new SendData(this.counter));
    this.counter++;
  }
}
