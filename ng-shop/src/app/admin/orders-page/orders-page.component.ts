import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/shared/interfaces';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  constructor(private ordersService: OrderService) {}

  orders: Order[] = [];
  orderSub: Subscription;
  removeSub: Subscription;
  orderName: string;

  ngOnInit(): void {
    this.getorders();
  }

  private getorders() {
    this.orderSub = this.ordersService.getAll().subscribe((orders) => {
      this.orders = orders;
    });
  }

  ngOnDestroy() {
    if (this.orderSub) {
      this.orderSub.unsubscribe();
    }
    if (this.removeSub) {
      this.removeSub.unsubscribe();
    }
  }

  remove(id: string | undefined) {
    if (id !== undefined) {
      this.removeSub = this.ordersService.remove(id).subscribe(() => {
        this.orders = this.orders.filter((order) => order.id !== id);
      });
    }
  }
}
