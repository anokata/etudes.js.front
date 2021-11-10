import { Component, OnInit } from '@angular/core';
import { Proposal } from '../model/proposal.model';
import { ComfortClass, NoDiscont, Transfer } from '../model/transfer.model';

@Component({
  selector: 'app-tariff-calc',
  templateUrl: './tariff-calc.component.html',
  styleUrls: ['./tariff-calc.component.scss'],
})
export class TariffCalcComponent implements OnInit {
  distance: number = 5;
  age: number = 0;
  luggageWeight: number = 0;
  proposals: Proposal[] = [];

  transfers: Transfer[] = [
    new Transfer('Аэрофлот', ComfortClass.Econom, 4, 5, 4000, 20, NoDiscont),
    new Transfer('Аэрофлот', ComfortClass.Econom, 8, 20, 5000, 50, {
      age: 7,
      discontPrc: 30,
      luggageInclude: false,
    }),
  ];

  constructor() {}

  ngOnInit(): void {}

  handleChange($event: any) {
    // console.log(`Traffic. dist: ${this.distance} ev: ${$event}`);
  }

  calc() {
    this.proposals = this.transfers.map(
      (t) =>
        new Proposal(
          t.company,
          t.calcCost(this.distance, this.age, this.luggageWeight)
        )
    );
    // filter 0
    console.log(this.proposals);
  }
}
