import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatchReport} from '../models/match-report.model';
import {Observable} from 'rxjs';
import {ComplexMatchReport} from '../models/complex-match-report.model';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  constructor(private http: HttpClient) {
  }

  match: MatchReport;

  readFiles(): Observable<ComplexMatchReport> {
    return this.http.get<ComplexMatchReport>('assets/match_reports/2018-09-15_Gre_Lil.json', {responseType: 'json'});
  }
}

