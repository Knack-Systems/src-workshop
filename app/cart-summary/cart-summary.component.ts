import { Component, Input,  } from '@angular/core';
import { Cart } from '@spartacus/core';

@Component({
  selector: 'cx-order-summary1',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent  {

  @Input()
  cart!: Cart;
  Subtotal:string= "Subtotal";
}
  
  


