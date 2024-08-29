import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'http://localhost:4000/user/login';
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
    this.initializeToken();
  }

  private initializeToken(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('accessToken');
      if (token) {
        this.tokenSubject.next(token);
      }
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiURL, { email, password }).pipe(
      tap(response => {
        const token = response.token;
        if (token) {
          if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('accessToken', token);
          }
          this.tokenSubject.next(token);
        } else {
          console.error('Token not found in response');
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => new Error('Login failed'));
      })
    );
  }

  getToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  isAuthenticated(): boolean {
    return this.tokenSubject.value !== null;
  }

  logout(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('accessToken');
    }
    this.tokenSubject.next(null);
  }
}
