import { Component, OnInit } from '@angular/core';
import { ActiveCartService, Cart } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  cart: Observable<Cart> | any;

  constructor(private activeCartService: ActiveCartService) { }

  ngOnInit(): void {
    this.activeCartService.getActive().subscribe((cart)=>{
      this.cart = cart;
    });
  }

}
