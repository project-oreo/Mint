import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HomeService } from 'src/app/services/home.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Gig } from 'src/app/classes/gig';

@Component({
  selector: 'app-promoterhome',
  templateUrl: './promoterhome.component.html',
  styleUrls: ['./promoterhome.component.css']
})

export class PromoterhomeComponent implements OnInit {
  gigs = new Array<Gig>();
  createResponse: Subscription;
  lastStatus = 200;

  constructor(private modalRef: BsModalRef, private modalService: BsModalService,
              private homeService: HomeService, private router: Router) { }

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
  }

  clearStorage() {
    localStorage.clear();
  }

  openGig(template: TemplateRef<any>) {
      console.log(template);
      this.modalRef = this.modalService.show(template,
        {
          class: 'modal-dialog-centered modal-lg'
        });
  }

  openBand(template: TemplateRef<any>) {
    console.log(template);
    this.modalRef = this.modalService.show(template,
      {
        class: 'modal-dialog modal-dialog-centered modal-lg'
      });
}
}
