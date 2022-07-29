import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-pdp',
  templateUrl: './custom-pdp.component.html',
  styleUrls: ['./custom-pdp.component.scss']
})
export class CustomPdpComponent implements OnInit {

  product$: Observable<Product|null> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
  }

}
