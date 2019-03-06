import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentVictimComponent } from './accident-victim.component';

describe('AccidentVictimComponent', () => {
  let component: AccidentVictimComponent;
  let fixture: ComponentFixture<AccidentVictimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentVictimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentVictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
