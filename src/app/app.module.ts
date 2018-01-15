import { Midata } from 'Midata';
import { MidataConnection } from './../services/MidataConnection';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [
    AppComponent,
    MidataConnection,
  ],
  bootstrap: [
    AppComponent,
]
})
export class AppModule { }
