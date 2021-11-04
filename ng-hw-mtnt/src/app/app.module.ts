import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { CartList } from './cart-list.component';
import {  TestComponent } from "./test.component";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, CartList, TestComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
