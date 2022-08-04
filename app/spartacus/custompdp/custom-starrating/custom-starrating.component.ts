import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-starrating',
  templateUrl: './custom-starrating.component.html',
  styleUrls: ['./custom-starrating.component.scss']
})
export class CustomStarratingComponent implements OnInit {

  product$: Observable<Product|any> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
  }

}
