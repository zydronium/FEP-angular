import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterworkshopformvalidationComponent } from './registerworkshopformvalidation.component';

describe('RegisterworkshopformvalidationComponent', () => {
  let component: RegisterworkshopformvalidationComponent;
  let fixture: ComponentFixture<RegisterworkshopformvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterworkshopformvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterworkshopformvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
