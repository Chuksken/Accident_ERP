import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCauseDetailComponent } from './accident-cause-detail.component';

describe('AccidentCauseDetailComponent', () => {
  let component: AccidentCauseDetailComponent;
  let fixture: ComponentFixture<AccidentCauseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentCauseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentCauseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
