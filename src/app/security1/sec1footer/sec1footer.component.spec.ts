import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1footerComponent } from './sec1footer.component';

describe('Sec1footerComponent', () => {
  let component: Sec1footerComponent;
  let fixture: ComponentFixture<Sec1footerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec1footerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec1footerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
