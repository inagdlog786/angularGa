import { Component, OnInit } from '@angular/core';


import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

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

  constructor() {}
   
  

  ngOnInit(): void {
   this.onFindSelectedList();
  }  
  
  onSelect(item:any){
  this.data.filter(selectCheckbox=>{
      if(selectCheckbox.label===item.label){
        selectCheckbox.selected=false;
      }      
    });
    this.onFindSelectedList();
  }

  // Select/Unselect All checkboxes and ClearAll
  
  toogleSelect(event:any){
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

  // Selected item count
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
