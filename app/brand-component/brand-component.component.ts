import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-brand-component',
  templateUrl: './brand-component.component.html',
  styleUrls: ['./brand-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CMBrandComponentComponent implements OnInit {

  constructor(
    protected productDetails:CurrentProductService
  ) { }
    
    productDetails$:any= this.productDetails.getProduct();
    price$:any;
    brand:any;
  ngOnInit() {
    this.productDetails.getProduct().subscribe((product:any)=>{
      this.price$=product?.price?.formattedValue;
      this.brand=product?.manufacturer;
      console.log("product price :"+this.price$);
      console.log(this.brand);
      
      console.log(this.productDetails$);
  }
    )}
}
