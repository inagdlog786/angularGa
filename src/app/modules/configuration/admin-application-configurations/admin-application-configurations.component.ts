import { Component, OnInit } from '@angular/core';

import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';
import { FormControl, FormGroup } from '@angular/forms';


import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-admin-application-configurations',
  templateUrl: './admin-application-configurations.component.html',
  styleUrls: ['./admin-application-configurations.component.scss']
})
export class AdminApplicationConfigurationsComponent implements OnInit {

  constructor() { }

  
  adminconfig = new FormGroup({
    userRole: new FormControl(''),
    test: new FormControl('')
  });

  roleOptionsModel: number[] = [];
  roleOptions: IMultiSelectOption[] = [ ];
  

  // Settings configuration
  roleSettings: IMultiSelectSettings = {
    enableSearch: false,
    buttonClasses: 'btn w-100 text-left',
    containerClasses:'d-block multi-select-option',
    dynamicTitleMaxItems: 0,
    displayAllSelectedText: true,
    // showCheckAll:true,
    showUncheckAll:true,
    itemClasses:"check-control-uncheck"
  };

  // Text configuration
  roleTexts: IMultiSelectTexts = {
    defaultTitle: 'James',
    checked: 'Role',
    checkedPlural: 'Roles',
    allSelected: 'All Roles Selected',
    checkAll: 'Select all',
    uncheckAll: 'UnSelect all x',
  };


  // new drop
  dropdownList: Array<any> = [];;
  selectedItems: Array<any> = [];
  dropdownSettings = {
    singleSelection: false,
      idField: 'item_id',
      defaultTitle: 'James',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 1,
      allowSeachFilter: true
  };

  ngOnInit(): void {
    this.roleOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
      { id: 4, name: 'Option 4' },
    ];

    // new drop
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
  }

  
  onChange() {
    console.log(this.roleOptionsModel);
  }

}
