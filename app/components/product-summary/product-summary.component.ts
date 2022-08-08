import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {

  product$: Observable<Product|any> = this.currentProductService.getProduct();

  constructor(
    protected currentProductService: CurrentProductService
  ) { }

  ngOnInit(): void {
    this.product$.subscribe(res => {
      console.log('products', res);
    })
  }

}
