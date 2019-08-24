import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1datamixComponent } from './sec1datamix.component';

describe('Sec1datamixComponent', () => {
  let component: Sec1datamixComponent;
  let fixture: ComponentFixture<Sec1datamixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec1datamixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec1datamixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
