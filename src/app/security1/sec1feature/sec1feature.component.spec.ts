import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1featureComponent } from './sec1feature.component';

describe('Sec1featureComponent', () => {
  let component: Sec1featureComponent;
  let fixture: ComponentFixture<Sec1featureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec1featureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec1featureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
