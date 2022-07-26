import { Component, OnInit } from '@angular/core';
import { ProductService } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class STProductSummaryComponent implements OnInit {

  // productDetails$ = this.productDetails.getProduct();
  price!: string;

  constructor(
    protected productDetails: CurrentProductService,
    protected dataService: DataServiceService
  ) { }

  ngOnInit() {
    this.productDetails.getProduct().subscribe((product: any) => {
      this.price = product?.price?.formattedValue;
    });

    this.dataService.getBlogDetails().subscribe((blog: any) => {
      console.log(blog);
    });

  }

}
