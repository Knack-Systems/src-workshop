import { Component, OnInit } from '@angular/core';
import { ActiveCartService, OrderEntry, Cart } from '@spartacus/core';

import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environmentConfig } from '../../envionment-config';
import { Router} from '@angular/router';


@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit {
  cart$?: Observable<Cart>;
  entries$?: Observable<OrderEntry[]>;
  subscription = new Subscription();
  loginUrl = environmentConfig.domain+'login';
  constructor(protected activeCartService: ActiveCartService, private router: Router) { }

  ngOnInit(): void {
    this.cart$ = this.activeCartService.getActive();
    this.entries$ = this.activeCartService
      .getEntries()
      .pipe(filter((entries) => entries.length > 0));
      this.entries$.subscribe( res => {
        console.log('entries$', res);
      });
      this.cart$.subscribe( res => {
        console.log('cart$', res);
      });
  }
  redirectToLogin() {
    //return environmentConfig.domain+'login';
    this.router.navigateByUrl('/login')

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
