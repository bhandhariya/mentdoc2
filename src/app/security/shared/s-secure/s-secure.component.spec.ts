import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSecureComponent } from './s-secure.component';

describe('SSecureComponent', () => {
  let component: SSecureComponent;
  let fixture: ComponentFixture<SSecureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSecureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
