import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-sortingtable',
  templateUrl: './sortingtable.component.html',
  styleUrls: ['./sortingtable.component.scss']
})
export class SortingtableComponent implements OnInit {

  i = 0;

  list_items  = [
    {name:'abc',code:'123'},
    {name:'def',code:'456'}
  ];
  
  keys = Object.keys(this.list_items);
  values = Object.values(this.list_items[this.i]);

  
  //
  selectedItem="";
  listItems = [
    {radio: "1", MappingName: 'test01', stagingTableName: 'test01 Name' },
    {radio: "2", MappingName: 'test02', stagingTableName: 'test02 Name' },
    {radio: "3", MappingName: 'test03', stagingTableName: 'test03 Name' }
  ]
  //
 

  constructor() {         
    for(this.i=0 ; this.i < this.list_items.length; this.i++){      
      console.log(Object.values(this.list_items[this.i]));       
    } 
  }


  ngOnInit(): void {
  }

}
