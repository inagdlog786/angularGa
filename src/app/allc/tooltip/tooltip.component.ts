import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  // tooltipInnerHtml = ``;


  isShowMultiSelect = true;
   
  openMultiselect() {
    this.isShowMultiSelect = !this.isShowMultiSelect;
  }

  //
  viewAll=true;
  data=[
    {label:'BikebikebikebikebikebikebikeBikebikebikebikebikebikebike',value:'bikebikebikebikebikebikebike',selected:true},
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

  optionsModel: number[] = [];
  //

  constructor() { }

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

    onFindSelectedList(){
      this.selecteddata=[];
      this.data.forEach(checklist=>{
        if(checklist.selected){
          this.selecteddata.push(checklist);
        }
      });
      this.selectall= (this.data.length === this.selecteddata.length) ? true:false;
    }
  

  

  // ngAfterViewInit() {
  //   (document.querySelector('.myTooltip') as HTMLElement).style.top = '150px';
  // }

}
