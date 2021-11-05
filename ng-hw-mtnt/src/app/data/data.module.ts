import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { DataComponent } from "./data.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [DataComponent],
  declarations: [DataComponent],
  providers: [],
})
export class DataModule {}
