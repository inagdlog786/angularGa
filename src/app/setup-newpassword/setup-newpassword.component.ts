import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-newpassword',
  templateUrl: './setup-newpassword.component.html',
  styleUrls: ['./setup-newpassword.component.scss']
})
export class SetupNewpasswordComponent implements OnInit {
  
  newPasswordType!: boolean;
  reEnterPasswordType!: boolean;

  togglenewPassword() {
    this.newPasswordType = !this.newPasswordType;
  }
  togglereEnterPasswordType() {
    this.reEnterPasswordType = !this.reEnterPasswordType;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
