import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  // tooltipInnerHtml = ``;

  constructor() { }

  ngOnInit(): void {
  }

  

  // ngAfterViewInit() {
  //   (document.querySelector('.myTooltip') as HTMLElement).style.top = '150px';
  // }

}
