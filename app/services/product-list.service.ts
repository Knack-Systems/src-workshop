import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(
    protected occEndpointService: OccEndpointsService,
    protected http: HttpClient
  ) {}

  getProductDetails(code:any): Observable<any> {
    const baseurl = this.occEndpointService.getBaseUrl();
    console.log(baseurl)
   const url = baseurl + '/products/' + `${code}` + '/references?fields=DEFAULT%2Creferences(target(images(FULL)))&referenceType=SIMILAR'
   return this.http.get(url);
  }
  
}
