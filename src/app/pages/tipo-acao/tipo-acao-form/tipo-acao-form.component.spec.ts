import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAcaoFormComponent } from './tipo-acao-form.component';

describe('TipoAcaoFormComponent', () => {
  let component: TipoAcaoFormComponent;
  let fixture: ComponentFixture<TipoAcaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoAcaoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoAcaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
