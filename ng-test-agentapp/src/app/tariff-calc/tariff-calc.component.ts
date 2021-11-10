import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tariff-calc',
  templateUrl: './tariff-calc.component.html',
  styleUrls: ['./tariff-calc.component.scss'],
})
export class TariffCalcComponent implements OnInit {
  distance: number = 5;
  age: number = 0;
  luggageWeight: number = 0;

  constructor() {}

  ngOnInit(): void {}

  handleChange($event: any) {
    // console.log(`Traffic. dist: ${this.distance} ev: ${$event}`);
  }
}
