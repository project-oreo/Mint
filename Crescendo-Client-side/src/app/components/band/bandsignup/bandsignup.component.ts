import { Component, OnInit, OnDestroy } from '@angular/core';
import { BandsignupService } from 'src/app/services/bandsignup.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-bandsignup',
  templateUrl: './bandsignup.component.html',
  styleUrls: ['./bandsignup.component.css']
})
export class BandsignupComponent implements OnInit {

  constructor(private bandSignupService: BandsignupService, private homeService: HomeService, private router: Router) { }

  email = '';
  password = '';
  confirmpassword = '';
  name = '';
  bio = '';
  genre = '';
  debutDate: any;
  promotion = '';
  hourlyRate = 0;
  signupResponse: Subscription;
  lastStatus = 200;

  ngOnInit() {
    this.signupResponse = this.bandSignupService.$signupStatus.subscribe(status => {
      if (status === 200) {
        alert('Signup successful! Proceeding to the login page');
        this.router.navigateByUrl('bandlogin');
      } else {
        alert('Invalid credentials. Please try again!');
        this.lastStatus = status;
      }
    });
  }

  formValidation(): boolean {
    return this.email.length > 0 && this. hourlyRate > 0 && this.name.length > 0 && this.password === this.confirmpassword;
  }

  submit() {
    this.bandSignupService.signup(this.email, this.password, this.name, this.bio,
                                  this.genre, this.debutDate, this.promotion, this.hourlyRate);
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
