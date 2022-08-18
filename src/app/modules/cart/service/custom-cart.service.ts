import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class CustomCartService {

  constructor(private http: HttpClient, private occ: OccEndpointsService) { }

  getProductByID(code: string) {
    const baseUrl = this.occ.getBaseUrl();
    const url = `${baseUrl}/products/${code}/references?fields=DEFAULT%2Creferences(target(images(FULL)))&referenceType=SIMILAR`;
    return this.http.get(url);
  }

}
