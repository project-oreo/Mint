import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vid: any;
  constructor() { }

  ngOnInit() {
    this.vid = document.getElementById('video1') as any;
    this.vid.muted = true;
  }
}
