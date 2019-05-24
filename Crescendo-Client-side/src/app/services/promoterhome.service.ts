import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoterhomeService {

  private inviteStatusSubject = new Subject<number>();
  public $inviteStatus = this.inviteStatusSubject.asObservable();

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

}
