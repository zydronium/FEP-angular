import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationdetailComponent } from './registrationdetail.component';

describe('RegistrationdetailComponent', () => {
  let component: RegistrationdetailComponent;
  let fixture: ComponentFixture<RegistrationdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
