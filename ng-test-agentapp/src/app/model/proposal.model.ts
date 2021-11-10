import { ComfortClass } from './transfer.model';

export class Proposal {
  constructor(
    public company: string,
    public comfort: ComfortClass,
    public cost: number
  ) {}
}
