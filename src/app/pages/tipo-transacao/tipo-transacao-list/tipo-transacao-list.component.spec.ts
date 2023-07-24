import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTransacaoListComponent } from './tipo-transacao-list.component';

describe('TipoTransacaoListComponent', () => {
  let component: TipoTransacaoListComponent;
  let fixture: ComponentFixture<TipoTransacaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoTransacaoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoTransacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
