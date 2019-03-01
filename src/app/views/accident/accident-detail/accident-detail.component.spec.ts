import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentDetailComponent } from './accident-detail.component';

describe('AccidentDetailComponent', () => {
  let component: AccidentDetailComponent;
  let fixture: ComponentFixture<AccidentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
