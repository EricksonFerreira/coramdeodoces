import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasEncomendaFormComponent } from './vendas-encomenda-form.component';

describe('VendasEncomendaFormComponent', () => {
  let component: VendasEncomendaFormComponent;
  let fixture: ComponentFixture<VendasEncomendaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendasEncomendaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendasEncomendaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
