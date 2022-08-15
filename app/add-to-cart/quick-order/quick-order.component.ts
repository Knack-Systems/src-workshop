import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-order',
  templateUrl: './quick-order.component.html',
  styleUrls: ['./quick-order.component.scss'],
})
export class QuickOrderComponent implements OnInit {
  quantity: string = '';
  productId!: number;
  disableButton = false;

  constructor() {}

  ngOnInit(): void {}

  productIdChange() {
    let numbCheck = isFinite(this.productId);
    if (!numbCheck) {
      this.disableButton = true;
    } else {
      this.disableButton = false;
    }
  }
}
