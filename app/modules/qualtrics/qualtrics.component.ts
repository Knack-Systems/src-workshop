import { Component, OnInit } from '@angular/core';
import { AuthService } from '@spartacus/core';

@Component({
  selector: 'app-qualtrics',
  templateUrl: './qualtrics.component.html',
  styleUrls: ['./qualtrics.component.scss']
})
export class QualtricsComponent implements OnInit {

  isLoggedIn = this.authService.isUserLoggedIn();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
