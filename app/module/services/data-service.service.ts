import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
    protected occEndpointService: OccEndpointsService,
    protected http: HttpClient
  ) { }


  // https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/get-blog-detail

  getBlogDetails() {
    const url = this.occEndpointService.buildUrl('occ/v2/get-blog-detail');
    return this.http.get(url);
  }


}
