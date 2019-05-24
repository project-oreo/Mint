import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Promoter } from '../models/promoter';
import { map } from 'rxjs/operators';
import { Gig } from '../classes/gig';
import { Band } from '../models/band';

@Injectable({
  providedIn: 'root'
})
export class PromoterloginService {

  private loginStatusSubject = new Subject<number>();
  public  $loginStatus = this.loginStatusSubject.asObservable();
  private promoterGigSubject = new Subject<number>();
  public $promoterGig = this.promoterGigSubject.asObservable();
  private pullAllBandsSubject = new Subject<number>();
  public $pullAllBands = this.pullAllBandsSubject.asObservable();
  promoter;
  promoterStats;
  gigs = new Array<Gig>();
  allBands = new Array<Band>();

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): void {
    const payload = {
      email: email,
      password: password
    };

    this.httpClient.post('http://ec2-18-222-31-237.us-east-2.compute.amazonaws.com:8081/Crescendo/promoters/login', payload, {
      observe: 'response'
      }).pipe(map(response => response.body as Promoter))
      .subscribe(response => {
        this.promoter = response;
        this.loginStatusSubject.next(200);
        this.promoterGigs();
        this.pullAllBands();
      }, err => {
        this.loginStatusSubject.next(err.status);
      });

  }

  promoterGigs() {
    this.httpClient.get(`http://ec2-18-222-31-237.us-east-2.compute.amazonaws.com:8081/Crescendo/promoters/gigs/${this.promoter.id}`, {
      observe: 'response'
    }).pipe(map(response => response.body as Array<Gig>))
    .subscribe(response => {
      this.promoterGigSubject.next(200);
      response.forEach(element => {
        this.gigs.push(element);
        console.log(this.gigs);
      });
      }, err => { console.log('nothing is coming back');
    });

  }

  pullAllBands() {
    this.httpClient.get('http://ec2-18-222-31-237.us-east-2.compute.amazonaws.com:8081/Crescendo/promoters/allbands', {
      observe: 'response'
    }).pipe(map(response => response.body as Array<Band>))
    .subscribe(response => {
      this.pullAllBandsSubject.next(200);
      response.forEach(element => {
        this.allBands.push(element);
        console.log(this.allBands);
      });
      }, err => {;
    });
  }

}
