import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-promoterhome',
  templateUrl: './promoterhome.component.html',
  styleUrls: ['./promoterhome.component.css']
})

export class PromoterhomeComponent implements OnInit {

  constructor(private modalRef: BsModalRef, private modalService: BsModalService) { }

  ngOnInit() {
  }
  openGig(template: TemplateRef<any>) {
      console.log(template);
      this.modalRef = this.modalService.show(template,
        {
          class: 'modal-dialog-centered modal-lg'
        });
  }

  openBand(template: TemplateRef<any>) {
    console.log(template);
    this.modalRef = this.modalService.show(template,
      {
        class: 'modal-dialog modal-dialog-centered modal-lg'
      });
}
}
