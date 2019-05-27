import { Component, OnInit } from '@angular/core';
import { EditProfileService } from 'src/app/services/edit-profile.service';
import { BandloginService } from 'src/app/services/bandlogin.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Band } from 'src/app/models/band';
import { Url } from 'url';

@Component({
  selector: 'app-bandeditprofile',
  templateUrl: './bandeditprofile.component.html',
  styleUrls: ['./bandeditprofile.component.css']
})
export class BandeditprofileComponent implements OnInit {
  band = this.bandloginService.band;
  email = this.band.email;
  bandName = this.band.bandName;
  bio = this.band.bio;
  genre = this.band.genre;
  debutDate: Date = this.band.debutDate;
  socialMedia: Url = this.band.socialMedia;
  hourlyRate = this.band.hourlyRate;
  imageURL = this.band.imageURL;
  hashedPassword = this.hashedPassword;
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
    // this.band = this.bandloginService.band;
    this.editProfile = false;
    this.hashedPassword = localStorage.getItem('hashedPass');
  }

  formValidation(): boolean {
    return this.email.length > 0 && this.hourlyRate > 0.01 && this.bandName.length > 0 &&
    this.imageURL.length > 0 && this.bio.length > 0 && this.genre.length > 0;
  }

  submit() {
    this.editprofileService.edit(Number(localStorage.getItem('bandId')), this.email, this.bandName, this.bio,
                                 this.genre, this.debutDate, this.socialMedia, this.hourlyRate, this.imageURL, this.hashedPassword);
  }

  clearStorage() {
    localStorage.clear();
  }

}
