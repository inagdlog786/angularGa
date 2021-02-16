import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
