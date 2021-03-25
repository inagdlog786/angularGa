import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sftp-configurations',
  templateUrl: './sftp-configurations.component.html',
  styleUrls: ['./sftp-configurations.component.scss']
})
export class SftpConfigurationsComponent implements OnInit {

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
      // readonly = true;
      // myTime = new Date();

      myTime: Date = new Date();
      minTime: Date = new Date();
      maxTime: Date = new Date();

  //Time End

  constructor() { 
    this.minTime.setHours(20);
    this.minTime.setMinutes(0);
    this.maxTime.setHours(23);
    this.maxTime.setMinutes(59);
  }

  ngOnInit(): void {
  }

}
