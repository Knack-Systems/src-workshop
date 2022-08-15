import { Component, OnInit } from '@angular/core';
import { ActiveCartService, Cart } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  cart$: Observable<Cart | null> = this.activeCartService.getActive();

  constructor(private activeCartService: ActiveCartService) {}

  ngOnInit(): void {
    // this.product$.subscribe((res) => {
    //   console.log(res);
    // });
    this.activeCartService
      .getActive()
      .subscribe((res: any) => console.log(res));
  }
}
