import { Component, OnInit } from '@angular/core';
import { BandloginService } from 'src/app/services/bandlogin.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-bandprofile',
  templateUrl: './bandprofile.component.html',
  styleUrls: ['./bandprofile.component.css']
})
export class BandprofileComponent implements OnInit {
  band;

  constructor(private bandloginService: BandloginService, private homeService: HomeService) { }

  ngOnInit() {
    this.band = this.bandloginService.band;
    console.log(this.band);
  }

  clearStorage() {
    localStorage.clear();
  }

}
