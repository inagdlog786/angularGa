import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-mapping',
  templateUrl: './content-mapping.component.html',
  styleUrls: ['./content-mapping.component.scss']
})
export class ContentMappingComponent implements OnInit {

  constructor() { }

  isShowMappingFileds = true;
   
  toggleDisplayMappingFileds() {
    this.isShowMappingFileds = !this.isShowMappingFileds;    
  }

  ngOnInit(): void { }

}
