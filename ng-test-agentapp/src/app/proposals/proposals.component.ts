import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Proposal } from '../model/proposal.model';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent implements OnInit, OnChanges {
  @Input() proposals: Proposal[] = [];
  proposalsByCompany: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.proposals);
    // TODO grouping proposalsByCompany
  }
}
