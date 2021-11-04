import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  constructor() { }

  @Output() onChanged = new EventEmitter<number>();
  change(value: number) {
    this.onChanged.emit(value*10);
  }
  ngOnInit() { }
}