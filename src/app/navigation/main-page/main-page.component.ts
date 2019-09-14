import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  appMenu: any;

  constructor() { }

  ngOnInit() {
  }

  executeSelectedChange(event: MatTabChangeEvent) {
    console.log('Navigating to: ' + event.tab.textLabel);
  }
}
