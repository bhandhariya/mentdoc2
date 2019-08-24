import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Security1Component } from './security1.component';

describe('Security1Component', () => {
  let component: Security1Component;
  let fixture: ComponentFixture<Security1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Security1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Security1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
