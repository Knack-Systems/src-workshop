import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ActiveCartService,
  CmsProductReferencesComponent,
  isNotNullable,
  OccEndpointsService,
  Product,
  ProductReference,
  ProductReferenceService,
  StateWithProduct,
} from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ProductListService } from 'src/app/services/product-list.service';


@Component({
  selector: 'app-custom-carasoul',
  templateUrl: './custom-carasoul.component.html',
  styleUrls: ['./custom-carasoul.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCarasoulComponent implements OnInit {
myProds:any;
productCode:any;
baseURL:any = 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/'



//urlAPI:any = 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/electronics-spa/products/1981415/references?fields=DEFAULT%2Creferences(target(images(FULL)))&referenceType=SIMILAR&lang=en&curr=USD'


  constructor(
    protected productList: ProductListService,
    protected activecart:ActiveCartService,
    protected changeDetect: ChangeDetectorRef,
    protected occEndpointService: OccEndpointsService,
  ) {}

  

  ngOnInit() {

    this.activecart.getActive()
    .subscribe((res:any)=> {
      this.productCode = res.entries[0].product.code;
      console.log(this.productCode)
    
    })
    
  this.productList.getProductDetails(this.productCode).subscribe
  (data=> {
    this.myProds = data.references;
   // console.log(this.myProds);
    this.changeDetect.detectChanges()
  })
  }

  
}
