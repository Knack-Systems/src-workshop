import { Component, OnInit } from '@angular/core';
import { ActiveCartService, Product, ProductService } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-prod-refer',
  templateUrl: './custom-prod-refer.component.html',
  styleUrls: ['./custom-prod-refer.component.scss']
 
})
export class CustomProdReferComponent implements OnInit  {

  productId1: any = 1981414;
  productId2: any = 1981412;
  productId3: any = 1981413;

  myCurrentProduct1$: Observable<Product|any> = this.productService.get(this.productId1);
  myCurrentProduct2$: Observable<Product|any> = this.productService.get(this.productId2);
  myCurrentProduct3$: Observable<Product|any> = this.productService.get(this.productId3);


  constructor(protected productService: ProductService) { }
  
  ngOnInit(): void {

  }


}


