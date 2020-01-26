import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cummulative-standings',
  templateUrl: './cummulative-standings.component.html',
  styleUrls: ['./cummulative-standings.component.css']
})
export class CummulativeStandingsComponent implements OnInit {

  @Input() matchData;

  constructor() { }

  ngOnInit() {
  }

}
