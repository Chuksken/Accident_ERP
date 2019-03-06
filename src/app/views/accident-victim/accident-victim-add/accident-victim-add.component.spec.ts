import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentVictimAddComponent } from './accident-victim-add.component';

describe('AccidentVictimAddComponent', () => {
  let component: AccidentVictimAddComponent;
  let fixture: ComponentFixture<AccidentVictimAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentVictimAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentVictimAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
