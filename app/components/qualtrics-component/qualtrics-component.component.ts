import { Component, OnInit } from '@angular/core';
import { AuthService, RoutingService } from '@spartacus/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environmentConfig } from '../../envionment-config';

@Component({
  selector: 'app-qualtrics-component',
  templateUrl: './qualtrics-component.component.html',
  styleUrls: ['./qualtrics-component.component.scss']
})
export class QualtricsComponentComponent implements OnInit {

  constructor( protected authService: AuthService, private routingService: RoutingService) { }
  isUserLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  loginUrl = environmentConfig.domain+'login';

  ngOnInit(): void {
    console.log('isUserLoggedIn', this.authService.isUserLoggedIn().subscribe( res => {
      console.log('loggedin', res);
    }));
  }

  navigateToLogin() {
    this.routingService.go({ cxRoute: 'login' });
  }

  

}
