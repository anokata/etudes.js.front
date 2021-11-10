import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent implements OnInit, OnChanges {
  @Input() distance: number = 0;
  @Input() age: number = 0;
  @Input() luggageWeight: number = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(`Proposal chg: ${changes['distance']?.currentValue}`);
  }
}
