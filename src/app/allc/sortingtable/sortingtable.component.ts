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
 
  order: string = 'info.name';
  reverse: boolean = false;

  collection= [
    {
      id: 1,
      info: {
        name: 'john',
        number: '555-1212',
        age: 10
      }
    }, {
      id: 5,
      info: {
        name: 'Mary',
        number: '555-9876',
        age: 19
      }
    }, {
      id: 2,
      info: {
        name: 'Mike',
        number: '555-4321',
        age: 21
      }
    }, {
      id: 3,
      info: {
        name: 'Julie',
        number: '555-8765',
        age: 29
      }
    }, {
      id: 4,
      info: {
        name: 'Adam',
        number: '555-5678',
        age: 35
      }
    },{
      id: 6,
      info: {
        name: 'Zdam',
        number: '555-5678',
        age: 35
      }
    },
  ];
  sortedCollection!: any[];

  constructor(private orderPipe: OrderPipe) {         
    for(this.i=0 ; this.i < this.list_items.length; this.i++){      
      console.log(Object.values(this.list_items[this.i]));       
    } 
    // console.log(this.orderPipe.transform(this.array, this.order));
    this.sortedCollection = orderPipe.transform(this.collection, 'info.name');
    console.log(this.sortedCollection);
  }


  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }


  ngOnInit(): void {
  }

}
