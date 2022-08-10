import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '@spartacus/core';

@Component({
  selector: 'app-custom-order-summary',
  templateUrl: './custom-order-summary.component.html',
  styleUrls: ['./custom-order-summary.component.scss']
})
export class CustomOrderSummaryComponent implements OnInit {
  @Input() cart: Cart | any;

  
  constructor() { }

  ngOnInit(): void {
  }

}
