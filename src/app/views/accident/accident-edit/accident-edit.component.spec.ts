import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentEditComponent } from './accident-edit.component';

describe('AccidentEditComponent', () => {
  let component: AccidentEditComponent;
  let fixture: ComponentFixture<AccidentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
