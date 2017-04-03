import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InschrijvingenComponent } from './registrations.component';

describe('InschrijvingenComponent', () => {
  let component: InschrijvingenComponent;
  let fixture: ComponentFixture<InschrijvingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InschrijvingenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InschrijvingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
