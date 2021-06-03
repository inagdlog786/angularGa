import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';

@Component({
  selector: 'app-query-configuration',
  templateUrl: './query-configuration.component.html',
  styleUrls: ['./query-configuration.component.scss']
})
export class QueryConfigurationComponent implements OnInit {

  viewAll=true;
  data=[
    {label:'Bike',value:'bike',selected:true},
    {label:'Car',value:'Car',selected:false},
    {label:'Cycle',value:'Cycle',selected:false},
    {label:'Bike1',value:'Bike1',selected:false},
    {label:'Car1',value:'Car1',selected:false},
    {label:'Cycle1',value:'Cycle1',selected:false},
    {label:'Bike2',value:'Bike2',selected:false},
    {label:'Car2',value:'Car2',selected:false},
    {label:'Cycle2',value:'Cycle2',selected:false},
    {label:'Bike3',value:'Bike3',selected:false},
    {label:'Car3',value:'Car3',selected:false},
    {label:'Cycle3',value:'Cycle3',selected:false},
    {label:'Bike4',value:'Bike4',selected:false},
    {label:'Car4',value:'Car4',selected:false},
    {label:'Cycle4',value:'Cycle4',selected:false}
  ];

  selecteddata:any[]=[];
  selectall:boolean=false;

  optionsModel: number[] = [];

  // Settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: false,
    buttonClasses: 'btn w-100 text-left border',
    containerClasses:'d-block multi-select-option',
    dynamicTitleMaxItems: 0,
    displayAllSelectedText: true,
    // showCheckAll:true,
    showUncheckAll:true,
    itemClasses:"check-control-uncheck"
  };

  // Text configuration
  myTexts: IMultiSelectTexts = {
    defaultTitle: 'James',
    checked: 'Role',
    checkedPlural: 'Roles',
    allSelected: 'All Roles Selected',
    checkAll: 'Select all',
    uncheckAll: 'UnSelect all x',
  };
  // Labels / Parents
  myOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Car brands', isLabel: true },
    { id: 2, name: 'Volvo', parentId: 1 },
    { id: 3, name: 'Honda', parentId: 1 },
    { id: 4, name: 'BMW', parentId: 1 },
    { id: 5, name: 'Colors', isLabel: true },
    { id: 6, name: 'Blue', parentId: 5 },
    { id: 7, name: 'Red', parentId: 5 },
    { id: 8, name: 'White', parentId: 5 }
  ];

  constructor(private fb: FormBuilder) {}
   

  queryConfig!: FormGroup;

  ngOnInit(): void {
   this.onFindSelectedList();

    this.queryConfig = this.fb.group({
      qtest: ['', Validators.required]
    });

  }  


  onChange() {
      console.log(this.optionsModel);
  }
  
  // =================
  onSelect(item:any){
  this.data.filter(selectCheckbox=>{
      if(selectCheckbox.label===item.label){
        selectCheckbox.selected=false;
      }      
    });
    this.onFindSelectedList();
  }

  // Select/Unselect All checkboxes and ClearAll ===========
  
  toogleSelect(event:boolean){
    if(event){
      this.data.filter(toogleCheckbox=>{
        toogleCheckbox.selected = true;
      });
    }else{
      this.data.filter(toogleCheckbox=>{
        toogleCheckbox.selected = false;
      });
    }
    this.onFindSelectedList();
  }

  // Selected item count ==============
  onFindSelectedList(){
    this.selecteddata=[];
    this.data.forEach(checklist=>{
      if(checklist.selected){
        this.selecteddata.push(checklist);
      }
    });
    this.selectall= (this.data.length === this.selecteddata.length) ? true:false;
  }

  
}
