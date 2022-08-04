import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-intro',
  templateUrl: './product-intro.component.html',
  styleUrls: ['./product-intro.component.scss'],
})
export class ProductIntroComponent implements OnInit {
  product$: Observable<Product | null> =
    this.currentProductService.getProduct();

  rating: any;
  reviews: any;

  constructor(private currentProductService: CurrentProductService) {}

  ngOnInit(): void {
    this.product$.subscribe((res) => {
      this.rating = res?.averageRating;
      this.reviews = res?.numberOfReviews;
    });
  }
}
