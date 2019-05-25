import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { EditProfileService } from 'src/app/services/edit-profile.service';
import { BandloginService } from 'src/app/services/bandlogin.service';
import { Band } from 'src/app/models/band';

@Component({
  selector: 'app-bandeditprofile',
  templateUrl: './bandeditprofile.component.html',
  styleUrls: ['./bandeditprofile.component.css']
})
export class BandeditprofileComponent implements OnInit {
  id = 0;
  email = '';
  password = '';
  confirmpassword = '';
  name = '';
  bio = '';
  genre = '';
  debutDate: any;
  promotion = '';
  hourlyRate = 0;
  imageURL: '';
  band;

  constructor(private editprofileService: EditProfileService, private bandloginService: BandloginService) { }

  ngOnInit() {
    this.band = this.bandloginService.band;
  }

  formValidation(): boolean {
    return this.email.length > 0 && this. hourlyRate > 0 && this.name.length > 0 &&
           this.password === this.confirmpassword && this.imageURL.length > 0;
  }

  submit() {
    this.editprofileService.edit(localStorage.getItem('bandId'), this.email, this.password, this.name, this.bio,
                                 this.genre, this.debutDate, this.promotion, this.hourlyRate, this.imageURL);
  }

  clearStorage() {
    localStorage.clear();
  }

}
