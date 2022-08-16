import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ActiveCartService,
  Cart,
  ProductReference,
  ProductReferenceService,
} from '@spartacus/core';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss'],
})
export class SimilarProductsComponent implements OnInit {
  cart!: Cart;
  productId: string | undefined;
  referenceProducts$: Observable<ProductReference[]> | undefined;

  constructor(
    private activeCartService: ActiveCartService,
    private productService: ProductReferenceService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // To get the product id
    this.activeCartService.takeActive().subscribe((res) => {
      this.cart = res;
      if (this.cart.entries) {
        this.productId = this.cart.entries[0]?.product?.code;

        if (this.productId)
          this.productService.loadProductReferences(this.productId, 'SIMILAR');
        setTimeout(() => {
          this.getReferenceProducts();
        }, 1500);
      }
    });
  }

  getReferenceProducts() {
    if (this.productId) {
      this.referenceProducts$ = this.productService.getProductReferences(
        this.productId,
        'SIMILAR'
      );
      this.changeDetector.detectChanges();
    }
  }
}
