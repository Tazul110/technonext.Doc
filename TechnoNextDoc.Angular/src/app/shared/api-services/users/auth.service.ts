import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginRequest, UserResponse, registrationModel } from '../../api-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseApiUrl = 'https://localhost:7267';

  constructor(private http: HttpClient) { }

  Login(req: UserLoginRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.baseApiUrl + '/api/user-management/login', req);
  }



  //private apiUrl = 'https://localhost:7267/api/user-management/register';

  Register(request: registrationModel): Observable<boolean> {
    return this.http.post<boolean>(this.baseApiUrl + '/api/user-management/register', request);
  }



}
