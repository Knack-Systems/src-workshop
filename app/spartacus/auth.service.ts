import { Injectable } from '@angular/core';
import { AuthStorageService } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(protected authStorageService: AuthStorageService) {}

  isUserLoggedIn(): Observable<boolean> {
    return this.authStorageService.getToken().pipe(
      map((userToken) => Boolean(userToken?.access_token)),
      distinctUntilChanged()
    );
  }
}
