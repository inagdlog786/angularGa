import { Component, OnInit } from '@angular/core';

import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-application-configurations',
  templateUrl: './admin-application-configurations.component.html',
  styleUrls: ['./admin-application-configurations.component.scss']
})
export class AdminApplicationConfigurationsComponent implements OnInit {

  constructor() { }

  
  adminconfig = new FormGroup({
    userRole: new FormControl('')
  });

  roleOptionsModel: number[] = [];
  roleOptions: IMultiSelectOption[] = [ ];

  // Settings configuration
  roleSettings: IMultiSelectSettings = {
    enableSearch: false,
    buttonClasses: 'btn w-100 text-left',
    containerClasses:'d-block multi-select-option',
    dynamicTitleMaxItems: 2,
    displayAllSelectedText: true
  };

  // Text configuration
  roleTexts: IMultiSelectTexts = {
    defaultTitle: 'James'
  };

  ngOnInit(): void {
    this.roleOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
      { id: 4, name: 'Option 4' },
    ];
  }

  
  onChange() {
    console.log(this.roleOptionsModel);
  }

}
