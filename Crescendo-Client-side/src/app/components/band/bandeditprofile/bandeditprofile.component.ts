import { Component, OnInit } from '@angular/core';
import { EditProfileService } from 'src/app/services/edit-profile.service';
import { BandloginService } from 'src/app/services/bandlogin.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bandeditprofile',
  templateUrl: './bandeditprofile.component.html',
  styleUrls: ['./bandeditprofile.component.css']
})
export class BandeditprofileComponent implements OnInit {
  id = 0;
  email = '';
  bandName = '';
  bio = '';
  genre = '';
  socialMedia: any;
  debutDate: any;
  hourlyRate = 0;
  imageURL: '';
  band;
  editProfile: boolean;
  editResponse: Subscription;
  lastStatus = 200;

  constructor(private editprofileService: EditProfileService, private bandloginService: BandloginService, private router: Router) { }

  ngOnInit() {
    this.editResponse = this.editprofileService.$editStatus.subscribe(status => {
      if (status === 200) {
        alert('Profile was successfully changed!');
        this.router.navigateByUrl('bandmaster/bandprofile');
      } else {
        alert('Something went wrong. Please try again later!');
        this.lastStatus = status;
      }
    });
    this.band = this.bandloginService.band;
    this.editProfile = false;
  }

  formValidation(): boolean {
    return this.email.length > 0 && this.hourlyRate > 0.01 && this.bandName.length > 0 &&
    this.imageURL.length > 0 && this.bio.length > 0 && this.genre.length > 0 && this.socialMedia.length > 0;
  }

  submit() {
    this.editprofileService.edit(localStorage.getItem('bandId'), this.email, this.bandName, this.bio,
                                 this.genre, this.debutDate, this.socialMedia, this.hourlyRate, this.imageURL);
  }

  clearStorage() {
    localStorage.clear();
  }

}
