import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCauseListComponent } from './accident-cause-list.component';

describe('AccidentCauseListComponent', () => {
  let component: AccidentCauseListComponent;
  let fixture: ComponentFixture<AccidentCauseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentCauseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentCauseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
