import { Component, OnInit, OnDestroy } from '@angular/core';
import { BandloginService } from 'src/app/services/bandlogin.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bandlogin',
  templateUrl: './bandlogin.component.html',
  styleUrls: ['./bandlogin.component.css']
})
export class BandloginComponent implements OnInit {

  constructor(private bandLoginService: BandloginService, private router: Router) { }

  email = '';
  password = '';
  loginResponse: Subscription;
  lastStatus = 200;

  ngOnInit() {
    this.loginResponse = this.bandLoginService.$loginStatus.subscribe(status => {
      if (status === 200) {
        this.router.navigateByUrl('bandmaster/bandhome');
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
    this.bandLoginService.login(this.email, this.password);
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    if (this.loginResponse) {
      this.loginResponse.unsubscribe();
    }
  }

}
