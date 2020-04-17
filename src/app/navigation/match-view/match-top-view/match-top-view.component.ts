import {Component, OnInit, ViewChild} from '@angular/core';
import {MatchService} from '../../../services/match.service';
import {MatchReport} from '../../../models/match-report.model';
import {MatPaginator, PageEvent} from '@angular/material';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-top-view.component.html',
  styleUrls: ['./match-top-view.component.css']
})
export class MatchTopViewComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  matches: MatchReport[];
  filteredMatches: MatchReport[];

  columnsToDisplay: string[] = ['date', 'homeTeam', 'awayTeam', 'location', 'result'];

  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[];

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.matches = this.matchService.getAllMatches();
    this.pageSizeOptions = [10, 20, 50, this.matches.length];
    this.filterViewByPagination();
  }

  handlePagination(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.filterViewByPagination();
  }

  private filterViewByPagination() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    this.filteredMatches = this.matches.slice(start, end);
  }
}
