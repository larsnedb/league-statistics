import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CummulativeStandingsComponent } from './cummulative-standings.component';

describe('CummulativeStandingsComponent', () => {
  let component: CummulativeStandingsComponent;
  let fixture: ComponentFixture<CummulativeStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CummulativeStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CummulativeStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
