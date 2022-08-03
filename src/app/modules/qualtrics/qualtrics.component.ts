import { Component, OnInit } from '@angular/core';
import { AuthService } from '@spartacus/core';

@Component({
  selector: 'app-qualtrics',
  templateUrl: './qualtrics.component.html',
  styleUrls: ['./qualtrics.component.scss']
})
export class QMQualtricsComponent implements OnInit {

  constructor(private auth: AuthService) { }

  public isLoggedIn: boolean = false;
  public showText: boolean = false;

  ngOnInit(): void {
    // calling userLoggedIn method from spartacus service to know whether user is logged in or not
    this.userLoggedIn();
  }

  userLoggedIn() {
    if (this.auth.isUserLoggedIn()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
