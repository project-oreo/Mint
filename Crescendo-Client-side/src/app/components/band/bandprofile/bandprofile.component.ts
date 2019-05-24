import { Component, OnInit } from '@angular/core';
import { BandloginService } from 'src/app/services/bandlogin.service';

@Component({
  selector: 'app-bandprofile',
  templateUrl: './bandprofile.component.html',
  styleUrls: ['./bandprofile.component.css']
})
export class BandprofileComponent implements OnInit {
  band;

  constructor(private bandloginService: BandloginService) { }

  ngOnInit() {
    this.band = this.bandloginService.band;
    console.log(this.band);
  }

  clearStorage() {
    localStorage.clear();
  }

}
