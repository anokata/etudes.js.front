import { Input, Component } from "@angular/core";

class Item {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartList {
  // @Input() inInfo: string = "(init)";
  _inInfo: string;
  @Input()  set inInfo(value: string) {
    this._inInfo = value.toLocaleUpperCase().trim() + "(C)";
  }
  get inInfo() { return this._inInfo }
  
  products: Item[] = [
    new Item("bag Z-a2", 0.1),
    new Item("Default phone", 2.5),
  ];


}
