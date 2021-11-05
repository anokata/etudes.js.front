import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: "test",
  templateUrl: "./test.component.html",
})
export class TestComponent implements OnInit, OnChanges {
  constructor() {
    console.log("test.component Constructing...");
  }

  @Input() inputText: string;

  @Output() inputTextChange = new EventEmitter<string>();

  onInputTextChange(model: string) {
    this.inputText = model;
    this.inputTextChange.emit(model);
  }

  @Output() onChanged = new EventEmitter<number>();

  change(value: number) {
    this.onChanged.emit(value * 10);
  }

  ngOnInit() {
    console.log("test.component Init.");
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
}
