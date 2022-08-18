import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActiveCartService, OccEndpointsService, Product, ProductReferenceService } from '@spartacus/core';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
import { CustomCartService } from '../service/custom-cart.service';

@Component({
  selector: 'app-product-references',
  templateUrl: './product-references.component.html',
  styleUrls: ['./product-references.component.scss'],
})
export class CustomProductReferencesComponent implements OnInit {
  productCode: string;
  productData: any;
  baseURl: string;
  // items$: Observable<Observable<Product>[]> = this.productReferenceService.loadProductReferences(this.productCode);

  constructor(
    private productReferenceService: ProductReferenceService,
    private activeCartService: ActiveCartService,
    private customCartService: CustomCartService,
    private cdr: ChangeDetectorRef,
    private occ: OccEndpointsService
  ) { }

  ngOnInit(): void {
    this.getProductByID();
    this.imageUrl();
  }

  getProductByID() {
    this.activeCartService.getActive().subscribe(res => {
      console.log(res);
      if (res) {
        this.productCode = res.entries[0].product.code;
        console.log(this.productCode);
        this.customCartService.getProductByID(this.productCode).subscribe((data: any) => {
          this.productData = data.references;
          console.log(this.productData);
          this.cdr.detectChanges();
        });
      }
    });
  }

  imageUrl() {
    this.baseURl = this.occ.getBaseUrl();
    console.log(this.baseURl);
    this.baseURl = this.baseURl.substring(0, this.baseURl.indexOf('/occ'));
    console.log(this.baseURl);
  }
  
}