import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAcaoListComponent } from './tipo-acao-list.component';

describe('TipoAcaoListComponent', () => {
  let component: TipoAcaoListComponent;
  let fixture: ComponentFixture<TipoAcaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoAcaoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoAcaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
