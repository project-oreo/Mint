import { Component, OnInit, OnDestroy } from '@angular/core';
import { GigregistrationService } from 'src/app/services/gigregistration.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { PromoterloginService } from 'src/app/services/promoterlogin.service';
import { PromoterEndorseService } from 'src/app/services/promoter-endorse.service';

@Component({
  selector: 'app-promoterendorse',
  templateUrl: './promoterendorse.component.html',
  styleUrls: ['./promoterendorse.component.css']
})
export class PromoterendorseComponent implements OnInit {

  constructor(private promoterLoginService: PromoterloginService, private promoterEndorseService: PromoterEndorseService, private router: Router) { }

  gigName = '';
  startTime: any;
  location = '';
  Security = true;
  maxCapacity;
  closed = false;
  gigResponse: Subscription;
  lastStatus = 200;
  promoter;

  ngOnInit() {
   this.promoter = this.promoterLoginService.promoter;
   console.log(this.promoter.id);
  }

  submit() {
    this.promoterEndorseService.register(this.gigName, this. startTime, this.location, this.promoter.id, this.Security, this.maxCapacity, this.closed);
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    if (this.gigResponse) {
      this.gigResponse.unsubscribe();
    }
  }

  clearStorage() {
    localStorage.clear();
  }

}
