import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/interfaces';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  productSub: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productSub = this.productService.getAll().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }

  ngOnDestroy() {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }
  }
}
