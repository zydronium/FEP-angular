import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateinputsexampleComponent } from './stateinputsexample.component';

describe('StateinputsexampleComponent', () => {
  let component: StateinputsexampleComponent;
  let fixture: ComponentFixture<StateinputsexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateinputsexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateinputsexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
