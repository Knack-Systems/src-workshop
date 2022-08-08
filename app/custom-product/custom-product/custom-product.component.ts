import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-product',
  templateUrl: './custom-product.component.html',
  styleUrls: ['./custom-product.component.scss'],
})
export class CustomProductComponent implements OnInit {
  product$: Observable<Product | null> =
    this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) {}

  ngOnInit(): void {
    this.product$.subscribe((res) => console.log(res));
  }
}
