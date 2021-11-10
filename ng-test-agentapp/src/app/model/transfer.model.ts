export class Transfer {
  constructor(
    public company: string,
    public comfortClass: ComfortClass,
    public kmCost: number,
    public maxFreeLuggage: number,
    public luggageCost: number,
    public maxLuggage: number,
    public ageDiscont: AgeDiscont
  ) {}

  public calcCost(km: number, age: number, luggage: number): number {
    if (luggage > this.maxLuggage) return -1;
    return 0;
  }
}

export type AgeDiscont = {
  age: number;
  discontPrc: number;
  luggageInclude: boolean;
};

export const NoDiscont: AgeDiscont = {
  age: 0,
  discontPrc: 0,
  luggageInclude: false,
};

export enum ComfortClass {
  Econom = 'Эконом',
  Advanced = 'Продвинутый',
  Lux = 'Люкс',
}
