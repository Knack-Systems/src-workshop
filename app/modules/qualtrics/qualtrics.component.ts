import { Component, OnInit } from '@angular/core';
import { AuthService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-qualtrics',
  templateUrl: './qualtrics.component.html',
  styleUrls: ['./qualtrics.component.scss'],
})
export class QualtricsComponent implements OnInit {
  isLoggedIn: boolean = false;
  link =
    'https://sap.github.io/spartacus-docs/3.x/building-the-spartacus-storefront-from-libraries-3-2/';
  // isLoggedIn: Observable<boolean> = this.authService.isUserLoggedIn();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isUserLoggedIn()) {
      this.isLoggedIn = true;
    }
    console.log(this.isLoggedIn);
  }

  goToLink() {
    window.open(this.link, '_blank');
  }
}
