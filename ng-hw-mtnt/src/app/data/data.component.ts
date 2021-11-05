import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-fix',
  template: '<h1>data: {{content}}</h1>',
  styles: [`
    font-size: 12px;
    font-family: monospace;
  `],
})

export class DataComponent implements OnInit {
  content: string = "some data";
  constructor() { }

  ngOnInit() { }
}