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

  optionsModel: number[] = [];
  myOptions: IMultiSelectOption[] = [ ];

  // Settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    buttonClasses: 'btn',
    containerClasses:'d-block',
    dynamicTitleMaxItems: 2,
    displayAllSelectedText: true
  };

  ngOnInit(): void {
    this.myOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
      { id: 4, name: 'Option 4' },
    ];
  }

  
  onChange() {
    console.log(this.optionsModel);
  }

}
