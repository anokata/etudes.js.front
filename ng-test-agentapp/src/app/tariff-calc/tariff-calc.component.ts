import { Component, OnInit } from '@angular/core';
import { Proposal } from '../model/proposal.model';
import { ComfortClass, NoDiscont, Transfer } from '../model/transfer.model';

@Component({
  selector: 'app-tariff-calc',
  templateUrl: './tariff-calc.component.html',
  styleUrls: ['./tariff-calc.component.scss'],
})
export class TariffCalcComponent implements OnInit {
  distance: number = 500;
  age: number = 40;
  luggageWeight: number = 10;
  proposals: Proposal[] = [];

  transfers: Transfer[] = [
    new Transfer('Аэрофлот', ComfortClass.Econom, 4, 5, 4000, 20, NoDiscont),
    new Transfer('Аэрофлот', ComfortClass.Advanced, 8, 20, 5000, 50, {
      age: 7,
      discontPrc: 30,
      luggageInclude: false,
    }),
    new Transfer('Аэрофлот', ComfortClass.Lux, 15, 0, 0, 50, {
      age: 16,
      discontPrc: 30,
      luggageInclude: false,
    }),
    new Transfer('РЖД', ComfortClass.Econom, 0.5, 15, 50, 50, {
      age: 5,
      discontPrc: 50,
      luggageInclude: false,
    }),
    new Transfer('РЖД', ComfortClass.Advanced, 2, 20, 50, 60, {
      age: 8,
      discontPrc: 30,
      luggageInclude: false,
    }),
    new Transfer('РЖД', ComfortClass.Lux, 4, 0, 0, 60, {
      age: 16,
      discontPrc: 20,
      luggageInclude: true,
    }),
  ];

  constructor() {}

  ngOnInit(): void {}

  handleChange($event: any) {
    // console.log(`Traffic. dist: ${this.distance} ev: ${$event}`);
  }

  calc() {
    this.proposals = this.transfers
      .map(
        (t) =>
          new Proposal(
            t.company,
            t.comfortClass,
            t.calcCost(this.distance, this.age, this.luggageWeight)
          )
      )
      .filter((p) => p.cost > 0)
      .sort((a, b) => a.company.localeCompare(b.company));
  }
}
