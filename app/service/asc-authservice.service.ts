import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthRedirectService, AuthService, AuthStorageService, OAuthLibWrapperService, RoutingService, StateWithClientAuth, UserIdService } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class AscAuthServicese  extends AuthService {

  constructor(
   
    protected store: Store<StateWithClientAuth>,
    protected userIdService: UserIdService,
    protected oAuthLibWrapperService: OAuthLibWrapperService,
    protected authStorageService: AuthStorageService,
    protected authRedirectService: AuthRedirectService,
    protected routingService: RoutingService,
   
  ) 
  {
    super(store, userIdService, oAuthLibWrapperService, authStorageService, authRedirectService, routingService,);
    
   
   }
}
