import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentVictimListComponent } from './accident-victim-list.component';

describe('AccidentVictimListComponent', () => {
  let component: AccidentVictimListComponent;
  let fixture: ComponentFixture<AccidentVictimListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentVictimListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentVictimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
