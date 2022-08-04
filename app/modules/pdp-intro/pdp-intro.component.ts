import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pdp-intro',
  templateUrl: './pdp-intro.component.html',
  styleUrls: ['./pdp-intro.component.scss']
})
export class PdpIntroComponent implements OnInit {

  products: Observable<Product|any> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
  }

}
