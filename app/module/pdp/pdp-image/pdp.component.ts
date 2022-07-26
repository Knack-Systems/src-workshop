import { Component, OnInit } from '@angular/core';
import { CurrentProductService, ProductImagesComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss']
})
export class PdpImageComponent extends ProductImagesComponent implements OnInit {

  constructor(
    protected currentProductService: CurrentProductService
  ) {
    super(currentProductService)
  }

  ngOnInit() {
  }

}
