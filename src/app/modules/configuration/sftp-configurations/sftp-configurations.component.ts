import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-sftp-configurations',
  templateUrl: './sftp-configurations.component.html',
  styleUrls: ['./sftp-configurations.component.scss']
})
export class SftpConfigurationsComponent implements OnInit {


  savespinner = 'ssp';

  fieldTextType!: boolean;
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  sftpconfig = new FormGroup({    
    sftpUserName: new FormControl(''),
    sftpPassword: new FormControl(''),
    sftpFeedType: new FormControl(''),
    sftpvalidationFile: new FormControl(''),
    sftpdataUserName: new FormControl(''),
    sftpUrl: new FormControl(''),
    sftpFeedCategory: new FormControl(''),
    sftpEffectiveStartDate: new FormControl(''),
    sftpEffectiveEndtDate: new FormControl(''),
    sftpFrequency: new FormControl(''),
    pickTime: new FormControl(''),
    sftpTimeZone: new FormControl(''),
    sftpFolder: new FormControl('')
  });

  //Time
      isMeridian = false;

      minTime: Date = new Date();
      maxTime: Date = new Date();

      mytime: Date | undefined = new Date();
      isValid!: boolean;  

      mstep = 60;

  //Time End

  constructor(private spinner: NgxSpinnerService) { 
    this.minTime.setHours(8);
    this.minTime.setMinutes(0);
    this.maxTime.setHours(12);
    this.maxTime.setMinutes(30);
  }

// Show spinner  with click function
  showSpinner(save: string) {
    this.spinner.show(save);  
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide(save);
    }, 5000);
  }
// Show spinner  with click function End

  ngOnInit(): void {
    const time = new Date();
    time.setHours(8);
    time.setMinutes(0);
 
    this.mytime = time;

// Not Required Line 72-80
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
// Not Required  Close

  }

}
