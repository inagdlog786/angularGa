import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab-layout',
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.scss']
})
export class TabLayoutComponent implements OnInit {

  constructor() { }

  allconfig = new FormGroup({
    // username: new FormControl('')
  });


  ngOnInit(): void {
  }

}
