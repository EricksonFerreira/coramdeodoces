import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTransacaoFormComponent } from './tipo-transacao-form.component';

describe('TipoTransacaoFormComponent', () => {
  let component: TipoTransacaoFormComponent;
  let fixture: ComponentFixture<TipoTransacaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoTransacaoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoTransacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
