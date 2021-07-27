import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wolterskluwer',
  templateUrl: './wolterskluwer.component.html',
  styleUrls: ['./wolterskluwer.component.scss']
})
export class WolterskluwerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    window.location.href = "https://google.com/about";
  }

}
