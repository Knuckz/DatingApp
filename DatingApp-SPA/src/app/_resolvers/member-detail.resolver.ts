import { catchError } from 'rxjs/operators';
import { AlertifyService } from './../_services/alertify.service';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailResolver implements Resolve<User> {
  constructor(private userService: UserService, private router: Router, private alertifyService: AlertifyService) {}

  resolve(router: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(router.params['id']).pipe(
      catchError(error => {
        this.alertifyService.error('Problem retrieving data');
        this.router.navigate(['/members']);
        return of(null);
      })
    )
  }
}
