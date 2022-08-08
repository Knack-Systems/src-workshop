import { Component, OnInit } from '@angular/core';
import { AuthService } from '@spartacus/core';

@Component({
  selector: 'app-upselling',
  templateUrl: './upselling.component.html',
  styleUrls: ['./upselling.component.scss'],
})
export class UpsellingComponent implements OnInit {
  userLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService
      .isUserLoggedIn()
      .subscribe((res) => (this.userLoggedIn = res));
  }
}
