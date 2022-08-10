import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { ActiveCartService, Cart, OrderEntry } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-cart-totals',
  templateUrl: './custom-cart-totals.component.html',
  styleUrls: ['./custom-cart-totals.component.scss']
})
export class CustomCartTotalsComponent implements OnInit {

  cart$: Observable<Cart> | any =  this.activeCartService.getActive();
  entries$: Observable<OrderEntry[]> = this.activeCartService.getEntries();
  myEntries: any;

  cartValidationInProgress = false;
  protected subscription = new Subscription();

  constructor(protected activeCartService: ActiveCartService, protected router?: Router) { }

  ngOnInit(): void {
       this.subscription.add(
      this.router?.events.subscribe((event: Event) => {
        if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.cartValidationInProgress = false;
        }
      })
    );
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  disableButtonWhileNavigation(): void {
    this.cartValidationInProgress = true;
  }

}
