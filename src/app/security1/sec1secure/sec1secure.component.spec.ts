import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1secureComponent } from './sec1secure.component';

describe('Sec1secureComponent', () => {
  let component: Sec1secureComponent;
  let fixture: ComponentFixture<Sec1secureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec1secureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec1secureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
