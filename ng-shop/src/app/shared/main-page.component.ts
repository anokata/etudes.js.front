import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  products$: Observable<any[]>;

  constructor(private productServ: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productServ.getAll();
  }
}
