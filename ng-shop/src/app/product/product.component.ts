import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addProduct(product: Product) {
    this.productService.addProduct(product);
  }
}
