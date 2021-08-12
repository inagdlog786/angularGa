import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-error-modals',
  templateUrl: './error-modals.component.html',
  styleUrls: ['./error-modals.component.scss']
})
export class ErrorModalsComponent implements OnInit {

  title: any;
  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

}
