import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletadoComponent } from './autocompletado.component';

describe('AutocompletadoComponent', () => {
  let component: AutocompletadoComponent;
  let fixture: ComponentFixture<AutocompletadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompletadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
