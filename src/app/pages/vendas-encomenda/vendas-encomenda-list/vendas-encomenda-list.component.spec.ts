import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasEncomendaListComponent } from './vendas-encomenda-list.component';

describe('VendasEncomendaListComponent', () => {
  let component: VendasEncomendaListComponent;
  let fixture: ComponentFixture<VendasEncomendaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendasEncomendaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendasEncomendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
