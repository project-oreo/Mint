import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gig } from 'src/app/classes/gig';
import { BandloginService } from 'src/app/services/bandlogin.service';

@Component({
  selector: 'app-bandhome',
  templateUrl: './bandhome.component.html',
  styleUrls: ['./bandhome.component.css']
})
export class BandhomeComponent implements OnInit {

  assignedGigs = new Array<Gig>();
  invitedGigs = new Array<Gig>();
  createResponse: Subscription;
  lastStatus = 200;
  vid: any;

  constructor(private bandloginService: BandloginService) { }

  ngOnInit() {
    this.assignedGigs = this.bandloginService.assignedGigs;
    this.invitedGigs = this.bandloginService.invitedGigs;
    console.log(this.invitedGigs);
  }

  clearStorage() {
    localStorage.clear();
  }

  Approved(id: number) {
    localStorage.setItem('status', 'Approved');
    localStorage.setItem('gigId', id.toString());
    this.bandloginService.Approve();
  }

  Denied(id: number) {
    localStorage.setItem('status', 'Denied');
    localStorage.setItem('gigId', id.toString());
    this.bandloginService.Approve();
  }
}
