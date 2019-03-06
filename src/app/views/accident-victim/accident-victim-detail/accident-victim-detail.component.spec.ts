import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentVictimDetailComponent } from './accident-victim-detail.component';

describe('AccidentVictimDetailComponent', () => {
  let component: AccidentVictimDetailComponent;
  let fixture: ComponentFixture<AccidentVictimDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentVictimDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentVictimDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
