import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterworkshopfieldvalidationplusComponent } from './registerworkshopfieldvalidationplus.component';

describe('RegisterworkshopfieldvalidationplusComponent', () => {
  let component: RegisterworkshopfieldvalidationplusComponent;
  let fixture: ComponentFixture<RegisterworkshopfieldvalidationplusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterworkshopfieldvalidationplusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterworkshopfieldvalidationplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
