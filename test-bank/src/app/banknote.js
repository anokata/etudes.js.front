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
    if (amount > this._count) throw new Error(`No such summ: ${amount}`);
    this._count -= amount;
    return this.count;
  }

  toString() {
    return `BankNotePack[${this._count} of ${this.dignity}]`;
  }
}

export function takeAmount(banknotes, amount) {
  console.log("take", amount);
  let taked = 0;
  let takedNotes = [];

  return {
    banknotes: banknotes,
    reminder: amount - taked,
    givePack: takedNotes,
  };
}
