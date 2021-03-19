import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoretornoComponent } from './listadoretorno.component';

describe('ListadoretornoComponent', () => {
  let component: ListadoretornoComponent;
  let fixture: ComponentFixture<ListadoretornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoretornoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoretornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
