import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  clickMessage = '';

  constructor() { }


  ngOnInit(): void { }

  addFunction(){
    alert(5);
    this.clickMessage = 'You are my hero!';
    console.log(this.clickMessage)
  }

}
