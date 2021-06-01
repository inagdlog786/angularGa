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
    {label:'Car',value:'bike',selected:false},
    {label:'Cycle',value:'bike',selected:false},
    {label:'Bike1',value:'bike1',selected:false},
    {label:'Car1',value:'bike1',selected:false},
    {label:'Cycle1',value:'bike1',selected:false},
    {label:'Bike2',value:'bike1',selected:false},
    {label:'Car2',value:'bike1',selected:false},
    {label:'Cycle2',value:'bike1',selected:false},
    {label:'Bike3',value:'bike1',selected:false},
    {label:'Car3',value:'bike1',selected:false},
    {label:'Cycle3',value:'bike1',selected:false},
    {label:'Bike4',value:'bike1',selected:false},
    {label:'Car4',value:'bike1',selected:false},
    {label:'Cycle4',value:'bike1',selected:false}
  ];

  selecteddata=[];
  count!: number;

  

  constructor() {}

  
  //  SignupForm = new FormGroup({
  //     bike:new FormControl(false),
  //     car:new FormControl(true)
  //  });
   
  

  ngOnInit(): void { }

  
  
  onSelect(item:any){
  this.data.filter(selectCheckbox=>{
      if(selectCheckbox.label===item.label){
        selectCheckbox.selected=false;
      }      
    });

    // this.count = 0;
    // this.data.forEach(data=>{
    //   console.log(data)
    //   if(item.checked){
    //     this.count= this.count+1
    //   }  
    // } )

  }
  onSelectAll(){
    this.data.filter(selectCheckboxAll=>{
      selectCheckboxAll.selected=true;
    });
  }
  onUnSelectAll(){
    this.data.filter(clearAllCheckbox=>{
      clearAllCheckbox.selected=false;
    });
  }
  // checkToogle!: boolean;
  // toogleSelect1() {
  //   this.checkToogle = !this.checkToogle;
  // }
  toogleSelect(){
    this.data.filter(toogleCheckbox=>{
      toogleCheckbox.selected = true;
      // toogleCheckbox.selected = !toogleCheckbox.selected;
    });
  }
  
}
