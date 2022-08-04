import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-pdp-product-summary',
  templateUrl: './pdp-product-summary.component.html',
  styleUrls: ['./pdp-product-summary.component.scss']
})
export class PdpProductSummaryComponent implements OnInit {
  price: string | undefined;
  products: any;
  constructor(protected productDetails: CurrentProductService) { }

  ngOnInit(): void {
    this.productDetails.getProduct().subscribe((product: any) => {
      this.products = product;
      this.price = product?.price?.formattedValue;
    });
  }

}
