import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-configurations',
  templateUrl: './user-configurations.component.html',
  styleUrls: ['./user-configurations.component.scss']
})


export class UserConfigurationsComponent implements OnInit {

  constructor() { }

  userconfig = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    userRole: new FormControl('')
  });
  
  optionsModel: number[] = [];
  myOptions: IMultiSelectOption[] = [
    // { id: 1, name: 'Car brands', isLabel: true },
    // { id: 2, name: 'Volvo', parentId: 1 },
    // { id: 3, name: 'Honda', parentId: 1 },
    // { id: 4, name: 'BMW', parentId: 1 },
    // { id: 5, name: 'Colors', isLabel: true },
    // { id: 6, name: 'Blue', parentId: 5 },
    // { id: 7, name: 'Red', parentId: 5 },
    // { id: 8, name: 'White', parentId: 5 }
  ];

  // Settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    buttonClasses: 'btn',
    containerClasses:'d-block',
    displayAllSelectedText: true
  };

  ngOnInit() {
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