import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cartProducts: Product[] = [];
  totalPrice: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cartProducts = this.productService.cartProducts;
    this.cartProducts.forEach((e) => {
      this.totalPrice += Number.parseFloat(e.price?.toString() || '0');
    });
  }
}
