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
  proposalsByCompany: { [key: string]: Proposal[] } = {};

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    // TODO grouping proposalsByCompany in tariff
    this.proposalsByCompany = {};
    this.proposals.forEach((p) => {
      if (!this.proposalsByCompany[p.company]) {
        this.proposalsByCompany[p.company] = [];
      }
      this.proposalsByCompany[p.company].push(p);
    });
    console.log(this.proposalsByCompany);
  }
}
