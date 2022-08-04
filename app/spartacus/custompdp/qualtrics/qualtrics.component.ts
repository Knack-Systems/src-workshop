import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-qualtrics',
  templateUrl: './qualtrics.component.html',
  styleUrls: ['./qualtrics.component.scss']
})
export class QualtricsComponent implements OnInit {

  isLoggedIn: Observable<boolean> = this.authService.isUserLoggedIn();
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  gotoLogin() {
     this.router.navigate(['/login']);
   }

}
