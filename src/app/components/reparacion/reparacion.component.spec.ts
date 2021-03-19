import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparacionComponent } from './reparacion.component';

describe('ReparacionComponent', () => {
  let component: ReparacionComponent;
  let fixture: ComponentFixture<ReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
