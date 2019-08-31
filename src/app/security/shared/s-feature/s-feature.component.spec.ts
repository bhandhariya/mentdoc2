import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SFeatureComponent } from './s-feature.component';

describe('SFeatureComponent', () => {
  let component: SFeatureComponent;
  let fixture: ComponentFixture<SFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
