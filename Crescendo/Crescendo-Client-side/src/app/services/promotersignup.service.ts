import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromotersignupService {
  private signupStatusSubject = new Subject<number>();
  public $signupStatus = this.signupStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  signup(email: string, password: string, name: string, website: any): void {
    const payload = {
      email: email,
      password: password,
      businessName: name,
      website: website
    };

    console.log(payload);

    this.httpClient.post('Crescendo/promoters/signup', payload, {
      observe: 'response'
      })
      .subscribe(response => {
        this.signupStatusSubject.next(200);
      }, err => {
        this.signupStatusSubject.next(err.status);
      });
  }
}
