import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CartList } from "./cart-list.component";
import { TestComponent } from "./test.component";
import { DataModule } from "./data/data.module";
import { RouterModule, Routes } from "@angular/router";
import { FormsComponent } from "./forms.component";
import { AboutComponentComponent } from "./about-component/about-component.component";
import { BasicBindignComponent } from "./basic-bindign.component";

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "forms", component: FormsComponent },
  { path: "binding", component: BasicBindignComponent },
  { path: "about", component: AboutComponentComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DataModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    CartList,
    TestComponent,
    FormsComponent,
    AboutComponentComponent,
    BasicBindignComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
