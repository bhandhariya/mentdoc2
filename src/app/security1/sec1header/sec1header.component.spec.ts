import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1headerComponent } from './sec1header.component';

describe('Sec1headerComponent', () => {
  let component: Sec1headerComponent;
  let fixture: ComponentFixture<Sec1headerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec1headerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec1headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
