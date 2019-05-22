import { Component, OnInit, OnDestroy } from '@angular/core';
import { PromoterloginService } from 'src/app/services/promoterlogin.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-promoterlogin',
  templateUrl: './promoterlogin.component.html',
  styleUrls: ['./promoterlogin.component.css']
})
export class PromoterloginComponent implements OnInit {

  constructor(private promoterLoginService: PromoterloginService, private router: Router) { }

  email = '';
  password = '';
  loginResponse: Subscription;
  lastStatus = 200;

  ngOnInit() {
    this.loginResponse = this.promoterLoginService.$loginStatus.subscribe(status => {
      if (status === 200) {
        this.router.navigateByUrl('promotermaster/promoterhome');
      } else {
        alert('Email or password is incorrect.');
        this.lastStatus = status;
      }
    });
  }

  formValidation(): boolean {
    return this.email.length > 0 && this.password.length > 0;
  }

  submit() {
    this.promoterLoginService.login(this.email, this.password);
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    if (this.loginResponse) {
      this.loginResponse.unsubscribe();
    }
  }

}
