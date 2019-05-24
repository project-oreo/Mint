import { Component, OnInit, OnDestroy } from '@angular/core';
import { GigregistrationService } from 'src/app/services/gigregistration.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-promoterendorse',
  templateUrl: './promoterendorse.component.html',
  styleUrls: ['./promoterendorse.component.css']
})
export class PromoterendorseComponent implements OnInit {

  constructor(private gigService: GigregistrationService, private homeService: HomeService, private router: Router) { }

  name = '';
  startTime: any;
  location = '';
  Security = true;
  capacity = 0;
  closed = false;
  gigResponse: Subscription;
  lastStatus = 200;

  ngOnInit() {
    this.gigResponse = this.gigService.$gigStatus.subscribe(status => {
      if (status === 200) {
        alert('Gig successfully endorsed!');
        this.router.navigateByUrl('');
      } else {
        alert('Invalid credentials. Please try again!');
        this.lastStatus = status;
      }
    });
  }

  submit() {
    this.gigService.register(this.name, this. startTime, this.location, this.Security, this.capacity, this.closed);
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
