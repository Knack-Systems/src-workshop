import { AscAuthserviceService } from './../../service/asc-authservice.service';
import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';
import { ProductService } from '@spartacus/core';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss']
})
export class STImportExportComponent implements OnInit {

  constructor(
    private aboutProduct:CurrentProductService,
   private AscAuthServicese:AscAuthserviceService,
   protected newProducts1:ProductService
  ) { }
    aboutProduct$:any= this.aboutProduct.getProduct();
    stockLevelStatus:any;
    StockNumber!: number;
    newProducts1$:any= this.newProducts1.get('1981412');
    newProducts2$:any= this.newProducts1.get('1981413');
    newProducts3$:any= this.newProducts1.get('1981415');

    p1:any;
    p2:any;
    p3:any;

    pr1:any;
    pr2:any;
    pr3:any;

    d1:any;
    d2:any;
    d3:any;



  ngOnInit(): void {
    this.aboutProduct.getProduct().subscribe((aboutpro:any)=>
    {
      this.StockNumber=aboutpro?.stock?.stockLevel;
      this.stockLevelStatus=aboutpro?.stock?.stockLevelStatus;
    })
    this.newProducts1.get('1981415').subscribe((pdata:any)=>
    {
        this.p1= pdata?.name;
        this.pr1=pdata?.price?.formattedValue;
        this.d1= pdata?.summary;
    })
    this.newProducts1.get('1981412').subscribe((pdata:any)=>
    {
        this.p2= pdata?.name;
        this.pr2=pdata?.price?.formattedValue;
        this.d2= pdata?.summary;
    })
    this.newProducts1.get('1981413').subscribe((pdata:any)=>
    {
        this.p3= pdata?.name;
        this.pr3=pdata?.price?.formattedValue;
        this.d3= pdata?.summary;
    })



  }

}
