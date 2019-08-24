import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1secureplaceComponent } from './sec1secureplace.component';

describe('Sec1secureplaceComponent', () => {
  let component: Sec1secureplaceComponent;
  let fixture: ComponentFixture<Sec1secureplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec1secureplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec1secureplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
