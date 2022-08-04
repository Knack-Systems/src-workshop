import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss'],
})
export class STProductSummaryComponent implements OnInit {
  price!: string;
  productData: any;
  constructor(protected productDetails: CurrentProductService) {}

  ngOnInit(): void {
    this.productDetails.getProduct().subscribe((product: any) => {
      console.log(product);
      this.productData = product;
      this.price = product?.price?.formattedValue;
    });
  }
}
