import { Component, OnInit } from '@angular/core';
import { AuthService } from '@spartacus/core';

@Component({
  selector: 'app-custom-qualratics',
  templateUrl: './custom-qualratics.component.html',
  styleUrls: ['./custom-qualratics.component.scss'],
})
export class CustomQualraticsComponent implements OnInit {
  constructor(private auth: AuthService) {}
  isUserLoggedIn: boolean = false;

  ngOnInit(): void {
    if (this.auth.isUserLoggedIn()) {
      this.isUserLoggedIn = true;
    }
  }
}
