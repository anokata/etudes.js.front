import { Component } from "@angular/core";

class Item {
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number) {
    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.comonent.css"],
})
export class AppComponent {
  text: string = "";
  price: number = 0;
  bindValue = "test bind value";
  bindTwoWay = "-";
  complex = { name: "Vault 64", size: 24.02 };
  x: number = 0;
  incrementText: string = "Value x:";
  isOn: boolean = false;
  counter: number = 0;

  showShopBlock: boolean = false;
  products = [
    {name: "phone X-1"},
    {name: "PC One-Z"},
    {name: "Box Rezona"},
  ];

  toggleShopBlock(): void {
    this.showShopBlock = !this.showShopBlock;
    console.log(this.showShopBlock);
  }

  showValue(): void {
    console.log(this.bindValue);
  }
  changeValue(): void {
    this.bindValue += "+";
    this.bindTwoWay += "$";
    setInterval(() => {
      this.complex.size *= 1.01;
    }, 200);
  }

  increment($event) {
    this.x++;
    this.incrementText = `Value x: ${this.x}`;
    console.log($event)
  }

  items: Item[] = [
    { purchase: "Хлеб", done: false, price: 15.9 },
    { purchase: "Масло", done: false, price: 60 },
    { purchase: "Картофель", done: true, price: 22.6 },
    { purchase: "Сыр", done: false, price: 310 },
  ];
  addItem(text: string, price: number): void {
    if (text == null || text.trim() == "" || price == null) return;
    this.items.push(new Item(text, price));
  }

  onChange(value: number) {
    this.counter += value;
  }
}
