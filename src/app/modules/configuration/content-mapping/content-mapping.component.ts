import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-mapping',
  templateUrl: './content-mapping.component.html',
  styleUrls: ['./content-mapping.component.scss']
})
export class ContentMappingComponent implements OnInit {

  constructor() { }

  isShowMappingFileds = true;

  // isChecked = false;

  // radioStatus: boolean | undefined;

  // checked(event: any){
  //   let checkbox = event.target;
  //   this.isChecked = checkbox.checked;
  //   alert(this.isChecked);
  // }

  selected="";
  data = [
    {radio: "1", MappingName: 'test01', stagingTableName: 'test01 Name' },
    {radio: "2", MappingName: 'test02', stagingTableName: 'test02 Name' },
    {radio: "3", MappingName: 'test03', stagingTableName: 'test03 Name' }
  ]

  // toggle(event: any) {
  //   alert(event.target.id); 
  // }

  // checked(event: any) {
  //   this.radioStatus = false;
  //   console.log(event.target['checked']);
  // }
   
  toggleDisplayMappingFileds() {
    this.isShowMappingFileds = !this.isShowMappingFileds;    
  }

  ngOnInit(): void { }

}
