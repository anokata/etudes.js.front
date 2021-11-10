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
    }
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
    last: Math.round((startAmount - taked) * 100) / 100,
  };
}

export function takeAmountEqually(banknotes, amount) {
  // take array itself
  let bnotes = banknotes.slice();
  const startAmount = amount;
  let taked = 0;
  let takedByDignity = {};

  function takeOne(banknotes, takeAmount) {
    // find first amount > dignity and not zero count
    const noteIndex = banknotes.findIndex(b => b.dignity <= takeAmount && b.count > 0);
    // no more notes
    if (noteIndex < 0) return false;

    // take 2 neighbour notes or mock with one (if last)
    const note = banknotes[noteIndex];
    let note2 = null;
    if (noteIndex >= banknotes.length - 1) {
      note2 = new BankNotePack(note.count - 1, 0);
    } else {
      note2 = banknotes[noteIndex + 1];
    }

    // take diff of the greatest two or 1
    let count = (note.count - note2.count) || 1;
    let tryTakeAmount = count * note.dignity;
    // not take more than need
    if (tryTakeAmount > amount) {
      count = Math.floor(takeAmount / note.dignity);
    }
    // console.log(`take: ${note}  count: ${count}`);
    // take, calc and save
    const realtaked = note.take(count);
    const takedAmount = realtaked * note.dignity
    taked += takedAmount;
    amount -= takedAmount;
    const takedBanknotesDignity = takedByDignity[note.dignity] || new BankNotePack(0, 0);
    takedByDignity[note.dignity] = new BankNotePack(realtaked + takedBanknotesDignity.count, note.dignity);
    return true;
  }

  // Let's take by one and sort
  let isTaked = true;
  do {
    bnotes = bnotes.sort((a, b) => b.count - a.count);
    isTaked = takeOne(bnotes, amount);
  } while (isTaked);

  return {
    banknotes: bnotes,
    reminder: sumOfPack(bnotes),
    givePack: Object.values(takedByDignity),
    last: Math.round((startAmount - taked) * 100) / 100,
  };
}

export function fromVariant(variant) {
  return variant.map(({ dignity, count }) => new BankNotePack(count, dignity));
}
