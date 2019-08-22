import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSecComponent } from './header-sec.component';

describe('HeaderSecComponent', () => {
  let component: HeaderSecComponent;
  let fixture: ComponentFixture<HeaderSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
