import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterworkshopComponent } from './registerworkshop.component';

describe('RegisterworkshopComponent', () => {
  let component: RegisterworkshopComponent;
  let fixture: ComponentFixture<RegisterworkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterworkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
