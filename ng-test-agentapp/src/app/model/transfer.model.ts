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

  public calcCost(distance: number, age: number, luggage: number): number {
    if (luggage > this.maxLuggage) return -1;

    const pathCost = distance * this.kmCost;

    let luggageCost = 0;
    if (luggage > this.maxFreeLuggage) {
      luggageCost = (luggage - this.maxFreeLuggage) * this.luggageCost;
    }

    let cost = pathCost + luggageCost;
    if (this.ageDiscont.age >= age) {
      if (this.ageDiscont.luggageInclude) {
        cost =
          ((pathCost + luggageCost) * (100 - this.ageDiscont.discontPrc)) / 100;
      } else {
        cost =
          luggageCost + (pathCost * (100 - this.ageDiscont.discontPrc)) / 100;
      }
    }

    return Math.round(cost * 100) / 100;
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
