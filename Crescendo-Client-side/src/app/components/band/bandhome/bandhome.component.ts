import { Component, OnInit } from '@angular/core';
import { BandhomeService } from 'src/app/services/bandhome.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Gig } from 'src/app/classes/gig';
import { BandloginService } from 'src/app/services/bandlogin.service';

@Component({
  selector: 'app-bandhome',
  templateUrl: './bandhome.component.html',
  styleUrls: ['./bandhome.component.css']
})
export class BandhomeComponent implements OnInit {

  gigs = new Array<Gig>();
  createResponse: Subscription;
  lastStatus = 200;
  vid: any;
  bandStats;

  constructor(private bandhomeService: BandhomeService, private bandloginService: BandloginService, private router: Router) { }

  ngOnInit() {
    this.bandhomeService.AssignedGigs();
    this.bandhomeService.Invite();
    this.bandStats = this.bandloginService.bandStats;
    this.createResponse = this.bandhomeService.$requestGigStatus.subscribe(status => {
      // do something with the status here
      if (status === 200) {
        this.gigs = this.bandhomeService.gigs;
      } else {
        // set status to lastStatus to display appropriate error message
        this.lastStatus = status;
      }
    });
  }
}
