import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-bandeditprofile',
  templateUrl: './bandeditprofile.component.html',
  styleUrls: ['./bandeditprofile.component.css']
})
export class BandeditprofileComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  clearStorage() {
    localStorage.clear();
  }

}
