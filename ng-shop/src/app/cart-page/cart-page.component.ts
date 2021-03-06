import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../shared/interfaces';
import { OrderService } from '../shared/order.service';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cartProducts: Product[] = [];
  totalPrice: number = 0;
  form: FormGroup;
  submitted: boolean = false;
  added: string = '';

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.productService.cartProducts;
    this.calcTotal();
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      payment: new FormControl('Cash'),
    });
  }

  calcTotal() {
    this.totalPrice = 0;
    this.cartProducts.forEach((e) => {
      this.totalPrice += Number.parseFloat(e.price?.toString() || '0');
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.submitted = true;

    const order: any = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      payment: this.form.value.payment,
      products: this.cartProducts,
      price: this.totalPrice,
      date: new Date(),
    };

    this.orderService.create(order).subscribe((res) => {
      this.form.reset();
      this.submitted = false;
      this.added = 'Delivery is framed';
    });
  }

  delete(product: Product) {
    this.cartProducts.splice(this.cartProducts.indexOf(product), 1);
    this.calcTotal();
  }
}
