import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PromoterloginService } from 'src/app/services/promoterlogin.service';
import { Subscription } from 'rxjs';
import { Gig } from 'src/app/classes/gig';
import { Band } from 'src/app/models/band';



@Component({
  selector: 'app-promoterhome',
  templateUrl: './promoterhome.component.html',
  styleUrls: ['./promoterhome.component.css']
})

export class PromoterhomeComponent implements OnInit {

  constructor(private modalRef: BsModalRef, private modalService: BsModalService, private promoterLoginService: PromoterloginService) { }

  loginResponse: Subscription;
  lastStatus = 200;
  promoterStats;
  promoter;
  gigs = new Array<Gig>();
  allBands = new Array<Band>();
  gigId: number;

  ngOnInit() {
        this.promoter = this.promoterLoginService.promoter;
        this.gigs = this.promoterLoginService.gigs;
        this.allBands = this.promoterLoginService.allBands;
        console.log(this.gigs);
  }

  openGig(template: TemplateRef<any>) {
      console.log(template);
      this.modalRef = this.modalService.show(template,
        {
          class: 'modal-dialog-centered modal-lg'
        });
  }

  openBand(template: TemplateRef<any>, id: number) {
    console.log(template);
    this.modalRef = this.modalService.show(template,
      {
        class: 'modal-dialog modal-dialog-centered modal-lg'
      });
    this.gigId = id;
      console.log(id);
  }
  inviteBand(gigId: number, bandId: number)
  {
    console.log(gigId);
    console.log(bandId);
  }
  
}
