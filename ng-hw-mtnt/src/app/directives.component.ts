import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isColoredText: boolean = false;
  toggleTextClass() {
    this.isColoredText = !this.isColoredText;
    console.log(this.isColoredText);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
