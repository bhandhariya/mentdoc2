import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAlgoComponent } from './s-algo.component';

describe('SAlgoComponent', () => {
  let component: SAlgoComponent;
  let fixture: ComponentFixture<SAlgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAlgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
