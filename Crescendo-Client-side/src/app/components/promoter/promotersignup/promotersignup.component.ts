import { Component, OnInit, OnDestroy } from '@angular/core';
import { PromotersignupService } from 'src/app/services/promotersignup.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-promotersignup',
  templateUrl: './promotersignup.component.html',
  styleUrls: ['./promotersignup.component.css']
})
export class PromotersignupComponent implements OnInit {

  constructor(private promoterSignupService: PromotersignupService, private homeService: HomeService, private router: Router) { }

  email = '';
  password = '';
  confirmpassword = '';
  name = '';
  website: any;
  signupResponse: Subscription;
  lastStatus = 200;

  ngOnInit() {
    this.signupResponse = this.promoterSignupService.$signupStatus.subscribe(status => {
      if (status === 200) {
        alert('Signup successful! Proceeding to the login page');
        this.router.navigateByUrl('promoterlogin');
      } else {
        alert('Invalid credentials. Please try again!');
        this.lastStatus = status;
      }
    });
  }

  formValidation(): boolean {
    return this.email.length > 0 && this.name.length > 0 && this.password === this.confirmpassword;
  }

  submit() {
    this.promoterSignupService.signup(this.email, this.password, this.name, this.website);
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    if (this.signupResponse) {
      this.signupResponse.unsubscribe();
    }
  }

  clearStorage() {
    localStorage.clear();
  }

}
