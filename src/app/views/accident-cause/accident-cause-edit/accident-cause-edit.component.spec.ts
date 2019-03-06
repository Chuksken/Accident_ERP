import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCauseEditComponent } from './accident-cause-edit.component';

describe('AccidentCauseEditComponent', () => {
  let component: AccidentCauseEditComponent;
  let fixture: ComponentFixture<AccidentCauseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentCauseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentCauseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
