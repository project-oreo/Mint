import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Gig } from '../classes/gig';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private RequestGigSubject = new Subject<number>();
  public  $requestGigStatus = this.RequestGigSubject.asObservable();
  gigs = new Array<Gig>();
  homeComp;
  loginComp;
  signupComp;

  constructor(private httpClient: HttpClient) { }

  Request(): void {
    if (!this.homeComp) {
      this.httpClient.get('http://ec2-18-220-247-101.us-east-2.compute.amazonaws.com:8081/Crescendo/gigs/', {
        observe: 'response'
      }).pipe(map(response => response.body as Array<Gig>)).subscribe(response => {
          this.RequestGigSubject.next(200);
          this.homeComp = true;
          this.loginComp = false;
          this.signupComp = false;
          response.forEach(element => {
          this.gigs.push(element);
          });
          }, err => {
      });
    }
  }
}
