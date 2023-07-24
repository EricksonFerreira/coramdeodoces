import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './login.model';
import { Register } from './register.model';
import { Token } from './token.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private baseUrl: string = environment.baseApiUrl;
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}

  login(data: Partial<Login>) {
    return this.http
      .post<any>(`${this.baseUrl}auth/login`, data)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.currentUser = res.user;
        this.router.navigate(['/venda']);
      });
  }

  register(data: Partial<Register>): Observable<Register> {
    return this.http.post<Register>(`${this.baseUrl}auth/register`, data);
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/auth/login']);
    }
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.baseUrl}auth/user-profile`;
    console.log(this.headers)
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
