import {Component, OnInit} from '@angular/core';
import {FileReaderService} from '../../services/file-reader.service';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.css']
})
export class StatisticsViewComponent implements OnInit {

  constructor(private fileReader: FileReaderService) {
  }

  ngOnInit() {
    this.fileReader.readFiles();
  }

}
