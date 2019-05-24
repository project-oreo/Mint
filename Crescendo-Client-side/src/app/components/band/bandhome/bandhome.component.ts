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
  }

  clearStorage() {
    localStorage.clear();
  }
}
