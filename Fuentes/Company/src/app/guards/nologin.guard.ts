import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {

  constructor(private router: Router,
              private AFauth: AngularFireAuth) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.AFauth.authState.pipe(map(auth => {

// tslint:disable-next-line: deprecation
        if (isNullOrUndefined(auth)) {

         return true;
        } else {
         this.router.navigate(['/tabs/tab1']);
         return false;
        }
       }));
  }
}
