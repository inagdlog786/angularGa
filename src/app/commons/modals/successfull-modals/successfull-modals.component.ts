import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-successfull-modals',
  templateUrl: './successfull-modals.component.html',
  styleUrls: ['./successfull-modals.component.scss']
})
export class SuccessfullModalsComponent implements OnInit {

  title: any;
  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit(): void {  }

}
