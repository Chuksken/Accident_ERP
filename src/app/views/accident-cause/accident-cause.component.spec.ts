import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCauseComponent } from './accident-cause.component';

describe('AccidentCauseComponent', () => {
  let component: AccidentCauseComponent;
  let fixture: ComponentFixture<AccidentCauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentCauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
