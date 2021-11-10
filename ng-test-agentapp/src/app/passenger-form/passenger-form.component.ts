import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss'],
})
export class PassengerFormComponent implements OnInit {
  numberRegEx = /\-?\d*\.?\d{1,2}/;

  @Input() distance: number = 0;
  @Output() distanceChange = new EventEmitter<number>();
  onDistanceChange(model: number) {
    // console.log(`Passenger. dist: ${model}`);
    this.distanceChange.emit(model);
  }

  @Input() age: number = 0;
  @Output() ageChange = new EventEmitter<number>();
  onAgeChange(model: number) {
    console.log(`Passenger. age: ${model}`);
    this.ageChange.emit(model);
  }

  @Input() luggageWeight: number = 0;
  @Output() luggageWeightChange = new EventEmitter<number>();
  onLuggageWeightChange(model: number) {
    this.luggageWeightChange.emit(model);
  }

  constructor() {}

  ngOnInit(): void {}
}
