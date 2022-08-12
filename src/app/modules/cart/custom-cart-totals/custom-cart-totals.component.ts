import { Component, OnInit } from '@angular/core';
import { Cart, OrderEntry, ActiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-custom-cart-totals',
  templateUrl: './custom-cart-totals.component.html',
  styleUrls: ['./custom-cart-totals.component.scss']
})
export class CustomCartTotalsComponent implements OnInit {

  cart$: Observable<Cart> | undefined;
  entries$: Observable<OrderEntry[]> | undefined;

  constructor(protected activeCartService: ActiveCartService) {}

  ngOnInit() {
    this.cart$ = this.activeCartService.getActive();
    console.log(this.cart$);
    
    this.entries$ = this.activeCartService
      .getEntries()
      .pipe(filter((entries) => entries.length > 0));
  }

}
