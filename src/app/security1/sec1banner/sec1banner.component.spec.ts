import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1bannerComponent } from './sec1banner.component';

describe('Sec1bannerComponent', () => {
  let component: Sec1bannerComponent;
  let fixture: ComponentFixture<Sec1bannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec1bannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec1bannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
