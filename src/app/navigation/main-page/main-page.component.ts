import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  executeSelectedChange(event: MatTabChangeEvent) {
    this.router.navigate([event.tab.textLabel.toLowerCase()]);
  }
}
