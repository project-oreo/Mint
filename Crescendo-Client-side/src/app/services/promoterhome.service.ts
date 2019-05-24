import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Band } from '../models/band';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromoterhomeService {

  private inviteStatusSubject = new Subject<number>();
  public $inviteStatus = this.inviteStatusSubject.asObservable();

  private bandExistsStatusSubject = new Subject<number>();
  public $bandExists = this.bandExistsStatusSubject.asObservable();

  public $bandsAtGig = new Array<Band>();

  constructor(private httpClient: HttpClient) { }


  inviteBands(gigId: number, bandId: number){
    this.httpClient.post(`http://ec2-18-222-31-237.us-east-2.compute.amazonaws.com:8081/Crescendo/promoters/invite/${bandId}/${gigId}`, {
        observe: 'response'
      }).subscribe(response => {
        this.inviteStatusSubject.next(200);
        alert('Invite successful!');
      }, err => {
        this.inviteStatusSubject.next(err.status);
        alert('Unable to invite band to your gig!')
      });
  }

  bandExists(gigId: number){
    this.httpClient.get(`http://ec2-18-222-31-237.us-east-2.compute.amazonaws.com:8081/Crescendo/gigs/allbands/${gigId}`, {
        observe: 'response'
    }).pipe(map(response => response.body as Array<Band>))
    .subscribe(response => {
      this.bandExistsStatusSubject.next(200);
      console.log('bands pulled successfully');
      response.forEach(element => {
        this.$bandsAtGig.push(element);
        console.log(this.$bandsAtGig);
       });
      }, err => { console.log('didnt pull anything');
     });
  }

}
