import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasEmpresaListComponent } from './vendas-empresa-list.component';

describe('VendasEmpresaListComponent', () => {
  let component: VendasEmpresaListComponent;
  let fixture: ComponentFixture<VendasEmpresaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendasEmpresaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendasEmpresaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
