import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasEmpresaFormComponent } from './vendas-empresa-form.component';

describe('VendasEmpresaFormComponent', () => {
  let component: VendasEmpresaFormComponent;
  let fixture: ComponentFixture<VendasEmpresaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendasEmpresaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendasEmpresaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
