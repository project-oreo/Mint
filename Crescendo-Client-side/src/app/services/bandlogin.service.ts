import { Injectable } from '@angular/core';
import { Subject, pipe } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Band } from '../models/band';
import { Gig } from '../classes/gig';

@Injectable({
  providedIn: 'root'
})
export class BandloginService {
  private RequestGigSubject = new Subject<number>();
  public  $requestGigStatus = this.RequestGigSubject.asObservable();
  assignedGigs = new Array<Gig>();
  invitedGigs = new Array<Gig>();
  band;
  bandhomeComp;
  myProfileComp;
  private loginStatusSubject = new Subject<number>();
  public  $loginStatus = this.loginStatusSubject.asObservable();
  bandId;

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): void {
    const payload = {
      email,
      password
    };

    this.httpClient.post('http://ec2-18-222-31-237.us-east-2.compute.amazonaws.com:8081/Crescendo/bands/login', payload, {
      observe: 'response'
      }).pipe(map(response => response.body as Band)).subscribe(response => {
        this.loginStatusSubject.next(200);
        localStorage.setItem('bandId', response.id.toString());
        this.AssignedGigs();
        this.Invite();
        this.getBandInfo();
      }, err => {
        this.loginStatusSubject.next(err.status);
      });
  }

  AssignedGigs(): void {
    this.httpClient.get(`http://ec2-18-222-31-237.us-east-2.compute.amazonaws.com:8081/` +
                        `Crescendo/bands/gigs/${localStorage.getItem('bandId')}`, {
      observe: 'response'
    }).pipe(map(response => response.body as Array<Gig>)).subscribe(response => {
        this.RequestGigSubject.next(200);
        this.bandhomeComp = true;
        this.myProfileComp = false;
        response.forEach(element => {
          this.assignedGigs.push(element);
        });
        }, err => {
    });
  }

  Invite(): void {
    this.httpClient.get(`http://ec2-18-222-31-237.us-east-2.compute.amazonaws.com:8081/` +
                        `Crescendo/bands/invites/${localStorage.getItem('bandId')}`, {
      observe: 'response'
    }).pipe(map(response => response.body as Array<Gig>)).subscribe(response => {
        this.RequestGigSubject.next(200);
        this.bandhomeComp = true;
        this.myProfileComp = false;
        response.forEach(element => {
          this.invitedGigs.push(element);
        });
        }, err => {
    });
  }

  Approve(status: string): void {
    const payload = {
      status
    };
    if (!this.bandhomeComp) {
      this.httpClient.put('http://ec2-18-222-31-237.us-east-2.compute.amazonaws.com:8081/Crescendo/resolve/' +
                          '{this.bandStats[0]}/somethinghererefgigid/buttonApproveorDeny', payload, {
        observe: 'response'
      }).subscribe(response => {

          }, err => {
      });
    }
  }

  getBandInfo(): void {
    this.httpClient.get(`http://ec2-18-222-31-237.us-east-2.compute.amazonaws.com:8081/Crescendo/bands/${localStorage.getItem('bandId')}`, {
      observe: 'response'
      }).pipe(map(response => response.body as Band)).subscribe(response => {
        this.loginStatusSubject.next(200);
        this.band = response;
      }, err => {
        this.loginStatusSubject.next(err.status);
      });
  }
}
