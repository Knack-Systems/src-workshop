import { Component, OnInit } from '@angular/core';
import { ProductService } from '@spartacus/core';

@Component({
  selector: 'app-product-references',
  templateUrl: './product-references.component.html',
  styleUrls: ['./product-references.component.scss'],
})
export class CustomProductReferencesComponent implements OnInit {

  constructor(private ProductService: ProductService) { }

  prodFirst: any;
  prodSecond: any;
  prodThird: any;

  ngOnInit(): void {
    this.getProductByID();
  }

  getProductByID() {
    this.ProductService.get('1981412').subscribe((res: any) => {
      if (res?.code === '1981412') {
        this.prodFirst = res;
      }
    })
    this.ProductService.get('1981413').subscribe((res: any) => {
      if (res?.code === '1981413') {
        this.prodSecond = res;
      }
    })
    this.ProductService.get('1981415').subscribe((res: any) => {
      if (res?.code === '1981415') {
        this.prodThird = res;
      }
    })
  }
}
