import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedetailsComponent } from './templatedetails.component';

describe('TemplatedetailsComponent', () => {
    let component: TemplatedetailsComponent;
    let fixture: ComponentFixture<TemplatedetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TemplatedetailsComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TemplatedetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
