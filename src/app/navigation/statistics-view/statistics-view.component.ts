import {Component, OnInit} from '@angular/core';
import {FileReaderService} from '../../services/file-reader.service';
import {MatchReport} from '../../models/match-report.model';
import {ComplexMatchReport} from '../../models/complex-match-report.model';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.css']
})
export class StatisticsViewComponent implements OnInit {

  constructor(private fileReader: FileReaderService) {
  }

  match: MatchReport;

  ngOnInit() {
    this.fileReader.readFiles().subscribe(result => {
      this.match = this.simplifyMatchObject(result);
    });
  }

  private simplifyMatchObject(matchReport: ComplexMatchReport): MatchReport {
    return {
      info: matchReport.info[0],
      pens: matchReport.pens[0],
      Goals: matchReport.Goals[0],
      participants: matchReport.participants[0]
    };
  }

}
