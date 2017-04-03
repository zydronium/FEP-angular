import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterworkshopfieldvalidationComponent } from './registerworkshopfieldvalidation.component';

describe('RegisterworkshopfieldvalidationComponent', () => {
  let component: RegisterworkshopfieldvalidationComponent;
  let fixture: ComponentFixture<RegisterworkshopfieldvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterworkshopfieldvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterworkshopfieldvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
