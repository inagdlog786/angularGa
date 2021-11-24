import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-duallist',
  templateUrl: './duallist.component.html',
  styleUrls: ['./duallist.component.scss']
})
export class DuallistComponent implements OnInit {

  selectedData = [{ id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6 }];
  geethaData = [{ id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6 }];

  //
  selected?: string;
  mySearchCreteria: string[] =[
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  //


  list1 = [
    { text: 'item 1', selected: false },
    { text: 'item 2', selected: false },
    { text: 'item 3', selected: false },
    { text: 'item 4', selected: false },
    { text: 'item 5', selected: false },
    { text: 'item 6', selected: false }
  ];
  list2 = [
    { text: 'item 7', selected: false }
  ];

  public toggleSelection(item: { selected: boolean; }, list: any) {
    item.selected = !item.selected;
  }

  public moveSelected(direction: string) {
    if (direction === 'left') {
      this.list2.forEach(item => {
        if (item.selected) {
          this.list1.push(item);
        }
      });
      this.list2 = this.list2.filter(i => !i.selected);
      
      this.list1.forEach(x=>{
        x.selected=false;
      })

    } else {
      this.list1.forEach(item => {
        if (item.selected) {
          // item.selected=false;
          this.list2.push(item);
        }
      });
      this.list1 = this.list1.filter(i => !i.selected);
      this.list2.forEach(x=>{
        x.selected=false;
      })
    }
  }
  public moveAll(direction: string) {
    if (direction === 'left') {
      this.list1 = [...this.list1, ...this.list2];
      this.list2 = [];
    } else {
      this.list1.forEach(x=>{
        x.selected=false;
      })
      this.list2 = [...this.list2, ...this.list1];
      this.list1 = [];
    }
  }


  

  constructor() { }

  ngOnInit(): void {
    this.list1 = [...this.list1, ...this.list2];
    this.list2 = [];
  }

  



  OnselectAllList1(){
    this.list1.forEach(x=>{
      x.selected=true;
    })
  }
  
  OnselectAllList2(){
    this.list2.forEach(x=>{
      x.selected=true;
    })
  }
  

}
