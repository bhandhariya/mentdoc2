import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecutiryComponent } from './secutiry.component';

describe('SecutiryComponent', () => {
  let component: SecutiryComponent;
  let fixture: ComponentFixture<SecutiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecutiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecutiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
