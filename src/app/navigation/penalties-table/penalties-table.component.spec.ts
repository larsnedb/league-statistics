import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PenaltiesTableComponent} from './penalties-table.component';

describe('PenaltiesTableComponent', () => {
  let component: PenaltiesTableComponent;
  let fixture: ComponentFixture<PenaltiesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PenaltiesTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
