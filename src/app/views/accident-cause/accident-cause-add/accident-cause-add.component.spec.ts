import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCauseAddComponent } from './accident-cause-add.component';

describe('AccidentCauseAddComponent', () => {
  let component: AccidentCauseAddComponent;
  let fixture: ComponentFixture<AccidentCauseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentCauseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentCauseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
