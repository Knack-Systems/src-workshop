import { AscAuthServicese } from './../service/asc-authservice.service';
import { CurrentProductService } from '@spartacus/storefront';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-qualtric-component',
  templateUrl: './qualtric-component.component.html',
  styleUrls: ['./qualtric-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CMQualtricComponentComponent implements OnInit {
  logged: any;

 
 
  constructor(
    private aboutProduct:CurrentProductService,
   protected AscAuthServicese:AscAuthServicese
  ) { }
    aboutProduct$:any= this.aboutProduct.getProduct();
    stockLevelStatus:any;
    StockNumber!: number;
  ngOnInit(): void {
    this.aboutProduct.getProduct().subscribe((aboutpro:any)=>
    {
      this.StockNumber=aboutpro?.stock?.stockLevel;
      this.stockLevelStatus=aboutpro?.stock?.stockLevelStatus;
      console.log(this.StockNumber,this.stockLevelStatus);
    })
    

    combineLatest([
      this.AscAuthServicese.isUserLoggedIn(),
    ]).subscribe(([isUserLoggeIn])=>{
     (this.logged =isUserLoggeIn);
     console.log("logged"+this.logged);
     
    })
   
  }

}
