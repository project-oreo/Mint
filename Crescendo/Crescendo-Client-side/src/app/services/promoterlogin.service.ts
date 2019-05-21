import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromoterloginService {

  private loginStatusSubject = new Subject<number>();
  public  $loginStatus = this.loginStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): void {
    const payload = {
      email: email,
      password: password
    };

    this.httpClient.post('Crescendo/promoters/login', payload, {
      observe: 'response'
      })
      .subscribe(response => {
        sessionStorage.setItem('cache', response.body.toString());
        this.loginStatusSubject.next(200);
      }, err => {
        this.loginStatusSubject.next(err.status);
      });
  }
}