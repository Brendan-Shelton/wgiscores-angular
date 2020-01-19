import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCircuitsComponent } from './local-circuits.component';

describe('LocalCircuitsComponent', () => {
  let component: LocalCircuitsComponent;
  let fixture: ComponentFixture<LocalCircuitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalCircuitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalCircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
