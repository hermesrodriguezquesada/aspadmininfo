import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { User, UserResponse } from '../models/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(private http:HttpClient, private router:Router) {
    this.checkToken();
   }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData: User): Observable<UserResponse | void> {
    return this.http.post<UserResponse>(`auth/signin`,authData)
      .pipe(
        map( (res: UserResponse) => {
             const token = res.data['token'];
             const fullname = res.data['user']['firstName'];
             const userId = res.data['user']['id'].toString();
             this.saveToken(token, fullname, userId);
             this.loggedIn.next(true);
             return res;
          }
        ),
        catchError( (err) => this.handlerError(err) )
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('fullname');
    localStorage.removeItem('userId');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  private checkToken():void {
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    if (isExpired) {
      this.logout();
    }
    else{
      this.loggedIn.next(true);
    }
  }

  private saveToken(token: string, fullname: string, userId: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('fullname', fullname);
    localStorage.setItem('userId', userId);
  }

  private handlerError(err:any): Observable<never> {
    let errorMessage = 'Error recibiendo los datos';
    if (err) {
        errorMessage = `Error code ${err.message}`;
    }
    return throwError(errorMessage);
  }
}
