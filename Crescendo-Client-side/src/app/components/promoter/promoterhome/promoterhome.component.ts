import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PromoterloginService } from 'src/app/services/promoterlogin.service';
import { Subscription } from 'rxjs';
import { Gig } from 'src/app/classes/gig';
import { Band } from 'src/app/models/band';
import { PromoterhomeService } from 'src/app/services/promoterhome.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-promoterhome',
  templateUrl: './promoterhome.component.html',
  styleUrls: ['./promoterhome.component.css']
})

export class PromoterhomeComponent implements OnInit {
  gigs = new Array<Gig>();
  createResponse: Subscription;
  lastStatus = 200;
  loginResponse: Subscription;
  promoterStats;
  promoter;
  allBands = new Array<Band>();
  gigId: number;
  emptyBandArray = new Array<Band>();
  gigId2;

  gigName = '';
  startTime: any;
  location = '';
  Security = true;
  maxCapacity;
  closed = false;

  constructor(private modalRef: BsModalRef, private modalService: BsModalService, private promoterLoginService: PromoterloginService,
              private promoterHomeService : PromoterhomeService, private router: Router) { }


  ngOnInit() {
        this.promoter = this.promoterLoginService.promoter;
        this.gigs = this.promoterLoginService.gigs;
        this.allBands = this.promoterLoginService.allBands;
        this.promoterHomeService.$cancelStatus.subscribe(status => {
          if (status === 200) {
            console.log('receiving transmission');
            this.ngOnInit(); 
            this.router.navigateByUrl('promotermaster/promoterhome');
          }
        });
        console.log(this.gigs);
  }

  openGig(template: TemplateRef<any>, id: number) {
      console.log(template);
      this.gigId2 = id;
      console.log(id);
      let clickedGig: Gig;
      for(let i=0; i< this.gigs.length; i++)
      {
        if(this.gigId2 === this.gigs[i].id)
        {
          clickedGig = this.gigs[i];
          break;
        }
      }
      this.gigName = clickedGig.gigName;
      this.startTime = clickedGig.startTime;
      this.location = clickedGig.location;
      this.Security = clickedGig.security;
      this.maxCapacity = clickedGig.maxCapacity;
      this.closed = clickedGig.closed;
      localStorage.setItem('gigId', id.toString());
      this.modalRef = this.modalService.show(template,
        {
          class: 'modal-dialog-centered modal-lg'
        });
  }

  openBand(template: TemplateRef<any>, id: number) {
    console.log(template);
    console.log(id);

    this.promoterHomeService.$bandsAtGig.length = 0;
    this.modalRef = this.modalService.show(template,
      {
        class: 'modal-dialog modal-dialog-centered modal-lg'
      });
    this.gigId = id;
    console.log(this.gigId);
    this.promoterHomeService.bandExists(this.gigId);
  }

  openPlaying(template: TemplateRef<any>, id: number) {
    this.promoterHomeService.$bandsPlaying.length = 0;
    this.modalRef = this.modalService.show(template,
      {
        class: 'modal-dialog modal-dialog-centered modal-lg'
      });
    this.gigId = id;
    this.promoterHomeService.bandsPlaying(this.gigId);
  }

  inviteBands(gigId: number, bandId: number){
    console.log(gigId);
    console.log(bandId);
    this.promoterHomeService.inviteBands(gigId,bandId);
  }

  checkBand(bandId: number): boolean{
    let bandExists: boolean = false;
    let idList = new Set<Number>();
    for(let i = 0; i<this.promoterHomeService.$bandsAtGig.length; i++){
      idList.add(this.promoterHomeService.$bandsAtGig[i].id);
    }
    console.log(idList);
    if(idList.has(bandId)){bandExists = true;}
    idList.clear();
    return bandExists;
  }

  submit(){
    this.promoterHomeService.updateGig(this.gigName, this.startTime, this.location, this.Security, this.maxCapacity, this.closed);
  }

  cancel(){
    this.promoterHomeService.cancel();
  }

}
