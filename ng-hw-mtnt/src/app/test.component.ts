import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "test",
  templateUrl: "./test.component.html",
})
export class TestComponent implements OnInit {
  constructor() {}

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

  ngOnInit() {}
}
