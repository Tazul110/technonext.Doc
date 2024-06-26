import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { UserLoginRequest, UserRequest, UserResponse } from '../../api-models';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserAction, UserState } from '../../../store';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get url(){
    return `${environment.baseUrl}user-management`;
  }
  constructor(
    private http: HttpClient,
    private store: Store,
    private jwtHelper: JwtHelperService
  ) { }


  signOut(): Promise<any> {
    return new Promise(resolve => {
      window.sessionStorage.clear();
      this.store.dispatch(UserAction.Logout);
      resolve(true);
    });
  }

  public getToken(): string | null {
    return this.store.selectSnapshot(UserState.token);
  }

  public saveUser(user: any): void {
    this.store.dispatch(new UserAction.SetUserData(user));
  }

  public updateUser(user: any): void {
    this.store.dispatch(new UserAction.SetUserData(user));
  }

  public isTokenValid(): boolean {
    let token = this.getToken() as string;

    console.group("Token")
    const decodedToken = this.jwtHelper.decodeToken(token);
    console.log("decodedToken", decodedToken);
    const expirationDate = this.jwtHelper.getTokenExpirationDate(token);
    console.log("expirationDate", expirationDate);
    const isExpired = this.jwtHelper.isTokenExpired(token);
    console.log("isExpired", isExpired);

    var current_time = new Date().getTime() / 1000;
    console.log("expiryTimeFromServer", decodedToken?.exp);
    console.log("current_time", current_time);
    console.groupEnd()

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else return false;
  }

  public decodeToken(): any | null {
    const token = this.getToken();
    if (token) {
      let decodToken = this.jwtHelper.decodeToken(token);
      return decodToken;
    }
    else return null;
  }

  public getUser(): any {
    return this.store.selectSnapshot(UserState.user);
  }

  public get UserId(): number {
    let user = this.getUser();
    return user && user.id;
  }


  login(request: UserLoginRequest): Observable<UserResponse>{
    return this.http.post<UserResponse>(`${this.url}/login`, request);
  }
}
