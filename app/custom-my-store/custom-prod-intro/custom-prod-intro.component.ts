import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-prod-intro',
  templateUrl: './custom-prod-intro.component.html',
  styleUrls: ['./custom-prod-intro.component.scss']
})
export class CustomProdIntroComponent implements OnInit {

  product$: Observable<Product|any> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
  }

}
