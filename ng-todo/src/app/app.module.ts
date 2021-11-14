import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './views/categories/categories.component';
import { TaskComponent } from './views/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
