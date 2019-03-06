import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentVictimEditComponent } from './accident-victim-edit.component';

describe('AccidentVictimEditComponent', () => {
  let component: AccidentVictimEditComponent;
  let fixture: ComponentFixture<AccidentVictimEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentVictimEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentVictimEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
