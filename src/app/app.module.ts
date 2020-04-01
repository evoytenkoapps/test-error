import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainComponent} from './components/main/main.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MainEffect} from './store/main.effect';
import {EffectsModule} from '@ngrx/effects';
import {mainReducer} from './store/main.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      data: mainReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 50 // Retains last 25 states
    }),
    EffectsModule.forRoot([MainEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
