import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActiveCartService, Cart, ProductReference, ProductReferenceService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss']
})
export class ImportExportComponent implements OnInit {

  productId: string | undefined;
  products$: Observable<ProductReference[]>;
  cart!: Cart;

  constructor(
    private activeCartService: ActiveCartService,
    private productService: ProductReferenceService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.activeCartService.takeActive().subscribe((data) => {
      this.cart = data;
      if (this.cart.entries) {
        this.productId = this.cart.entries[0]?.product?.code;

        if (this.productId)
          this.productService.loadProductReferences(this.productId, 'SIMILAR');
        setTimeout(() => {
          this.getProducts();
        }, 1500);
      }
    });
  }
  
  getProducts() {
    if (this.productId) {
      this.products$ = this.productService.getProductReferences(
        this.productId,
        'SIMILAR'
      );
      console.log(this.products$)
      this.changeDetector.detectChanges();
    }

  }

}
