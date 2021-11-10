import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerFormComponent } from './passenger-form/passenger-form.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { TariffCalcComponent } from './tariff-calc/tariff-calc.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PassengerFormComponent,
    ProposalsComponent,
    TariffCalcComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
