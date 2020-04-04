import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStandingsComponent } from './table-standings.component';

describe('TableStandingsComponent', () => {
  let component: TableStandingsComponent;
  let fixture: ComponentFixture<TableStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
