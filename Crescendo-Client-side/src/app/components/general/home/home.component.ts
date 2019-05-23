import { Component, OnInit } from '@angular/core';
import { Gig } from 'src/app/classes/gig';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gigs = new Array<Gig>();
  createResponse: Subscription;
  lastStatus = 200;

  vid: any;
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.homeService.Request();
    this.createResponse = this.homeService.$requestGigStatus.subscribe(status => {
      // do something with the status here
      if (status === 200) {
        this.gigs = this.homeService.gigs;
      } else {
        // set status to lastStatus to display appropriate error message
        this.lastStatus = status;
      }
    });
    this.vid = document.getElementById('video1') as any;
    this.vid.muted = true;
  }
}
