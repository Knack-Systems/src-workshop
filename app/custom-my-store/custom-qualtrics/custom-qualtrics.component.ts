import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@spartacus/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-custom-qualtrics',
  templateUrl: './custom-qualtrics.component.html',
  styleUrls: ['./custom-qualtrics.component.scss']
})
export class CustomQualtricsComponent implements OnInit {

  isLoggedIn: Observable<boolean> = this.authService.isUserLoggedIn();
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  gotoLogin() {
   // this.router.navigate('[./login]');
    this.router.navigate(['/login']);
  }
}
