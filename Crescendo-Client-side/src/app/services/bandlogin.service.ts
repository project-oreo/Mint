import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BandloginService {

  private loginStatusSubject = new Subject<number>();
  public  $loginStatus = this.loginStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): void {
    const payload = {
      email: email,
      password: password
    };

    this.httpClient.post('http://ec2-18-222-31-237.us-east-2.compute.amazonaws.com:8081/Crescendo/bands/login', payload, {
      observe: 'response'
      })
      .subscribe(response => {
        this.loginStatusSubject.next(200);
      }, err => {
        this.loginStatusSubject.next(err.status);
      });
  }
}
