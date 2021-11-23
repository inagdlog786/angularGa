import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showForm: boolean = false;
  destinationToogle(){
      this.showForm = !this.showForm;       
  }
  destinationEdit(){
    this.showForm  = true;       
  }

  //
  destinationGroupRow = [
    {
      groupName : 'LAC-UP',
      osb: '72300',
      dsb: '',
      scac: '',
      station: '',
      state: '',
      oc: ''
    },
    {
      groupName : 'LAC-UP',
      osb: '72300',
      dsb: '',
      scac: '',
      station: '',
      state: '',
      oc: ''
    },
    {
      groupName : 'LAC-UP',
      osb: '',
      dsb: '',
      scac: '',
      station: '',
      state: '',
      oc: ''
    }
  ];
  
  addTable() {
    const obj = {
      groupName : 'LAC-UP',
      osb: '',
      dsb: '',
      scac: '',
      station: '',
      state: '',
      oc: ''
    }
    this.destinationGroupRow.push(obj)
  }
  
  deletedestinationGroupRow(x: any){
    // var delBtn = confirm(" Do you want to delete ?");
    // if ( delBtn == true ) {
    //   this.row.splice(x, 1 );
    // }  
    this.destinationGroupRow.splice(x, 1 ); 
  } 
       
  //
}
