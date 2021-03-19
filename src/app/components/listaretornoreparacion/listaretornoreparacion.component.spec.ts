import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaretornoreparacionComponent } from './listaretornoreparacion.component';

describe('ListaretornoreparacionComponent', () => {
  let component: ListaretornoreparacionComponent;
  let fixture: ComponentFixture<ListaretornoreparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaretornoreparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaretornoreparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
