import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duallist',
  templateUrl: './duallist.component.html',
  styleUrls: ['./duallist.component.scss']
})
export class DuallistComponent implements OnInit {

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
    } else {
      this.list1.forEach(item => {
        if (item.selected) {
          this.list2.push(item);
        }
      });
      this.list1 = this.list1.filter(i => !i.selected);
    }
  }
  public moveAll(direction: string) {
    if (direction === 'left') {
      this.list1 = [...this.list1, ...this.list2];
      this.list2 = [];
    } else {
      this.list2 = [...this.list2, ...this.list1];
      this.list1 = [];
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.list1 = [...this.list1, ...this.list2];
    this.list2 = [];
  }

}
