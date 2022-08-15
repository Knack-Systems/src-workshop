import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Cart, OrderEntry, ActiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-subtotal-component',
  templateUrl: './subtotal-component.component.html',
  styleUrls: ['./subtotal-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class STSubtotalComponentComponent implements OnInit {
  @Input()
  cart$!: Cart;
  cart1$: Observable<Cart> | undefined;
  entries$: Observable<OrderEntry[]> | undefined;

  constructor(protected activeCartService: ActiveCartService) {}
  

  ngOnInit() {
    this.cart1$ = this.activeCartService.getActive();
    this.entries$ = this.activeCartService
      .getEntries()
      .pipe(filter((entries) => entries.length > 0));
  }

}
