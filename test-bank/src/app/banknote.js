export default class BankNotePack {
  constructor(count, dignity) {
    this._count = count;
    this._dignity = dignity;
  }

  get count() {
    return this._count;
  }

  get dignity() {
    return this._dignity;
  }

  take(amount) {
    if (amount > this._count) {
      const lastCount = this._count;
      this._count = 0;
      return lastCount;
    };
    this._count -= amount;
    return amount;
  }

  get sum() {
    return this.count * this.dignity;
  }

  toString() {
    return `BankNotePack[${this._count} of ${this.dignity}]`;
  }
}

export function sumOfPack(banknotes) {
  return banknotes.reduce((acc, b) => acc + b.sum, 0);
}

export function takeAmount(banknotes, amount) {
  const startAmount = amount;
  let taked = 0;
  let takedNotes = [];
  banknotes.forEach((note) => {
    // cat take such amount banknotes
    if (amount >= note.dignity) {
      // calc count 
      const count = Math.floor(amount / note.dignity);
      const realtaked = note.take(count);
      taked += realtaked * note.dignity;
      amount -= realtaked * note.dignity;
      takedNotes.push(new BankNotePack(realtaked, note.dignity));
    }
  });

  return {
    banknotes: banknotes,
    reminder: sumOfPack(banknotes),
    givePack: takedNotes,
    last: Math.round((startAmount - taked)*100)/100,
  };
}

export function fromVariant(variant) {
  return variant.map(({dignity, count}) => new BankNotePack(count, dignity));
}
