import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SuccessfullModalsComponent } from './successfull-modals/successfull-modals.component';
import { ErrorModalsComponent } from './error-modals/error-modals.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalOld() {
    this.modalRef = this.modalService.show(SuccessfullModalsComponent,  {
      initialState: {
        title: 'Modal Success',
       // data: {}
      }
    });
  }
  openModal() {
    console.log('Login');

    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.modalRef = this.modalService.show(SuccessfullModalsComponent, {initialState});
    this.modalRef.content.closeBtnName = 'Close';
  // }
    
  //   this.modalRef = this.modalService.show(SuccessfullModalsComponent,  {
  //     initialState: {
  //       title: 'Modal Success',
  //       testcontent:'Test Fail',
  //       Imagepath:'../../../../assets/images/Logo.png'
  //      // data: {}
  //     }
  //   });

  //   setTimeout(() => {
  //     this.modalRef.hide();
  //  }, 30000)

  }

  

  errorModal() {
    this.modalRef = this.modalService.show(ErrorModalsComponent,  {
      initialState: {
        title: 'Modal Error',
       // data: {}
      }
    });
  }
  

 
  
  // modalRef?: BsModalRef;

  // constructor(private modalService: BsModalService) {}

  // openModal(template: TemplateRef<any>) {
  //     this.modalRef = this.modalService.show(template);
  // }

  // close(template: TemplateRef<any>) {
  //     this.modalRef = this.modalService.show(template);
  // }

//   constructor(private modalService: BsModalService) {}

//   openModal(template: TemplateRef<any>) {
//      this.modalService.show(template);
//   }
//   close(template: TemplateRef<any>) {
//     this.modalService.hide();
//  }

  ngOnInit(): void {
  }

}
