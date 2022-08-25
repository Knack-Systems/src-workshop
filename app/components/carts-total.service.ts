
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService, LanguageService, CurrencyService } from '@spartacus/core';



@Injectable({
  providedIn: 'root',
})
export class CartTotalService {
  zipCode: any;
  language: any;
  currency: any;
  constructor(
    private occEndpointService: OccEndpointsService,
    private languageService: LanguageService,
    private currencyService: CurrencyService,
    private http: HttpClient
  ) {
    
  }

  addPromoCard(couponCode:any) {
    this.languageService.getActive().subscribe( res => {
      this.language = res;
    });
    this.currencyService.getActive().subscribe( res => {
      this.currency = res;
    })
    //console.log(localStorage.getItem('curr'))
    console.log('couponcode', couponCode);
    const url = this.occEndpointService.buildUrl(
      'addPromoCode'
    );
    return this.http.post(url, {couponCode, curr: this.currency, lang: this.language});
  }
}




