import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Gig } from '../classes/gig';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BandloginService } from './bandlogin.service';

@Injectable({
  providedIn: 'root'
})
export class BandhomeService {
  private RequestGigSubject = new Subject<number>();
  public  $requestGigStatus = this.RequestGigSubject.asObservable();
  gigs = new Array<Gig>();
  bandhomeComp;
  myProfileComp;

  constructor(private httpClient: HttpClient,  private bandloginService: BandloginService) { }

  AssignedGigs(): void {
    if (!this.bandhomeComp) {
      this.httpClient.get(`http://ec2-18-220-247-101.us-east-2.compute.amazonaws.com:8081/Crescendo/gigs/${this.bandStats[0]}`, {
        observe: 'response'
      }).pipe(map(response => response.body as Array<Gig>)).subscribe(response => {
          this.RequestGigSubject.next(200);
          this.bandhomeComp = true;
          this.myProfileComp = false;
          response.forEach(element => {
          this.gigs.push(element);
          });
          }, err => {
      });
    }
  }

  Invite(): void {
    if (!this.bandhomeComp) {
      this.httpClient.get(`http://ec2-18-220-247-101.us-east-2.compute.amazonaws.com:8081/Crescendo/invites/${this.bandStats[0]}`, {
        observe: 'response'
      }).pipe(map(response => response.body as Array<Gig>)).subscribe(response => {
          this.RequestGigSubject.next(200);
          this.bandhomeComp = true;
          this.myProfileComp = false;
          response.forEach(element => {
          this.gigs.push(element);
          });
          }, err => {
      });
    }
  }

  Approve(status: string): void {
    const payload = {
      status
    };
    if (!this.bandhomeComp) {
      this.httpClient.put('http://ec2-18-220-247-101.us-east-2.compute.amazonaws.com:8081/Crescendo/resolve/' +
                          '{this.bandStats[0]}/somethinghererefgigid/buttonApproveorDeny', payload, {
        observe: 'response'
      }).subscribe(response => {

          }, err => {
      });
    }
  }
}
