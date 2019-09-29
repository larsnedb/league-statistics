import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatchReport} from '../models/match-report.model';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  constructor(private http: HttpClient) {
  }

  match: MatchReport;

  readFiles() {
    this.http.get<MatchReport>('assets/match_reports/2018-09-15_Gre_Lil.json', {responseType: 'json'})
      .subscribe(result => {
        this.match = result;
        console.log(this.match);
      });
  }
}

