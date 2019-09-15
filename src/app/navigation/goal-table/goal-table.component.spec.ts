import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GoalTableComponent} from './goal-table.component';

describe('GoalTableComponent', () => {
  let component: GoalTableComponent;
  let fixture: ComponentFixture<GoalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoalTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
