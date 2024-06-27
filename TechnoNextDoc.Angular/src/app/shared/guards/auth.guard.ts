import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { UserService } from "../api-services/users/user.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        // Check if application is running on the server
        if (isPlatformServer(this.platformId)) {
            // For SSR, always allow navigation
            return true;
        }

        const isValid = this.userService.isTokenValid();
        if (isValid) {
            return true;
        }

        // If token is not valid, sign out and navigate to login page
        this.userService.signOut();
        return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
    }
}
