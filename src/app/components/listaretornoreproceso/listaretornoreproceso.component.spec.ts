import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaretornoreprocesoComponent } from './listaretornoreproceso.component';

describe('ListaretornoreprocesoComponent', () => {
  let component: ListaretornoreprocesoComponent;
  let fixture: ComponentFixture<ListaretornoreprocesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaretornoreprocesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaretornoreprocesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
